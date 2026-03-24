// Array of game objects
const games = [
    { title: "Slope", thumb: "slope.jpg", url: "https://playslope.com" },
    { title: "1v1.LOL", thumb: "1v1.jpg", url: "https://1v1.lol" },
    { title: "Tunnel Rush", thumb: "tunnel.jpg", url: "https://tunnelrush.com" },
    { title: "Basket Random", thumb: "basket.jpg", url: "https://basketrandom.com" },
    { title: "Retro Bowl", thumb: "retro.jpg", url: "https://retrofs.nfshost.com/games/retro-bowl/" },
    { title: "Veck.io", thumb: "veck.jpg", url: "https://veck.io" },
    { title: "Flappy Bird", thumb: "flappy.jpg", url: "https://flappybird.io" },
    { title: "2048", thumb: "2048.jpg", url: "https://play2048.co" },
    { title: "Pac-Man", thumb: "pacman.jpg", url: "https://pacman.live" },
    { title: "Chess", thumb: "chess.jpg", url: "https://lichess.org" },
    { title: "Agar.io", thumb: "agar.jpg", url: "https://agar.io" },
    { title: "Slither.io", thumb: "slither.jpg", url: "https://slither.io" },
    { title: "Cookie Clicker", thumb: "cookie.jpg", url: "https://orteil.dashnet.org/cookieclicker/" },
    { title: "Geometry Dash", thumb: "geom.jpg", url: "https://www.newgrounds.com/portal/view/576416" },
    { title: "Fireboy and Watergirl", thumb: "firewater.jpg", url: "https://fireboy-watergirl.org" },
    { title: "Subway Surfers", thumb: "subway.jpg", url: "https://subwaysurfers.org" },
    { title: "Happy Wheels", thumb: "happy.jpg", url: "https://www.totaljerkface.com/happywheels.php" },
    { title: "Stickman Hook", thumb: "stick.jpg", url: "https://www.crazygames.com/game/stickman-hook" },
    { title: "Pong", thumb: "pong.jpg", url: "https://pong.online" },
    { title: "Dinosaur Game", thumb: "dino.jpg", url: "https://chromedino.com" },
    { title: "Super Smash Flash", thumb: "smash.jpg", url: "https://www.flashpoint.zone" },
    { title: "Pixel Speedrun", thumb: "pixel.jpg", url: "https://www.crazygames.com/game/pixel-speedrun" },
    { title: "Zombie Apocalypse", thumb: "zombie.jpg", url: "https://www.crazygames.com/game/zombie-apocalypse" },
    { title: "Run 3", thumb: "run3.jpg", url: "https://www.crazygames.com/game/run-3" },
    { title: "Drift Boss", thumb: "drift.jpg", url: "https://www.crazygames.com/game/drift-boss" },
    { title: "Bloons TD", thumb: "bloons.jpg", url: "https://www.crazygames.com/game/bloons-td-6" },
    { title: "Among Us", thumb: "amongus.jpg", url: "https://innersloth.itch.io/among-us" },
    { title: "Wordle", thumb: "wordle.jpg", url: "https://www.nytimes.com/games/wordle" },
    { title: "Tetris", thumb: "tetris.jpg", url: "https://tetris.com/play-tetris" },
    { title: "Minesweeper", thumb: "mine.jpg", url: "https://www.crazygames.com/game/minesweeper" },
    { title: "Checkers", thumb: "checkers.jpg", url: "https://www.crazygames.com/game/checkers" },
    { title: "Snake Game", thumb: "snake.jpg", url: "https://www.crazygames.com/game/snake" },
    { title: "Flixel", thumb: "flixel.jpg", url: "https://www.crazygames.com/game/flixel" },
    { title: "Hanger 2", thumb: "hanger.jpg", url: "https://www.crazygames.com/game/hanger-2" },
    { title: "Temple Run 2", thumb: "temple.jpg", url: "https://www.crazygames.com/game/temple-run-2" },
    { title: "Crossy Road", thumb: "crossy.jpg", url: "https://www.crazygames.com/game/crossy-road" },
    { title: "Candy Crush", thumb: "candy.jpg", url: "https://www.crazygames.com/game/candy-crush-saga" },
    { title: "Bejeweled", thumb: "bejeweled.jpg", url: "https://www.crazygames.com/game/bejeweled" },
    { title: "Mahjong", thumb: "mahjong.jpg", url: "https://www.crazygames.com/game/mahjong" },
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