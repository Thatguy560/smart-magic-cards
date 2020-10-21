const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const hand = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cardsWrapper = document.querySelector('.cards-wrapper');

// Create an array with objects containing the value and the suit of each card (done)
function createCards() {
  const cards = [];
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
    const positionFromLeft = i * 24; // Card spacing
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value); // Changes attribute class name.
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

function shuffleCards() {
  for (let a = cards.length - 1; a > 0; a -= 1) {
    const b = Math.floor(Math.random() * (b + 1));
    [cards[a], cards[b]] = [cards[b], cards[a]];
  }
}

//look for 'hidden' among card classes, add if not present
function showHideCards() {
  return (cardsWrapper.classList.contains('hidden')) ? cardsWrapper.classList.remove('hidden') : cardsWrapper.classList.add('hidden');
}

function magicSort() {

}
// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  const startButton = document.getElementById('start-game');
  startButton.parentNode.removeChild(startButton);
  const buttonWrapper = document.querySelector('.btn-wrapper');

  // Creates show and hide button
  const showAndHide = document.createElement('button');
  showAndHide.setAttribute('id', 'show-hide') // Changes attribute class name.
  showAndHide.setAttribute('class', 'btn btn-lg btn-secondary'); // Changes attribute class name.
  showAndHide.innerHTML = 'Show/Hide';
  showAndHide.addEventListener('click', showHideCards);

  // Appends new buttons to buttonWrapper
  buttonWrapper.appendChild(showAndHide);
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
