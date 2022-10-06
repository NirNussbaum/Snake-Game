import { dirX, dirY } from "./dom.js";

const arrowUPbut = document.querySelector('.arrowUP');
const arrowDOWNbut = document.querySelector('.arrowDOWN');
const arrowLEFTbut = document.querySelector('.arrowLEFT');
const arrowRIGHTbut = document.querySelector('.arrowRIGHT');

arrowUPbut.addEventListener('click', () => {
    if (dirY) return;
    dirX = 0;
    dirY = -1;
});

arrowDOWNbut.addEventListener('click', () => {
    if (dirY) return;
    dirX = 0;
    dirY = 1;
});

arrowLEFTbut.addEventListener('click', () => {
    if (dirX) return;
    dirX = -1;
    dirY = 0;
});

arrowRIGHTbut.addEventListener('click', () => {
    if (dirX) return;
    dirX = 1;
    dirY = 0;
});
