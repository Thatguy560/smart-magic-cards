const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const hand = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cards = [];

const cardsWrapper = document.querySelector('.cards-wrapper');

const startButton = document.getElementById('start-game');

const btnWrapper = document.querySelector('.btn-wrapper'); /* eslint-disable-line */
const selectedCardsWrapper = document.querySelector('.selected-cards');
 /* eslint-disable-line */


// Create an array with objects containing the value and the suit of each card (done)
function createCards() {
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
    const positionFromLeft = i * 25; // Card spacing
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

function shuffle() {

}

function flipCards() {

}

function magic() {

}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  startButton.parentNode.removeChild(startButton);


}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

startButton.addEventListener('click', startGame);
// Event Listener will get startGame() method when button is clicked.
// startGame() method will call createButtons() and createCards()
