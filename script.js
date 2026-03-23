// Array of game objects
const games = [
    { title: "Slope", thumb: "slope.jpg", url: "https://example.com/slope" },
    { title: "1v1.LOL", thumb: "1v1.jpg", url: "https://example.com/1v1" },
    { title: "Tunnel Rush", thumb: "tunnel.jpg", url: "https://example.com/tunnel" },
    { title: "Basket Random", thumb: "basket.jpg", url: "https://example.com/basket" },
    { title: "Retro Bowl", thumb: "retro.jpg", url: "https://example.com/retro" },
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