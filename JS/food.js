import { board } from './dom.js'
import { onSnakePos } from './snake.js'

export let food = {
    posX: 15,
    posY: 15
}

export const drawFood = () => {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.posY;
    foodElement.style.gridColumnStart = food.posX;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

export const randomPosFood = () => {
    while(onSnakePos(food.posX, food.posY)) {
        food.posX = Math.floor((Math.random() * 26  + 1));
        food.posY = Math.floor((Math.random() * 26  + 1));
    }
}
