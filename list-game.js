// DATA GAME KAMU
const gamesData = [
    { 
        title: "GTA V", 
        console: ["ps4", "ps5"], 
        genre: "action, adventure",
        img: "image/listgame/Gta5.jpg" 
    },
    { 
        title: "Astro Playroom", 
        console: ["ps5"], 
        genre: "adventure",
        img: "image/listgame/AstroPlayroom.jpg" 
    },
    { 
        title: "FC 26", 
        console: ["ps4", "ps5"], 
        genre: "sports",
        img: "image/listgame/FC 26.jpeg" 
    },
    { 
        title: "Efootball",
        console: ["ps5"], 
        genre: "sports",
        img: "image/listgame/efootball.png" 
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
        genre: "fighting",
        img: "image/listgame/Narutostorm.png" 
    },
    { 
        title: "Undisputed", 
        console: ["ps5"], 
        genre: "sports",
        img: "image/listgame/Undisputed.jpg" 
    },
    {
        title: "Tekken 8", 
        console: ["ps5"], 
        genre: "fighting",
        img: "image/listgame/Tekken 8.jpeg" 
    },
    { 
        title: "Sackboy", 
        console: ["ps5"], 
        genre: "adventure",
        img: "image/listgame/Sackboy.jpeg" 
    },
    { 
        title: "UFC 5", 
        console: ["ps5"], 
        genre: "fighting",
        img: "image/listgame/ps5-ufc5.jpeg" 
    },
    { 
        title: "F1 25", 
        console: ["ps5"], 
        genre: "adventure",
        img: "image/listgame/ps5-f125.jpeg" 
    },
    { 
        title: "Rabbids Party", 
        console: ["ps4", "ps5"], 
        genre: "action",
        img: "image/listgame/Rabbidsparty.jpg" 
    },
    { 
        title: "Minecraft", 
        console: ["ps4", "ps3"], 
        genre: "adventure",
        img: "image/listgame/minecraft.png" 
    },
    { 
        title: "Ultraman FE 3", 
        console: ["ps4"], 
        genre: "fighting",
        img: "image/listgame/ps4-Ultramanfe3.jpg" 
    },
    { 
        title: "PES Bitbox", 
        console: ["ps4"], 
        genre: "sports",
        img: "image/listgame/Ps4-Pesbitbpx.jpeg" 
    },
    { 
        title: "Naruto Ultimate Ninja Storm 4", 
        console: ["ps4"], 
        genre: "sports",
        img: "image/listgame/ps4-narutostorm4.jpg" 
    },
    { 
        title: "It Takes Two", 
        console: ["ps4", "ps5"], 
        genre: "adventure",
        img: "image/listgame/ps4-Ittakestwo.png" 
    },
    { 
        title: "Dragonball Xenoverse", 
        console: ["ps4"], 
        genre: "fighting",
        img: "image/listgame/ps4-dragonball.jpg" 
    },
    { 
        title: "CTR", 
        console: ["ps4"], 
        genre: "sports",
        img: "image/listgame/ps4-Ctr.jpg" 
    },
    { 
        title: "COD Modern Warfare", 
        console: ["ps4"], 
        genre: "action",
        img: "image/listgame/ps4-Codmw.jpg" 
    },
    { 
        title: "Unravel 2", 
        console: ["ps4"], 
        genre: "adventure",
        img: "image/listgame/ps4-Unravel2.jpg" 
    },
    { 
        title: "WWE 2K25", 
        console: ["ps4", "ps3"], 
        genre: "sports",
        img: "image/listgame/ps4-wwe.jpg" 
    },
    { 
        title: "NBA 2K25", 
        console: ["ps4"], 
        genre: "sports",
        img: "image/listgame/ps4-Nba2k25.jpg" 
    },
    { 
        title: "PES Gembox", 
        console: ["ps3"], 
        genre: "sports",
        img: "image/listgame/ps3-Pesgembox.jpg" 
    },
    { 
        title: "Sengoku Basara", 
        console: ["ps3"], 
        genre: "action",
        img: "image/listgame/ps3-basara.png" 
    },
    { 
        title: "WWE 2K16", 
        console: ["ps3"], 
        genre: "fighting",
        img: "image/listgame/ps3-wwe2k16.jpg" 
    },
    { 
        title: "Moto GP", 
        console: ["ps3"], 
        genre: "sports",
        img: "image/listgame/ps3-motogp.jpg" 
    },
    { 
        title: "Lego Marvel", 
        console: ["ps3"], 
        genre: "adventure",
        img: "image/listgame/ps3-Legomarvel.png" 
    },
    { 
        title: "Tekken 6", 
        console: ["ps3"], 
        genre: "fighting",
        img: "image/listgame/ps3-Tekken6.jpeg" 
    },
    { 
        title: "Army Of Two", 
        console: ["ps3"], 
        genre: "action",
        img: "image/listgame/ps3-aot.jpeg" 
    },
    {
        title: "GTA 4", 
        console: ["ps3"], 
        genre: "action",
        img: "image/listgame/ps3-gta4.jpg" 
    },
    { 
        title: "NBA 2K18", 
        console: ["ps3"], 
        genre: "sports",
        img: "image/listgame/ps3-Nba2k18.jpg" 
    },
    { 
        title: "Blur", 
        console: ["ps3"], 
        genre: "sports",
        img: "image/listgame/ps3-blur.jpg" 
    },
    { 
        title: "God Of War 3", 
        console: ["ps3"], 
        genre: "action",
        img: "image/listgame/ps3-gow3.jpg" 
    },
    { 
        title: "Red Dead Redemption", 
        console: ["ps3"], 
        genre: "adventure",
        img: "image/listgame/ps3-rdr.jpg" 
    },
    { 
        title: "Portal", 
        console: ["ps3"], 
        genre: "adventure",
        img: "image/listgame/ps3-portal.jpg" 
    }
    
];

// html element
const gameListContainer = document.getElementById('game-list');
const consoleFilter = document.getElementById('console');
const genreFilter = document.getElementById('genre');
const searchInput = document.getElementById('search');

function renderGames(games) {
    gameListContainer.innerHTML = '';

    // if game not found
    if (games.length === 0) {
        gameListContainer.innerHTML = '<p style="color:#888; grid-column: 1/-1; text-align:center; font-family:var(--font-huge); margin-top:50px;">GAME TIDAK DITEMUKAN.</p>';
        return;
    }

    // show game
    games.forEach(game => {
        // badge console
        let badgesHTML = '';
        game.console.forEach(cons => {
            if (cons.toLowerCase() === 'ps5') {
                badgesHTML += `<span class="g-badge ps5">PS5</span> `;
            } else if (cons.toLowerCase() === 'ps4') {
                badgesHTML += `<span class="g-badge ps4">PS4</span> `;
            } else if (cons.toLowerCase() === 'ps3') {
                badgesHTML += `<span class="g-badge" style="background:#333; color:white;">PS3</span> `;
            }
        });

        // html struct
        const gameHTML = `
            <div class="g-item">
                <img src="${game.img}" alt="${game.title}">
                <div class="g-info">
                    <h4>${game.title.toUpperCase()}</h4>
                    <div>${badgesHTML}</div>
                </div>
            </div>
        `;
        
        gameListContainer.innerHTML += gameHTML;
    });
}

// filter game
function filterGames() {
    const selectedConsole = consoleFilter.value.toLowerCase();
    const selectedGenre = genreFilter.value.toLowerCase();
    const searchQuery = searchInput.value.toLowerCase();

    const filtered = gamesData.filter(game => {
        // Chek Console
        const matchConsole = selectedConsole === 'all' || game.console.some(c => c.toLowerCase() === selectedConsole);
        
        // Chek Genre
        const matchGenre = selectedGenre === 'all' || game.genre.toLowerCase().includes(selectedGenre);

        // Chek Search Teks
        const matchSearch = game.title.toLowerCase().includes(searchQuery);

        // fullfill the need
        return matchConsole && matchGenre && matchSearch;
    });

    renderGames(filtered); // print
}

// run filter
consoleFilter.addEventListener('change', filterGames);
genreFilter.addEventListener('change', filterGames);
searchInput.addEventListener('input', filterGames);

// auto using filter from home
const urlParams = new URLSearchParams(window.location.search);
const consoleParam = urlParams.get('console');

if (consoleParam) {
    consoleFilter.value = consoleParam;
}

filterGames();