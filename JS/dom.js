const board = document.querySelector('.board');
const playButton = document.querySelector('.play');
const withWallElement = document.querySelector('.withwall');

let dirX = 0;
let dirY = 0;
document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if(e.keyCode === 38) {
        if(dirY) return;
        dirX = 0;
        dirY = -1;
    } else if(e.keyCode === 40) {
        if(dirY) return;
        dirX = 0;
        dirY = 1;
    } else if(e.keyCode === 37) {
        if(dirX) return;
        dirX = -1;
        dirY = 0;
    } else if(e.keyCode === 39) {
        if(dirX) return;
        dirX = 1;
        dirY = 0;
    }
});

let gameOn;
let watch;
let withWall;
playButton.addEventListener('click', () => {
    withWall = withWallElement.checked;
    playButton.classList.add('d-none');
    gameStartSound.play();
    dirX = 1;
    dirY = 0;
    watch = setInterval(stoper, 1000);
    gameOn = setInterval(game, snake.snakeSpeed);
});

const highScore = document.querySelector('.highScore');
if (localStorage.getItem('highScore')) {
    highScore.textContent = localStorage.getItem('highScore');
}