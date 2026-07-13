// 確保歌詞資料與音樂清單已合併
mergeLyricsToMusic(allMusic);

let musicIndex = 0;
let mainAudio = new Audio();
let isPlaying = false;
let currentLyricIndex = -1;
let isTranslated = false;
let isLoop = false;
let hls = null; // 串流實例

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
    },

    setupInitialMediaSession() {
        if ('mediaSession' in navigator) {
        // 設定預設 metadata
            navigator.mediaSession.metadata = new MediaMetadata({
                title: "請選擇歌曲",
                artist: "不是設計愛情 是設計我",
                artwork: [{ src: 'default-cover.jpg', sizes: '512x512', type: 'image/jpeg' }]
            });

        // 強制綁定上下首
            navigator.mediaSession.setActionHandler('previoustrack', () => app.prevSong());
            navigator.mediaSession.setActionHandler('nexttrack', () => app.nextSong());
            navigator.mediaSession.setActionHandler('play', () => app.playSong());
            navigator.mediaSession.setActionHandler('pause', () => app.pauseSong());

        // 關鍵：將快進/快退綁定為 null，系統就會自動將其移除，騰出空間給上下首按鈕
            navigator.mediaSession.setActionHandler('seekbackward', null);
            navigator.mediaSession.setActionHandler('seekforward', null);
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
        
        // 確保切換歌曲後，按鈕行為依然是上下首，而不是 +-10 秒
            navigator.mediaSession.setActionHandler('previoustrack', () => app.prevSong());
            navigator.mediaSession.setActionHandler('nexttrack', () => app.nextSong());
            navigator.mediaSession.setActionHandler('seekbackward', null);
            navigator.mediaSession.setActionHandler('seekforward', null);
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
            const favIds = [1, 3, 5]; 
            this.libraryList.innerHTML = allMusic.filter(m => favIds.includes(m.id)).map((m) => `
                <li onclick="app.selectAndPlay(${allMusic.indexOf(m)})">
                    <img src="${m.img}"> <p>${m.name}</p>
                </li>
            `).join("");
        }
    },

    selectAndPlay(index) {
        musicIndex = index;
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

        // HLS 串流載入邏輯
        const streamUrl = `music/s${music.id}/s${music.id}.m3u8`; 
        if (Hls.isSupported()) {
            if (hls) hls.destroy();
            hls = new Hls();
            hls.loadSource(streamUrl);
            hls.attachMedia(mainAudio);
        } else {
            mainAudio.src = `music/s${music.id}/s${music.id}.mp3`;
        }

        if (this.bgVideo) {
            this.bgVideo.src = `video/v${music.id}.mp4`;
            this.bgVideo.play().catch(e => {});
        }
        
        this.displayLyrics(music.lyrics);
        mainAudio.load();
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

    nextSong() {
        musicIndex = (musicIndex + 1) % allMusic.length;
        this.loadMusic(musicIndex);
        this.playSong();
    },

    prevSong() {
        musicIndex = (musicIndex - 1 + allMusic.length) % allMusic.length;
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

// 保持你原本的視圖切換邏輯
window.app = app;
window.showView = (viewName) => {
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    const target = document.getElementById(`${viewName}-view`);
    if(target) target.style.display = 'block';
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