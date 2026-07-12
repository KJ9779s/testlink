// 確保歌詞資料與音樂清單已合併
mergeLyricsToMusic(allMusic);

let musicIndex = 0;
let mainAudio = new Audio();
let isPlaying = false;
let currentLyricIndex = -1;

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
        this.miniPlayIcon.className = "fas fa-pause";
    },

    setupAudioEvents() {
        mainAudio.addEventListener("timeupdate", (e) => {
            const { currentTime, duration } = e.target;
        
        // 檢查 progressBar 是否存在，避免出現 'reading style' 的 null 錯誤
            if (this.progressBar && duration) {
                this.progressBar.style.width = `${(currentTime / duration) * 100}%`;
            }
        
        // 更新歌詞滾動與發亮效果
            this.updateLyrics(currentTime);
        });

        mainAudio.addEventListener("ended", () => {
            musicIndex = (musicIndex + 1) % allMusic.length;
            this.loadMusic(musicIndex);
            this.playSong();
        });
    },


    displayLyrics(lyrics) {
        const wrapper = document.getElementById("lyrics-wrapper");
        wrapper.innerHTML = lyrics.map(line => 
            `<div class="lyric-line"><div class="main-text">${line.text}</div></div>`
        ).join("");
    },

    updateLyrics(currentTime) {
        const lyrics = allMusic[musicIndex].lyrics;
    // 找出當前時間對應的歌詞索引
        let activeIndex = lyrics.findLastIndex(l => currentTime >= l.time);
    
        if (activeIndex !== -1 && activeIndex !== currentLyricIndex) {
            currentLyricIndex = activeIndex;
        
        // 移除所有發亮效果，並加上當前行的效果[cite: 4]
            const lines = document.querySelectorAll(".lyric-line");
            lines.forEach((line, index) => {
                line.classList.toggle("active", index === activeIndex);
            });

        // 核心：自動捲動[cite: 4]
            const activeLine = lines[activeIndex];
            if (activeLine) {
                activeLine.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }
    }
};

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

    // 切換顯示狀態
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