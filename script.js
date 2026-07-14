mergeLyricsToMusic(allMusic);

let musicIndex = 0;
let mainAudio = new Audio();
let isPlaying = false;
let currentLyricIndex = -1;
let isTranslated = false;
let isLoop = false;
let hls = null; 
let likedSongs = []; 
let currentPlaylistId = null; 
let currentPlaylistName = "所有歌曲";

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

const app = {
    homeList: document.getElementById("home-list"),
    libraryList: document.getElementById("library-list"),
    miniPlayer: document.getElementById("bottom-player"),
    fullPlayer: document.getElementById("full-player"),
    miniPlayIcon: document.getElementById("mini-play"),
    bgVideo: document.getElementById("bg-video"),
    progressBar: document.querySelector(".progress-bar"),
    
    init() {
        // 1. 讀取儲存的資料
        likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
        const savedMusicIndex = localStorage.getItem('musicIndex');
        const savedTime = localStorage.getItem('currentTime');

        // 2. 初始化 HLS
        if (Hls.isSupported()) {
            hls = new Hls({ lowLatencyMode: true });
            hls.attachMedia(mainAudio);
        }
        
        this.renderAllSongs();
        this.renderLibrary();
        this.setupAudioEvents();
        this.setDefaultCover();
        this.setupInitialMediaSession();
        this.updateNavState('home');

        // 3. 恢復上次播放狀態 
        if (savedMusicIndex !== null) {
            musicIndex = parseInt(savedMusicIndex);
            this.loadMusic(musicIndex);
            
            // 恢復時間
            mainAudio.addEventListener('loadedmetadata', () => {
                if (savedTime) mainAudio.currentTime = parseFloat(savedTime);
            }, { once: true });
        }
    },

    updateTranslationBtnStyle() {
        const btn = document.getElementById("btn-translate");
        if (btn) {
            btn.style.color = isTranslated ? "#ff85a2" : "#fff";
        }
    },

    // 1. 預載下一首功能
    preloadNextMusic() {
        const nextIndex = (musicIndex + 1) % allMusic.length;
        const nextMusic = allMusic[nextIndex];
        fetch(`music/s${nextMusic.id}/s${nextMusic.id}.m3u8`).catch(() => {});
    },

    getPlaylistNameById(id) {
        if (id === 'liked') return "已按讚的歌曲";
        if (id === 'new') return "新上架";
        if (id === 'sizzy') return "sizzy";
        return "所有歌曲";
    },

    updatePlaylistLabel() {
        const name = this.getPlaylistNameById(currentPlaylistId);
        // 顯示在 Mini Player 的 mini-info 區域
        const miniLabel = document.getElementById("mini-playlist-label"); 
        if (miniLabel) miniLabel.innerText = name;
        
        // 顯示在 Full Player 的標題區域
        const fullHeader = document.querySelector(".player-card .player-header p");
        if (fullHeader) fullHeader.innerText = name;
    },

    toggleLike(id, event, isFromPlayer = false) {
        if (event) event.stopPropagation();
        
        if (likedSongs.includes(id)) {
            likedSongs = likedSongs.filter(songId => songId !== id);
        } else {
            likedSongs.push(id);
        }

        localStorage.setItem('likedSongs', JSON.stringify(likedSongs));

        if (currentPlaylistId) {
            this.openPlaylist(currentPlaylistId);
        } else {
            this.renderLibrary();
        }

        if (isFromPlayer) this.updatePlayerLikeBtn();
    },

    toggleLikeInPlayer() {
        const currentMusic = allMusic[musicIndex];
        if (currentMusic) this.toggleLike(currentMusic.id, null, true);
    },

    updatePlayerLikeBtn() {
        const btn = document.getElementById("full-player-like-btn");
        if (!btn) return;
        const currentMusic = allMusic[musicIndex];
        const isLiked = likedSongs.includes(currentMusic.id);
        btn.innerHTML = `<i class="${isLiked ? 'fas' : 'far'} fa-heart" style="${isLiked ? 'color:#ff85a2;' : ''}"></i>`;
    },

    updateNavState(viewName) {
        document.querySelectorAll('.bottom-nav a').forEach(a => a.classList.remove('active'));
        const activeBtn = document.querySelector(`.bottom-nav a[onclick="showView('${viewName}')"]`);
        if(activeBtn) activeBtn.classList.add('active');
    },

    setupInitialMediaSession() {
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: "請選擇歌曲",
                artist: "不是設計愛情 是設計我",
                artwork: [{ src: 'images/default-cover.jpg', sizes: '512x512', type: 'image/jpeg' }]
            });
            navigator.mediaSession.setActionHandler('previoustrack', () => this.prevSong());
            navigator.mediaSession.setActionHandler('nexttrack', () => this.nextSong());
            navigator.mediaSession.setActionHandler('play', () => this.playSong());
            navigator.mediaSession.setActionHandler('pause', () => this.pauseSong());
        }
    },
    
    setDefaultCover() {
        const defaultImg = "images/default-cover.jpg";
        if (document.getElementById("mini-img")) document.getElementById("mini-img").src = defaultImg;
        if (document.getElementById("main-img")) document.getElementById("main-img").src = defaultImg;
    },

    updateMediaSession() {
        const music = allMusic[musicIndex];
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: music.name,
                artist: music.artist,
                artwork: [{ src: music.img, sizes: '512x512', type: 'image/jpeg' }]
            });
        }
    },

    renderAllSongs() {
        if(this.homeList) {
            this.homeList.innerHTML = allMusic.map((m, i) => `
                <li onclick="app.selectAndPlay(${i})">
                    <img src="${m.img}"> <p>${m.name}</p>
                </li>
            `).join("");
        }
    },

    renderLibrary() {
        
        if(this.libraryList) {
            const updateText = this.getNewReleaseStatus(); 
            const playlists = [
                { id: 'liked', name: "已按讚的歌曲", count: `${likedSongs.length} 首歌曲`, icon: "heart" },
                { id: 'new', name: "新上架", count: updateText, icon: "bell" },
                { id: 'sizzy', name: "SIZZY", count: "6 首歌曲", icon: "music" }
            ];
            this.libraryList.innerHTML = playlists.map(p => `
                <li onclick="app.openPlaylist('${p.id}')">
                    <!-- 將這裡的 class 改為動態 -->
                    <div class="playlist-cover ${p.id}-cover"></div> 
                    <div>
                        <p style="margin:0; font-weight:bold;">${p.name}</p>
                        <small style="color:#aaa;">${p.count}</small>
                    </div>
                </li>
            `).join("");
        }
    },

    openPlaylist(id) {
        currentPlaylistId = id;
        currentPlaylistName = this.getPlaylistNameById(id);
        this.updatePlaylistLabel(); 

        let songs;

        if (id === 'liked') {
            songs = allMusic.filter(m => likedSongs.includes(m.id));
        } else if (id === 'new') {
            songs = this.getNewReleases();
        } else if (id === 'sizzy') {
            songs = allMusic.filter(m => m.id >= 21 && m.id <= 26);
        } else {
            songs = allMusic;
        }
        
        this.libraryList.innerHTML = `
            <li onclick="app.renderLibrary()" style="font-weight:bold; cursor:pointer; margin-bottom:10px;">← 返回</li>
            ${songs.map((m) => {
                const isLiked = likedSongs.includes(m.id);
                return `
                <li onclick="app.selectAndPlay(${allMusic.indexOf(m)}, '${id}')" style="display:flex; align-items:center; justify-content:space-between;">
                    <div style="display:flex; align-items:center;">
                        <img src="${m.img}" style="width:50px; height:50px; border-radius:4px;"> 
                        <div style="margin-left:15px;">
                            <p style="margin:0;">${m.name}</p>
                            <small style="color:#aaa;">${m.artist}</small>
                        </div>
                    </div>
                    <button onclick="app.toggleLike(${m.id}, event)" style="background:none; border:none; color:white; cursor:pointer; font-size:20px;">
                        <i class="${isLiked ? 'fas' : 'far'} fa-heart" style="${isLiked ? 'color:#ff85a2;' : ''}"></i>
                    </button>
                </li>`;
            }).join("")}
        `;
    },

    selectAndPlay(index, playlistId = null) {
        musicIndex = index;
        currentPlaylistId = playlistId; 
        this.updatePlaylistLabel();  
        localStorage.setItem('musicIndex', musicIndex);
        this.loadMusic(musicIndex);
        this.playSong();
    },

    loadMusic(index) {
        const music = allMusic[musicIndex];
        if(document.getElementById("mini-img")) document.getElementById("mini-img").src = music.img;
        if(document.getElementById("mini-name")) document.getElementById("mini-name").innerText = music.name;
        if(document.getElementById("main-img")) document.getElementById("main-img").src = music.img;
        if(document.querySelector(".song-details .name")) document.querySelector(".song-details .name").innerText = music.name;
        if(document.querySelector(".song-details .artist")) document.querySelector(".song-details .artist").innerText = music.artist;
        this.updatePlaylistLabel();
        this.updateMediaSession();
        this.updatePlayerLikeBtn();
       
        const streamUrl = `music/s${music.id}/s${music.id}.m3u8`; 
        
        if (Hls.isSupported() && hls) {
            hls.attachMedia(mainAudio);
            hls.loadSource(streamUrl);
        } else {
            mainAudio.src = `music/s${music.id}/s${music.id}.mp3`;
        }

        if (this.bgVideo) {
            if (music.id >= 21) {
                this.bgVideo.style.display = 'none';
                document.body.style.backgroundImage = `url('images/s${music.id}.jpg')`;
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
            } else {
                this.bgVideo.style.display = 'block';
                document.body.style.backgroundImage = "url('images/back.jpg')";
                this.bgVideo.src = `video/v${music.id}.mp4`;
                this.bgVideo.play().catch(e => {});
            }
        }
       
        
        this.displayLyrics(music.lyrics);
        this.updateTranslationBtnStyle();
        mainAudio.load();
        
        this.preloadNextMusic();
    },

    playSong() {
        mainAudio.play();
        isPlaying = true;
        const pauseIcon = '<i class="fas fa-pause"></i>';
        if (document.getElementById("mini-play-btn")) document.getElementById("mini-play-btn").innerHTML = pauseIcon;
        if (document.getElementById("play-pause-btn")) document.getElementById("play-pause-btn").innerHTML = pauseIcon;
        if (this.miniPlayIcon) this.miniPlayIcon.className = "fas fa-pause";
    },

    pauseSong() {
        mainAudio.pause();
        isPlaying = false;
        const playIcon = '<i class="fas fa-play"></i>';
        if (document.getElementById("mini-play-btn")) document.getElementById("mini-play-btn").innerHTML = playIcon;
        if (document.getElementById("play-pause-btn")) document.getElementById("play-pause-btn").innerHTML = playIcon;
        if (this.miniPlayIcon) this.miniPlayIcon.className = "fas fa-play";
    },

    togglePlay() {
        if (isPlaying) this.pauseSong();
        else this.playSong();
    },

    getCurrentPlaylist() {

        if (currentPlaylistId === 'liked') {
            return allMusic.filter(m => likedSongs.includes(m.id));
        }
        if (currentPlaylistId === 'new') {
            return this.getNewReleases();
        }
        if (currentPlaylistId === 'sizzy') {

            return allMusic.filter(m => m.id >= 21 && m.id <= 26);
        }
        return allMusic; 
    },

    nextSong() {
        const playlist = this.getCurrentPlaylist();
        const currentSong = allMusic[musicIndex];
        

        let currentIndexInPlaylist = playlist.indexOf(currentSong);
        

        if (currentIndexInPlaylist === -1) currentIndexInPlaylist = 0;
        
        const nextIndexInPlaylist = (currentIndexInPlaylist + 1) % playlist.length;
        const nextSong = playlist[nextIndexInPlaylist];
        
        musicIndex = allMusic.indexOf(nextSong);
        this.loadMusic(musicIndex);
        this.playSong();
    },

    prevSong() {
        const playlist = this.getCurrentPlaylist();
        const currentSong = allMusic[musicIndex];
        let currentIndexInPlaylist = playlist.indexOf(currentSong);
        
        if (currentIndexInPlaylist === -1) currentIndexInPlaylist = 0;
        
        const prevIndexInPlaylist = (currentIndexInPlaylist - 1 + playlist.length) % playlist.length;
        const prevSong = playlist[prevIndexInPlaylist];
        
        musicIndex = allMusic.indexOf(prevSong);
        this.loadMusic(musicIndex);
        this.playSong();
    },

    seek(e) {
        const container = e.currentTarget;
        const width = container.clientWidth;
        const clickX = e.offsetX;
        const duration = mainAudio.duration;
        if (!isNaN(duration)) mainAudio.currentTime = (clickX / width) * duration;
    },

    toggleLoop() {
    
        const miniLoopBtn = document.getElementById("mini-loop-btn");
        const fullLoopBtn = document.getElementById("full-loop-btn");

    
        isLoop = !isLoop;
        mainAudio.loop = isLoop;

    
        [miniLoopBtn, fullLoopBtn].forEach(btn => {
            if (btn) {
                if (isLoop) {
                    btn.classList.add('active');
                    btn.style.color = "#ff85a2";
                } else {
                    btn.classList.remove('active');
                    btn.style.color = "#fff";
                }
            }
        });
    },


    getNewReleaseStatus() {
        const sorted = [...allMusic].sort((a, b) => new Date(b.date) - new Date(a.date));
        const latestSong = sorted[0];
        if (!latestSong) return "無更新";
        
        const releaseDate = new Date(latestSong.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const dateOnly = new Date(releaseDate);
        dateOnly.setHours(0, 0, 0, 0);
        
        const diffTime = today - dateOnly;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        if (diffDays === 0) return "今日已更新";
        if (diffDays === 1) return "昨日已更新";
        return `${releaseDate.getMonth() + 1}月${releaseDate.getDate()}日更新`;
    },


    getNewReleases() {
        const sorted = [...allMusic].sort((a, b) => new Date(b.date) - new Date(a.date));
        return sorted.slice(0, 6);
    },

    setupAudioEvents() {
        mainAudio.addEventListener("timeupdate", (e) => {
            const { currentTime, duration } = e.target;
            if (Math.floor(currentTime) % 5 === 0) {
                localStorage.setItem('currentTime', currentTime);
            }
            if (this.progressBar && duration) {
                this.progressBar.style.width = `${(currentTime / duration) * 100}%`;
                document.getElementById("current-time").innerText = formatTime(currentTime);
                document.getElementById("total-duration").innerText = formatTime(duration);
            }
            this.updateLyrics(currentTime);
        });

        mainAudio.addEventListener("ended", () => {
            localStorage.setItem('currentTime', 0);
            if (!isLoop) this.nextSong();
        });
    },

    displayLyrics(lyrics) {
        const wrapper = document.getElementById("lyrics-wrapper");
        if (!wrapper) return;
        wrapper.innerHTML = lyrics.map(line => {
            const textToDisplay = (isTranslated && line.translation) ? line.translation : line.text;
            return `<div class="lyric-line"><div class="main-text">${textToDisplay}</div></div>`;
        }).join("");
    },

    updateLyrics(currentTime) {
        const lyrics = allMusic[musicIndex].lyrics;
        let activeIndex = lyrics.findLastIndex(l => currentTime >= l.time);
        
        if (activeIndex !== -1 && activeIndex !== currentLyricIndex) {
            currentLyricIndex = activeIndex;
            const lines = document.querySelectorAll(".lyric-line");
            lines.forEach((line, index) => {
                line.classList.toggle("active", index === activeIndex);
            });
            if (lines[activeIndex]) {
                lines[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    },

    toggleTranslation() {
        const wrapper = document.getElementById("lyrics-wrapper");
        const translateBtn = document.getElementById("btn-translate");
        const loopBtn = document.getElementById("full-loop-btn");


        isTranslated = !isTranslated;
        

        isLoop = false; 
        mainAudio.loop = false;
        loopBtn.classList.remove('active');
        loopBtn.style.color = "#fff";

       
        if (isTranslated) {
            translateBtn.classList.add('active');
            translateBtn.style.color = "#ff85a2";
        } else {
            translateBtn.classList.remove('active');
            translateBtn.style.color = "#fff";
        }
        
        this.displayLyrics(allMusic[musicIndex].lyrics);
    },
};

window.app = app;
window.showView = (viewName) => {

    document.querySelectorAll(".view").forEach(v => {
        v.classList.remove("active");
    });

    const target = document.getElementById(viewName + "-view");
    if (target) {
        target.classList.add("active");
    }

    app.updateNavState(viewName);
};

window.togglePlayerView = () => {
    if(app.fullPlayer) app.fullPlayer.classList.toggle('active');
};

window.toggleLyricsView = () => {
    const coverView = document.getElementById('cover-view');
    const lyricsView = document.getElementById('lyrics-view');
    const switchBtn = document.getElementById('view-switch-btn');
    if(!coverView || !lyricsView) return;

    if (coverView.style.display !== 'none') {
        coverView.style.display = 'none';
        lyricsView.style.display = 'flex';
        switchBtn.innerHTML = '<i class="fas fa-image"></i>';
    } else {
        coverView.style.display = 'flex';
        lyricsView.style.display = 'none';
        switchBtn.innerHTML = '<i class="fas fa-list-ul"></i>';
    }
};

window.addEventListener("load", () => app.init());

window.closeAnnouncement = () => {
    const bar = document.getElementById("announcement-bar");
    if (bar) {
        bar.style.display = "none";
        // 如果關閉後需要調整內容區高度，可在此操作
        const contentArea = document.getElementById("content-area");
        if (contentArea) contentArea.style.marginTop = "0px";
    }
};