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
    progressBar: document.querySelector(".progress-bar"),
    
    init() {
        likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
        const savedMusicIndex = localStorage.getItem('musicIndex');
        const savedTime = localStorage.getItem('currentTime');

        this.renderAllSongs();
        this.renderLibrary();
        this.setupAudioEvents();
        this.setDefaultCover();
        this.updateNavState('home');

        if (savedMusicIndex !== null) {
            musicIndex = parseInt(savedMusicIndex);
            this.loadMusic(musicIndex, false);
            
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

    preloadNextMusic() {
        const playlist = this.getCurrentPlaylist();
        const currentSong = allMusic[musicIndex];
        let currentIndex = playlist.indexOf(currentSong);
        if (currentIndex !== -1 && playlist.length > 1) {
            const nextMusic = playlist[(currentIndex + 1) % playlist.length];
            fetch(`music/s${nextMusic.id}/s${nextMusic.id}.m3u8`).catch(() => {});
        }
    },

    getPlaylistNameById(id) {
        if (id === 'liked') return "已按讚的歌曲";
        if (id === 'new') return "新上架";
        if (id === 'sizzy') return "sizzy";
        return "所有歌曲";
    },

    updatePlaylistLabel() {
        const name = this.getPlaylistNameById(currentPlaylistId);
        const miniLabel = document.getElementById("mini-playlist-label") || document.getElementById("playlist-label"); 
        if (miniLabel) miniLabel.innerText = name;
        
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
        const activeBtn = document.querySelector(`.bottom-nav a[onclick*="'${viewName}'"]`);
        if(activeBtn) activeBtn.classList.add('active');
    },

    setDefaultCover() {
        const defaultImg = "images/default-cover.jpg";
        if (document.getElementById("mini-img")) document.getElementById("mini-img").src = defaultImg;
        if (document.getElementById("main-img")) document.getElementById("main-img").src = defaultImg;
    },

    updateMediaSession() {
        const music = allMusic[musicIndex];
        if (!('mediaSession' in navigator) || !music) return;

        navigator.mediaSession.metadata = new MediaMetadata({
            title: music.name,
            artist: music.artist,
            artwork: [{ src: music.img, sizes: '512x512', type: 'image/jpeg' }]
        });

        navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused";

        const actions = [
            ['previoustrack', () => this.prevSong()],
            ['nexttrack', () => this.nextSong()],
            ['play', () => this.playSong()],
            ['pause', () => this.pauseSong()]
        ];

        for (const [action, handler] of actions) {
            try {
                navigator.mediaSession.setActionHandler(action, handler);
            } catch (e) {}
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
        this.loadMusic(musicIndex, true);
    },

    loadMusic(index, autoPlay = false) {
        const music = allMusic[musicIndex];
        if (!music) return;

        if(document.getElementById("mini-img")) document.getElementById("mini-img").src = music.img;
        if(document.getElementById("mini-name")) document.getElementById("mini-name").innerText = music.name;
        if(document.getElementById("main-img")) document.getElementById("main-img").src = music.img;
        if(document.querySelector(".song-details .name")) document.querySelector(".song-details .name").innerText = music.name;
        if(document.querySelector(".song-details .artist")) document.querySelector(".song-details .artist").innerText = music.artist;
        
        this.updatePlaylistLabel();
        this.updatePlayerLikeBtn();

        document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${music.img}')`;

        const streamUrl = `music/s${music.id}/s${music.id}.m3u8`;

        if (hls) {
            hls.destroy();
            hls = null;
        }

        if (Hls.isSupported()) {
            hls = new Hls({ lowLatencyMode: true });
            hls.loadSource(streamUrl);
            hls.attachMedia(mainAudio);
        } else if (mainAudio.canPlayType('application/vnd.apple.mpegurl')) {
            mainAudio.src = streamUrl;
        } else {
            mainAudio.src = `music/s${music.id}/s${music.id}.mp3`;
        }

        this.displayLyrics(music.lyrics);
        this.updateTranslationBtnStyle();
        this.updateMediaSession();

        if (autoPlay) {
            this.playSong();
        }
        
        this.preloadNextMusic();
    },

    playSong() {
        const playPromise = mainAudio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                this.updatePlayIcons();
                this.updateMediaSession();
            }).catch(err => {
                console.warn("播放受阻:", err);
                isPlaying = false;
                this.updatePlayIcons();
            });
        }
    },

    pauseSong() {
        mainAudio.pause();
        isPlaying = false;
        this.updatePlayIcons();
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = "paused";
        }
    },

    updatePlayIcons() {
        const icon = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
        const miniBtn = document.getElementById("mini-play-btn");
        const playBtn = document.getElementById("play-pause-btn");
        if (miniBtn) miniBtn.innerHTML = icon;
        if (playBtn) playBtn.innerHTML = icon;
        if (this.miniPlayIcon) this.miniPlayIcon.className = isPlaying ? "fas fa-pause" : "fas fa-play";
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
        if (!playlist.length) return;
        const currentSong = allMusic[musicIndex];
        let currentIndexInPlaylist = playlist.indexOf(currentSong);
        if (currentIndexInPlaylist === -1) currentIndexInPlaylist = 0;
        
        const nextIndexInPlaylist = (currentIndexInPlaylist + 1) % playlist.length;
        musicIndex = allMusic.indexOf(playlist[nextIndexInPlaylist]);
        this.loadMusic(musicIndex, true);
    },

    prevSong() {
        const playlist = this.getCurrentPlaylist();
        if (!playlist.length) return;
        const currentSong = allMusic[musicIndex];
        let currentIndexInPlaylist = playlist.indexOf(currentSong);
        if (currentIndexInPlaylist === -1) currentIndexInPlaylist = 0;
        
        const prevIndexInPlaylist = (currentIndexInPlaylist - 1 + playlist.length) % playlist.length;
        musicIndex = allMusic.indexOf(playlist[prevIndexInPlaylist]);
        this.loadMusic(musicIndex, true);
    },

    seek(e) {
        const container = e.currentTarget;
        const width = container.clientWidth;
        const clickX = e.offsetX;
        const duration = mainAudio.duration;
        if (!isNaN(duration) && duration > 0) {
            mainAudio.currentTime = (clickX / width) * duration;
        }
    },

    toggleLoop() {
        isLoop = !isLoop;
        mainAudio.loop = isLoop;

        const miniLoopBtn = document.getElementById("mini-loop-btn");
        const fullLoopBtn = document.getElementById("full-loop-btn");

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
        
        const diffDays = (today - dateOnly) / (1000 * 60 * 60 * 24);

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

            if ('mediaSession' in navigator && 'setPositionState' in navigator.mediaSession && duration) {
                try {
                    navigator.mediaSession.setPositionState({
                        duration: duration,
                        playbackRate: mainAudio.playbackRate,
                        position: currentTime
                    });
                } catch(e) {}
            }
        });

        mainAudio.addEventListener("ended", () => {
            localStorage.setItem('currentTime', 0);
            if (!isLoop) this.nextSong();
        });

        mainAudio.addEventListener("pause", () => {
            if (isPlaying) {
                isPlaying = false;
                this.updatePlayIcons();
                if ('mediaSession' in navigator) navigator.mediaSession.playbackState = "paused";
            }
        });
    },

    displayLyrics(lyrics) {
        const wrapper = document.getElementById("lyrics-wrapper");
        if (!wrapper || !lyrics) return;
        wrapper.innerHTML = lyrics.map(line => {
            const textToDisplay = (isTranslated && line.translation) ? line.translation : line.text;
            return `<div class="lyric-line"><div class="main-text">${textToDisplay}</div></div>`;
        }).join("");
    },

    updateLyrics(currentTime) {
        const currentSong = allMusic[musicIndex];
        if (!currentSong || !currentSong.lyrics) return;

        const lyrics = currentSong.lyrics;
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
        isTranslated = !isTranslated;
        const translateBtn = document.getElementById("btn-translate");
        if (translateBtn) {
            translateBtn.classList.toggle('active', isTranslated);
            translateBtn.style.color = isTranslated ? "#ff85a2" : "#fff";
        }
        if (allMusic[musicIndex]) {
            this.displayLyrics(allMusic[musicIndex].lyrics);
        }
    },
};

window.app = app;

window.showView = (viewName) => {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    const target = document.getElementById(viewName + "-view");
    if (target) target.classList.add("active");
    app.updateNavState(viewName);
};

window.togglePlayerView = () => {
    if(app.fullPlayer) {
        app.fullPlayer.classList.toggle('active');
        restorePageInteraction();
    }
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

window.closeAnnouncement = () => {
    const bar = document.getElementById("announcement-bar");
    if (bar) {
        bar.style.display = "none";
        const contentArea = document.getElementById("content-area");
        if (contentArea) contentArea.style.marginTop = "0px";
    }
};

/* --- 頁面焦點與觸控層狀態復原 --- */
function restorePageInteraction() {
    requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";

        const fullPlayer = document.getElementById("full-player");
        if (fullPlayer) {
            fullPlayer.style.pointerEvents = fullPlayer.classList.contains("active") ? "auto" : "none";
        }

        const bottomPlayer = document.getElementById("bottom-player");
        if (bottomPlayer) bottomPlayer.style.pointerEvents = "auto";

        const bottomNav = document.querySelector(".bottom-nav");
        if (bottomNav) bottomNav.style.pointerEvents = "auto";
    });
}

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        setTimeout(restorePageInteraction, 100);
        setTimeout(restorePageInteraction, 500);
        if (app && allMusic[musicIndex]) {
            app.updateMediaSession();
            app.updatePlayIcons();
        }
    }
});

window.addEventListener("pageshow", () => {
    setTimeout(restorePageInteraction, 100);
    setTimeout(restorePageInteraction, 500);
});

window.addEventListener("focus", () => {
    setTimeout(restorePageInteraction, 100);
});

window.addEventListener("load", () => app.init());