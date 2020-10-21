const suit = ['hearts', 'clubs', 'diamonds', 'spades'];
const hand = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cards = [];
const cardSpacing = 25;

const cardsWrapper = document.querySelector('.cards-wrapper');

// Create an array with objects containing the value and the suit of each card (done)
function createCards() {
  for (let s = 0; s < suit.length; s += 1) {
    for (let c = 1; c <= hand.length; c += 1) {
      const cardObject = {
        value: c,
        suit: suit[s],
      };
      cards.push(cardObject);
    }
  }
  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * cardSpacing; // Card spacing
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value); // Sets value of class name.
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

function shuffleCards() {
  // Math.random() returns a random number between 0 and 0.99
  cards.sort(() => Math.random() - 0.5); // Randomly re-arranges the Cards array.
  cards.forEach((card, i) => {
    const positionFromLeft = i * cardSpacing; // Card spacing
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value); // Sets value of class name.
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}
//look for 'hidden' among card classes, add if present remove it, else add it in.
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

  // Creates shuffle button
  const shuffle = document.createElement('button'); // Creates new button Element.
  // shuffle.setAttribute('id', 'shuffle'); // Sets value of class name.
  shuffle.setAttribute('class', 'btn btn-lg btn-secondary'); // Sets value of class name.
  shuffle.innerHTML = 'Shuffle'; // Text name of the button
  shuffle.addEventListener('click', shuffleCards); // Calls shuffleCards method when button is clicked.

  // Creates show and hide button
  const showAndHide = document.createElement('button'); // Creates new button Element.
  // showAndHide.setAttribute('id', 'show-hide'); // Sets value of class name.
  showAndHide.setAttribute('class', 'btn btn-lg btn-secondary'); // Sets value of class name.
  showAndHide.innerHTML = 'Show/Hide'; // Text name of the button
  showAndHide.addEventListener('click', showHideCards); // Calls showHideCards method when button is clicked.

  // Creates magic button
  const magic = document.createElement('button'); // Creates new button Element.
  // magic.setAttribute('id', 'magic'); // Sets value of class name.
  magic.setAttribute('class', 'btn btn-lg btn-secondary'); // Sets value of class name.
  magic.innerHTML = 'Magic'; // Text name of the button
  magic.addEventListener('click', magicSort); // Calls showHideCards method when button is clicked.

  // Appends new buttons to buttonWrapper
  buttonWrapper.appendChild(shuffle);
  buttonWrapper.appendChild(showAndHide);
  buttonWrapper.appendChild(magic);
}

// Function to start the game by clearing the wrapper, creating and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
