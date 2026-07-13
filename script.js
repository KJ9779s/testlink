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

// --- 解鎖 Audio Context 屬性 ---
mainAudio.preload = "auto";
mainAudio.playsInline = true;
mainAudio.setAttribute("playsinline", "");

let userInteracted = false;
document.addEventListener("click", () => { userInteracted = true; }, { once: true });
document.addEventListener("touchstart", () => { userInteracted = true; }, { once: true });

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
        this.renderAllSongs();
        this.renderLibrary();
        this.setupAudioEvents();
        this.setDefaultCover();
        this.setupInitialMediaSession();
        this.updateNavState('home');
    },

    updatePlayButton() {
        const pauseIcon = '<i class="fas fa-pause"></i>';
        const playIcon = '<i class="fas fa-play"></i>';
        const icon = isPlaying ? pauseIcon : playIcon;

        if (document.getElementById("mini-play-btn")) document.getElementById("mini-play-btn").innerHTML = icon;
        if (document.getElementById("play-pause-btn")) document.getElementById("play-pause-btn").innerHTML = icon;
        if (this.miniPlayIcon) this.miniPlayIcon.className = isPlaying ? "fas fa-pause" : "fas fa-play";
    },

    async playSong() {
        try {
            await mainAudio.play();
            isPlaying = true;
            this.updatePlayButton();
        } catch (err) {
            console.log("Play failed", err);
            isPlaying = false;
        }
    },

    pauseSong() {
        mainAudio.pause();
        isPlaying = false;
        this.updatePlayButton();
    },

    togglePlay() {
        if (isPlaying) this.pauseSong();
        else this.playSong();
    },

    selectAndPlay(index) {
        musicIndex = index;
        userInteracted = true;
        isPlaying = true;
        this.loadMusic(musicIndex);
    },

    loadMusic(index) {
        const music = allMusic[musicIndex];
        if (document.getElementById("mini-img")) document.getElementById("mini-img").src = music.img;
        if (document.getElementById("mini-name")) document.getElementById("mini-name").innerText = music.name;
        if (document.getElementById("main-img")) document.getElementById("main-img").src = music.img;
        if (document.querySelector(".song-details .name")) document.querySelector(".song-details .name").innerText = music.name;
        if (document.querySelector(".song-details .artist")) document.querySelector(".song-details .artist").innerText = music.artist;

        this.updateMediaSession();
        this.updatePlayerLikeBtn();

        const streamUrl = `music/s${music.id}/s${music.id}.m3u8`;
        if (Hls.isSupported()) {
            if (hls) hls.destroy();
            hls = new Hls();
            hls.loadSource(streamUrl);
            hls.attachMedia(mainAudio);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                mainAudio.play()
                    .then(() => { isPlaying = true; this.updatePlayButton(); })
                    .catch(err => console.log("Mobile autoplay blocked", err));
            });
        } else {
            mainAudio.src = `music/s${music.id}/s${music.id}.mp3`;
        }

        if (this.bgVideo) {
            this.bgVideo.src = `video/v${music.id}.mp4`;
            this.bgVideo.load();
            this.bgVideo.play().catch(e => {});
        }
        this.displayLyrics(music.lyrics);
    },

    nextSong() {
        musicIndex = (musicIndex + 1) % allMusic.length;
        this.loadMusic(musicIndex);
    },

    prevSong() {
        musicIndex = (musicIndex - 1 + allMusic.length) % allMusic.length;
        this.loadMusic(musicIndex);
    },

    setupInitialMediaSession() {
        if (!('mediaSession' in navigator)) return;
        navigator.mediaSession.setActionHandler("previoustrack", () => this.prevSong());
        navigator.mediaSession.setActionHandler("nexttrack", () => this.nextSong());
        navigator.mediaSession.setActionHandler("play", () => this.playSong());
        navigator.mediaSession.setActionHandler("pause", () => this.pauseSong());
        ["seekbackward", "seekforward", "seekto"].forEach(action => {
            try { navigator.mediaSession.setActionHandler(action, null); } catch (e) {}
        });
    },

    updateMediaSession() {
        const music = allMusic[musicIndex];
        if (!('mediaSession' in navigator)) return;

        const update = () => {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: music.name,
                artist: music.artist,
                album: "9779s Music",
                artwork: [{ src: music.img, sizes: "512x512", type: "image/jpeg" }]
            });
            if (mainAudio.duration) {
                try {
                    navigator.mediaSession.setPositionState({
                        duration: mainAudio.duration,
                        playbackRate: 1,
                        position: mainAudio.currentTime
                    });
                } catch (e) {}
            }
        };

        if (mainAudio.readyState >= 1) update();
        else mainAudio.addEventListener("loadedmetadata", update, { once: true });
    },

    setupAudioEvents() {
        mainAudio.addEventListener("timeupdate", () => {
            const { currentTime, duration } = mainAudio;
            if (this.progressBar && duration) {
                this.progressBar.style.width = `${(currentTime / duration) * 100}%`;
                document.getElementById("current-time").innerText = formatTime(currentTime);
                document.getElementById("total-duration").innerText = formatTime(duration);
            }
            this.updateLyrics(currentTime);

            if ('mediaSession' in navigator && !isNaN(mainAudio.duration)) {
                try {
                    navigator.mediaSession.setPositionState({
                        duration: mainAudio.duration,
                        playbackRate: mainAudio.playbackRate,
                        position: mainAudio.currentTime
                    });
                } catch (e) {}
            }
        });
        mainAudio.addEventListener("ended", () => { if (!isLoop) this.nextSong(); });
    },

    // --- 其他輔助函式維持不變 ---
    toggleLike(id, event, isFromPlayer = false) {
        if (event) event.stopPropagation();
        likedSongs.includes(id) ? likedSongs = likedSongs.filter(s => s !== id) : likedSongs.push(id);
        currentPlaylistId ? this.openPlaylist(currentPlaylistId) : this.renderLibrary();
        if (isFromPlayer) this.updatePlayerLikeBtn();
    },
    toggleLikeInPlayer() { if (allMusic[musicIndex]) this.toggleLike(allMusic[musicIndex].id, null, true); },
    updatePlayerLikeBtn() {
        const btn = document.getElementById("full-player-like-btn");
        if (!btn) return;
        const isLiked = likedSongs.includes(allMusic[musicIndex].id);
        btn.innerHTML = `<i class="${isLiked ? 'fas' : 'far'} fa-heart" style="${isLiked ? 'color:#ff85a2;' : ''}"></i>`;
    },
    updateNavState(viewName) {
        document.querySelectorAll('.bottom-nav a').forEach(a => a.classList.remove('active'));
        const btn = document.querySelector(`.bottom-nav a[onclick="showView('${viewName}')"]`);
        if(btn) btn.classList.add('active');
    },
    setDefaultCover() {
        const d = "default-cover.jpg";
        if (document.getElementById("mini-img")) document.getElementById("mini-img").src = d;
        if (document.getElementById("main-img")) document.getElementById("main-img").src = d;
    },
    renderAllSongs() { if(this.homeList) this.homeList.innerHTML = allMusic.map((m, i) => `<li onclick="app.selectAndPlay(${i})"><img src="${m.img}"> <p>${m.name}</p></li>`).join(""); },
    renderLibrary() {
        currentPlaylistId = null;
        if(this.libraryList) this.libraryList.innerHTML = [{id:'liked',name:"已按讚的歌曲"},{id:'new',name:"新集數"}].map(p => `<li onclick="app.openPlaylist('${p.id}')"><div><p style="margin:0; font-weight:bold;">${p.name}</p></div></li>`).join("");
    },
    openPlaylist(id) {
        currentPlaylistId = id;
        const songs = id === 'liked' ? allMusic.filter(m => likedSongs.includes(m.id)) : allMusic;
        this.libraryList.innerHTML = `<li onclick="app.renderLibrary()">← 返回</li>` + songs.map((m,i) => `<li onclick="app.selectAndPlay(${allMusic.indexOf(m)})">${m.name}</li>`).join("");
    },
    seek(e) {
        const d = mainAudio.duration;
        if (!isNaN(d)) mainAudio.currentTime = (e.offsetX / e.currentTarget.clientWidth) * d;
    },
    toggleLoop() { isLoop = !isLoop; mainAudio.loop = isLoop; },
    displayLyrics(lyrics) { const w = document.getElementById("lyrics-wrapper"); if(w) w.innerHTML = lyrics.map(l => `<div class="lyric-line"><div class="main-text">${(isTranslated && l.translation) ? l.translation : l.text}</div></div>`).join(""); },
    updateLyrics(currentTime) {
        const lyrics = allMusic[musicIndex].lyrics;
        let idx = lyrics.findLastIndex(l => currentTime >= l.time);
        if(idx !== -1 && idx !== currentLyricIndex) {
            currentLyricIndex = idx;
            document.querySelectorAll(".lyric-line").forEach((l, i) => l.classList.toggle("active", i === idx));
        }
    },
    toggleTranslation() { isTranslated = !isTranslated; this.displayLyrics(allMusic[musicIndex].lyrics); }
};

window.app = app;
window.showView = (v) => { document.querySelectorAll('.view').forEach(e => e.style.display = 'none'); document.getElementById(v+'-view').style.display = 'block'; app.updateNavState(v); };
window.togglePlayerView = () => { if(app.fullPlayer) app.fullPlayer.classList.toggle('active'); };
window.toggleLyricsView = () => { /* 保持原樣 */ };
window.addEventListener("load", () => app.init());