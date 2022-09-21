let gameOver = false;

const snakeEatFood = () => {
    if(onSnakePos(food.posX,food.posY)) {
        snakeEatSound.play();
        randomPosFood();
        scoreUp();
        for(i = 0; i < snake.snakeGrowth; i++) {
            snake.body.push({/**/...snake.body[snake.body.length - 1]});
        }
    }
}


const update = () => {
    if(dirX === 0 && dirY === 0) return;
    for(let i = snake.body.length - 1; i > 0; i--) {
        snake.body[i].x = snake.body[i - 1].x;
        snake.body[i].y = snake.body[i - 1].y;
    }
    snake.body[0].x += dirX;
    snake.body[0].y += dirY;
    if(!withWall) {
        if(snake.body[0].x === 27) snake.body[0].x = 1;
        else if(snake.body[0].x === 0) snake.body[0].x = 26;

        if(snake.body[0].y === 27) snake.body[0].y = 1;
        else if (snake.body[0].y === 0) snake.body[0].y = 26;
    }
}

const lvlUpWhen = 2;
let currentscore = 0;
let currentlvl = 1;
let counter = 0;
const score = document.querySelector('.score');
const level = document.querySelector('.lvl');
const scoreUp = () =>{
    counter++;
    currentscore += currentlvl * 20;
    currentlvl = 1 + Math.floor(counter / 2);
    if(!(counter % lvlUpWhen)) {
        level.textContent = `Level - ${currentlvl}`;
        clearInterval(gameOn);
        gameOn = setInterval(game, snake.snakeSpeed - ((currentlvl - 1) * 30));
    }
    score.textContent = currentscore;
}

const resetGame = () => {
    document.location.reload();
}

const checkGameOver = () => {
    const head = snake.body[0];
    if(checkWall(head) || checkSnakeHead(head)) {
        clearInterval(gameOn);
        clearInterval(watch);
        gameOverSound.play();
        board.innerHTML =`
        <span class="gameOver">
        <h2>GAME OVER!</h2>
        <h5 class="newHighScore d-none">New High Score!!!</h5>
        <input type="button" value="Play Again" class="playAgain btn btn-danger my-1">
        </span>`;
        if(currentscore > localStorage.getItem('highScore')) {
            const newHighScore = document.querySelector('.newHighScore');
            newHighScore.classList.remove('d-none');
            localStorage.setItem('highScore', currentscore);
        } 
        const playAgain = document.querySelector('.playAgain');
        playAgain.addEventListener('click', resetGame);
        return true;
    }
    return false;
}

const game = () => {
    snakeEatFood();
    update();
    drawSnake();
    drawFood();
    checkGameOver();
}




