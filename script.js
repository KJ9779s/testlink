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
        // 1. & 2. 初始化 HLS 實例 (常駐)
        if (Hls.isSupported()) {
            hls = new Hls({
                lowLatencyMode: true
            });
            hls.attachMedia(mainAudio);
        }
        
        this.renderAllSongs();
        this.renderLibrary();
        this.setupAudioEvents();
        this.setDefaultCover();
        this.setupInitialMediaSession();
        this.updateNavState('home');
    },

    // 1. 預載下一首功能
    preloadNextMusic() {
        const nextIndex = (musicIndex + 1) % allMusic.length;
        const nextMusic = allMusic[nextIndex];
        fetch(`music/s${nextMusic.id}/s${nextMusic.id}.m3u8`).catch(() => {});
    },

    toggleLike(id, event, isFromPlayer = false) {
        if (event) event.stopPropagation();
        
        if (likedSongs.includes(id)) {
            likedSongs = likedSongs.filter(songId => songId !== id);
        } else {
            likedSongs.push(id);
        }

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
                artwork: [{ src: 'default-cover.jpg', sizes: '512x512', type: 'image/jpeg' }]
            });
            navigator.mediaSession.setActionHandler('previoustrack', () => this.prevSong());
            navigator.mediaSession.setActionHandler('nexttrack', () => this.nextSong());
            navigator.mediaSession.setActionHandler('play', () => this.playSong());
            navigator.mediaSession.setActionHandler('pause', () => this.pauseSong());
        }
    },
    
    setDefaultCover() {
        const defaultImg = "default-cover.jpg";
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
        currentPlaylistId = null;
        if(this.libraryList) {
            const playlists = [
                { id: 'liked', name: "已按讚的歌曲", count: `${likedSongs.length} 首歌曲`, icon: "heart" },
                { id: 'new', name: "新集數", count: "昨日已更新", icon: "bell" }
            ];
            this.libraryList.innerHTML = playlists.map(p => `
                <li onclick="app.openPlaylist('${p.id}')">
                    <div class="playlist-cover"></div> 
                    <div>
                        <p style="margin:0; font-weight:bold;">${p.name}</p>
                        <small style="color:#aaa;">${p.count}</small>
                    </div>
                </li>
            `).join("");
        }
    },

    openPlaylist(id) {
        currentPlaylistId = id; // 設定當前清單 ID
        const songs = (id === 'liked') ? allMusic.filter(m => likedSongs.includes(m.id)) : allMusic;
        
        this.libraryList.innerHTML = `
            <li onclick="app.renderLibrary()" style="font-weight:bold; cursor:pointer; margin-bottom:10px;">← 返回</li>
            ${songs.map((m, i) => {
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

    // 在 app 物件中修改此方法
    selectAndPlay(index, playlistId = null) {
        musicIndex = index;
        
        // 如果有傳入 playlistId (例如從按讚清單點擊)，則更新為該 ID
        // 如果是從首頁點擊 (沒傳入參數)，則強制為 null
        currentPlaylistId = playlistId; 
        
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

        this.updateMediaSession();
        this.updatePlayerLikeBtn();

        const streamUrl = `music/s${music.id}/s${music.id}.m3u8`; 
        
        if (Hls.isSupported() && hls) {
            // 確保 HLS 實例連接到 audio 元素
            hls.attachMedia(mainAudio);
            hls.loadSource(streamUrl);
        } else {
            mainAudio.src = `music/s${music.id}/s${music.id}.mp3`;
        }

        if (this.bgVideo) {
            this.bgVideo.src = `video/v${music.id}.mp4`;
            this.bgVideo.play().catch(e => {});
        }
        
        this.displayLyrics(music.lyrics);
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
        // 如果 currentPlaylistId 為 null，預設回傳全部歌曲
        return allMusic;
    },

    nextSong() {
        const playlist = this.getCurrentPlaylist();
        const currentSong = allMusic[musicIndex];
        
        // 找到當前歌曲在「當前模式清單」的位置
        let currentIndexInPlaylist = playlist.indexOf(currentSong);
        
        // 如果因為切換模式導致當前歌曲不在列表內 (例如在按讚清單點完移除)，重置為 0
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
        isLoop = !isLoop;
        mainAudio.loop = isLoop;
        const buttons = document.querySelectorAll("#mini-loop-btn, #full-loop-btn");
        buttons.forEach(btn => {
            btn.style.color = isLoop ? "#ff85a2" : "#fff";
        });
    },

    setupAudioEvents() {
        mainAudio.addEventListener("timeupdate", (e) => {
            const { currentTime, duration } = e.target;
            if (this.progressBar && duration) {
                this.progressBar.style.width = `${(currentTime / duration) * 100}%`;
                document.getElementById("current-time").innerText = formatTime(currentTime);
                document.getElementById("total-duration").innerText = formatTime(duration);
            }
            this.updateLyrics(currentTime);
        });

        mainAudio.addEventListener("ended", () => {
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
        if (!wrapper) return;
        const scrollTop = wrapper.scrollTop; 
        isTranslated = !isTranslated;
        this.displayLyrics(allMusic[musicIndex].lyrics);
        requestAnimationFrame(() => {
            wrapper.scrollTop = scrollTop;
        });
    }
};

window.app = app;
window.showView = (viewName) => {
    // 移除所有 view 的 active
    document.querySelectorAll(".view").forEach(v => {
        v.classList.remove("active");
    });

    // 賦予目標 view active class
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