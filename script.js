'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number !!!! ';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').textContent = 23;
// console.log(document.querySelector('.guess').value);

// --------------SECRET NUMBER--------------

let scoreGame = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // --------------sin numero--------------

  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔ Escribe un numero !!';
  }
  // --------------adivinaste el numero--------------
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍👍👍 Adivinaste!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '12rem';
    document.querySelector('.number').textContent = secretNumber;
    if (scoreGame > highScore) {
      highScore = scoreGame;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // --------------el numero es muy alto--------------
  else if (guess > secretNumber) {
    if (scoreGame > 1) {
      document.querySelector('.message').textContent =
        'El numero es muy alto !!';
      scoreGame = scoreGame - 1;
      document.querySelector('.score').textContent = scoreGame;
    } else {
      document.querySelector('.message').textContent = 'Perdiste el juego !!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
  // --------------el numero es muy bajo--------------
  else if (guess < secretNumber) {
    if (scoreGame > 1) {
      document.querySelector('.message').textContent =
        'El numero es muy bajo !!';
      scoreGame = scoreGame - 1;
      document.querySelector('.score').textContent = scoreGame;
    } else {
      document.querySelector('.message').textContent = 'Perdiste el juego !!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
});
