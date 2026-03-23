// Array of game objects
const games = [
    { title: "Slope", thumb: "slope.jpg", url: "https://playslope.com" },
    { title: "1v1.LOL", thumb: "1v1.jpg", url: "https://1v1.lol" },
    { title: "Tunnel Rush", thumb: "tunnel.jpg", url: "https://tunnelrush.com" },
    { title: "Basket Random", thumb: "basket.jpg", url: "https://basketrandom.com" },
    { title: "Retro Bowl", thumb: "retro.jpg", url: "https://retrofs.nfshost.com/games/retro-bowl/" },
    { title: "Veck.io", thumb: "veck.jpg", url: "https://veck.io" },
];

const gameGrid = document.getElementById('gameGrid');
const searchBar = document.getElementById('searchBar');

// Function to display games
function displayGames(gameList) {
    gameGrid.innerHTML = ''; // Clear current grid
    gameList.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('game-card');
        card.innerHTML = `
            <div class="game-thumb" style="background-image: url('${game.thumb}'); background-size: cover;"></div>
            <div class="game-info">
                <h3>${game.title}</h3>
            </div>
        `;
        card.onclick = () => window.open(game.url, '_blank');
        gameGrid.appendChild(card);
    });
}

// Search Functionality
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredGames = games.filter(game => {
        return game.title.toLowerCase().includes(searchString);
    });
    displayGames(filteredGames);
});

// Initial Load
displayGames(games);