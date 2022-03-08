'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  switch (score) {
    case 0:
      displayMessage('💥 You lost tha game!');
      bodyBackground('red');
      widthNumber('30rem');
      break;
    default:
      if (!guess) {
        displayMessage('⛔ No number!');
      } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        displayNumber(secretNumber);
        bodyBackground('#60b347');
        widthNumber('30rem');

        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      } else {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
      }
  }

  displayScore(score);
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  bodyBackground('#222');
  displayScore(score);
  displayNumber('?');
  displayMessage('Start guessing...');
  widthNumber('15rem');
  document.querySelector('.guess').value = '';
});

function widthNumber(width) {
  document.querySelector('.number').style.width = width;
}

function bodyBackground(color) {
  document.querySelector('body').style.backgroundColor = color;
}

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const displayScore = scoreArrow =>
  (document.querySelector('.score').textContent = scoreArrow);

const displayNumber = number =>
  (document.querySelector('.number').textContent = number);
