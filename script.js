// 確保歌詞資料與音樂清單已合併
mergeLyricsToMusic(allMusic);

let musicIndex = 0;
let mainAudio = new Audio();
let isPlaying = false;
let currentLyricIndex = -1;

const app = {
    // DOM 元素選取
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
    },

    renderAllSongs() {
        this.homeList.innerHTML = allMusic.map((m, i) => `
            <li onclick="app.selectAndPlay(${i})">
                <img src="${m.img}"> <p>${m.name}</p>
            </li>
        `).join("");
    },

    renderLibrary() {
        const favIds = [1, 3, 5]; 
        this.libraryList.innerHTML = allMusic.filter(m => favIds.includes(m.id)).map((m) => `
            <li onclick="app.selectAndPlay(${allMusic.indexOf(m)})">
                <img src="${m.img}"> <p>${m.name}</p>
            </li>
        `).join("");
    },

    selectAndPlay(index) {
        musicIndex = index;
        this.loadMusic(musicIndex);
        this.playSong();
    },

    loadMusic(index) {
        const music = allMusic[musicIndex];
        document.getElementById("mini-img").src = music.img;
        document.getElementById("mini-name").innerText = music.name;
        document.getElementById("main-img").src = music.img;
        document.querySelector(".song-details .name").innerText = music.name;
        document.querySelector(".song-details .artist").innerText = music.artist;

        mainAudio.src = `music/s${music.id}.mp3`;
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
    
    // 定義播放中要顯示的圖示
        const pauseIcon = '<i class="fas fa-pause"></i>';
    
    // 更新所有位置的按鈕
        if (document.getElementById("mini-play-btn")) {
            document.getElementById("mini-play-btn").innerHTML = pauseIcon;
        }
        if (document.getElementById("play-pause-btn")) {
            document.getElementById("play-pause-btn").innerHTML = pauseIcon;
        }
    // 更新底部導航上方原本的播放圖示 (若仍需保留)
        if (this.miniPlayIcon) {
            this.miniPlayIcon.className = "fas fa-pause";
        }
    },

    pauseSong() {
        mainAudio.pause();
        isPlaying = false;
    
    // 定義暫停時要顯示的圖示
        const playIcon = '<i class="fas fa-play"></i>';
    
    // 更新所有位置的按鈕
        if (document.getElementById("mini-play-btn")) {
            document.getElementById("mini-play-btn").innerHTML = playIcon;
        }
        if (document.getElementById("play-pause-btn")) {
            document.getElementById("play-pause-btn").innerHTML = playIcon;
        }
    // 更新底部導航上方原本的播放圖示
        if (this.miniPlayIcon) {
            this.miniPlayIcon.className = "fas fa-play";
        }
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
        mainAudio.currentTime = (clickX / width) * duration;
    },

    setupAudioEvents() {
        mainAudio.addEventListener("timeupdate", (e) => {
            const { currentTime, duration } = e.target;
            if (this.progressBar && duration) {
                this.progressBar.style.width = `${(currentTime / duration) * 100}%`;
            }
            this.updateLyrics(currentTime);
        });

        mainAudio.addEventListener("ended", () => this.nextSong());
    },

    displayLyrics(lyrics) {
        const wrapper = document.getElementById("lyrics-wrapper");
        wrapper.innerHTML = lyrics.map(line => 
            `<div class="lyric-line"><div class="main-text">${line.text}</div></div>`
        ).join("");
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
            const activeLine = lines[activeIndex];
            if (activeLine) {
                activeLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
};

// --- 全域輔助函式 ---
function showView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    document.getElementById(`${viewName}-view`).style.display = 'block';
}

function togglePlayerView() {
    app.fullPlayer.classList.toggle('active');
}

function toggleLyricsView() {
    const coverView = document.getElementById('cover-view');
    const lyricsView = document.getElementById('lyrics-view');
    const switchBtn = document.getElementById('view-switch-btn');

    if (coverView.style.display !== 'none') {
        coverView.style.display = 'none';
        lyricsView.style.display = 'flex';
        switchBtn.innerHTML = '<i class="fas fa-image"></i>';
    } else {
        coverView.style.display = 'flex';
        lyricsView.style.display = 'none';
        switchBtn.innerHTML = '<i class="fas fa-list-ul"></i>';
    }
}

window.addEventListener("load", () => app.init());