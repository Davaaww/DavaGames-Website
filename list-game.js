// ==========================================
// DATABASE MINI DAVA GAMES (FULL FRONT-END)
// ==========================================
// Tambahkan, hapus, atau ubah game-mu di dalam sini:

const gamesData = [
    { 
        title: "GTA V", 
        console: ["ps4", "ps5"], 
        genre: "action, adventure",
        img: "image/listgame/Gta5.jpg" 
    },
    { 
        title: "FC 26", 
        console: ["ps4", "ps5"], 
        genre: "sports", 
        img: "image/listgame/FC 26.jpeg" 
    },
    { 
        title: "Tekken 8", 
        console: ["ps5"], 
        genre: "fighting", 
        img: "image/listgame/Tekken 8.jpeg" 
    },
    { 
        title: "EFootball", 
        console: ["ps5"], 
        genre: "sports", 
        img: "image/listgame/efootball.png" 
    },
    { 
        title: "Astro Playroom", 
        console: ["ps5"], 
        genre: "adventure", 
        img: "image/listgame/AstroPlayroom.jpg" 
    },
    { 
        title: "Human Fall Flat", 
        console: ["ps5"], 
        genre: "adventure", 
        img: "image/listgame/Humanfallflate.jpeg" 
    },
    { 
        title: "NBA 2K26", 
        console: ["ps5"], 
        genre: "sports", 
        img: "image/listgame/Nba2k26.jpeg" 
    },
    { 
        title: "Naruto Storm Connection", 
        console: ["ps5"], 
        genre: "action", 
        img: "image/listgame/Narutostorm.png" 
    },
    { 
        title: "Moto GP 25", 
        console: ["ps5"], 
        genre: "sports", 
        img: "image/listgame/Motogp25.jpg" 
    },
    { 
        title: "Rabbids Party Legend", 
        console: ["ps4" ,"ps5"], 
        genre: "action", 
        img: "image/listgame/Rabbidsparty.jpg"
    },
    { 
        title: "Sackboy", 
        console: ["ps5"], 
        genre: "action", 
        img: "image/listgame/Sackboy.jpeg" 
    },
    { 
        title: "Undisputed", 
        console: ["ps5"], 
        genre: "fighting", 
        img: "image/listgame/Undisputed.jpg" 
    },
    { 
        title: "", 
        console: ["ps5"], 
        genre: "", 
        img: "image/listgame/" 
    },
    { 
        title: "", 
        console: ["ps5"], 
        genre: "", 
        img: "image/listgame/" 
    },
    { 
        title: "", 
        console: ["ps5"], 
        genre: "", 
        img: "image/listgame/" 
    },
    { 
        title: "", 
        console: ["ps5"], 
        genre: "", 
        img: "image/listgame/" 
    }
    // Ingat: Jika ingin menambah game baru di bawah,
    // jangan lupa beri tanda koma (,) di kurung kurawal sebelumnya!
];

// ==========================================
// LOGIKA SISTEM (TIDAK PERLU DIUBAH)
// ==========================================

const gridContainer = document.getElementById('game-grid');
const noGameMsg = document.getElementById('no-game-msg');
const consoleFilter = document.getElementById('console-filter');
const genreFilter = document.getElementById('genre-filter');
const searchInput = document.getElementById('search-input');

// Cek URL untuk otomatis memfilter jika datang dari halaman depan
const urlParams = new URLSearchParams(window.location.search);
const consoleQuery = urlParams.get('console');
if (consoleQuery) {
    consoleFilter.value = consoleQuery.toLowerCase();
}

// Fungsi Utama: Menampilkan dan Menyaring Game
function renderGames() {
    const selectedConsole = consoleFilter.value;
    const selectedGenre = genreFilter.value;
    const searchText = searchInput.value.toLowerCase();

    gridContainer.innerHTML = ''; 

    const filteredGames = gamesData.filter(game => {
        const matchConsole = selectedConsole === 'all' || game.console.includes(selectedConsole);
        const matchGenre = selectedGenre === 'all' || game.genre === selectedGenre;
        const matchSearch = game.title.toLowerCase().includes(searchText);
        return matchConsole && matchGenre && matchSearch;
    });

    if (filteredGames.length === 0) {
        noGameMsg.style.display = 'block';
    } else {
        noGameMsg.style.display = 'none';
        
        filteredGames.forEach(game => {
            let badgesHTML = '';
            game.console.forEach(c => {
                badgesHTML += `<span class="badge ${c}">${c.toUpperCase()}</span>`;
            });

            const card = document.createElement('div');
            card.classList.add('game-card-item');
            card.innerHTML = `
                <img src="${game.img}" alt="${game.title}" class="game-cover">
                <div class="game-info-overlay">
                    <h3 class="game-title">${game.title}</h3>
                    <div>${badgesHTML}</div>
                </div>
            `;
            gridContainer.appendChild(card);
        });
    }
}

// Tombol Filter & Search agar langsung jalan saat diklik/diketik
consoleFilter.addEventListener('change', renderGames);
genreFilter.addEventListener('change', renderGames);
searchInput.addEventListener('input', renderGames);

// Langsung tampilkan game saat website pertama kali dibuka
renderGames();