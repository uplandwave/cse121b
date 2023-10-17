const gameContainer = document.getElementById('game-container');
const target = document.getElementById('target');
const scoreValue = document.getElementById('score-value');

let score = 0;
let gameActive = false;

target.addEventListener('click', () => {
  if (gameActive) {
    score++;
    scoreValue.innerText = score;
    moveTarget();
  }
});

function moveTarget() {
  const maxWidth = gameContainer.clientWidth - target.clientWidth;
  const maxHeight = gameContainer.clientHeight - target.clientHeight;
  const randomX = Math.random() * maxWidth;
  const randomY = Math.random() * maxHeight;

  target.style.left = randomX + 'px';
  target.style.top = randomY + 'px';
}

async function loadDittoImage() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    const dittoImageURL = data.sprites.front_shiny;

    target.style.backgroundImage = `url(${dittoImageURL})`;
    startGame();
  } catch (error) {
    console.error('Failed to load Ditto image:', error);
  }
}

function startGame() {
  score = 0;
  scoreValue.innerText = score;
  gameActive = true;
  moveTarget();

  setTimeout(() => {
    gameActive = false;
    alert(`Game over! Your score: ${score}\nRefresh page to play again.`);
  }, 10000);
}

// Load Ditto image and start the game on page load
loadDittoImage();