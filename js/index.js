const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const hand = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const btnWrapper = document.querySelector('.btn-wrapper'); /* eslint-disable-line */
const selectedCardsWrapper = document.querySelector('.selected-cards'); /* eslint-disable-line */

const startButton = document.getElementById('start-game');

function createCards() {
  const cards = [];
  // Create an array with objects containing the value and the suit of each card (done)
  for (let s = 0; s < suits.length; s += 1) {
    for (let c = 1; c <= hand.length; c += 1) {
      const cardObject = {
        value: c,
        suit: suits[s],
      };
      cards.push(cardObject);
    }
  }
  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 22.5;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

// document.getElementById('start-game').addEventListener('click', startGame);
startButton.addEventListener('click', startGame);
