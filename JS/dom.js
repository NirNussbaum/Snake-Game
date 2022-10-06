import { gameStartSound } from './audio.js'
import { stoper } from './time.js'
import { game } from './snakeGame.js';
import { snake } from './snake.js'

export const board = document.querySelector('.board');
const playButton = document.querySelector('.play');
const withWallElement = document.querySelector('.withwall');

export let dirX = 0;
export let dirY = 0;
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp') {
        if(dirY) return;
        e.preventDefault();
        dirX = 0;
        dirY = -1;
    } else if(e.key === 'ArrowDown') {
        if(dirY) return;
        e.preventDefault();
        dirX = 0;
        dirY = 1;
    } else if(e.key === 'ArrowLeft') {
        if(dirX) return;
        e.preventDefault();
        dirX = -1;
        dirY = 0;
    } else if(e.key === 'ArrowRight') {
        if(dirX) return;
        e.preventDefault();
        dirX = 1;
        dirY = 0;
    }
});

export let gameOn;
export let watch;
export let withWall;
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

export const newGameSpeed = speedUp => {
    clearInterval(gameOn);
    gameOn = setInterval(game, snake.snakeSpeed - speedUp);
}