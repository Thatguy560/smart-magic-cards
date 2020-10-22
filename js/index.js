const suit = ['hearts', 'clubs', 'diamonds', 'spades'];
const hand = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cards = [];
const cardSpacing = 25; // Card spacing pxl's
let selectedCards = [];

const cardsWrapper = document.querySelector('.cards-wrapper');

// Create an array with objects containing the value and the suit of each card (done)
 createCards = () => {
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
    let cardValues = {value: card.value, suit: card.suit}
    cardElement.setAttribute('data-value', card.value); // Sets value of class name.
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    // add on on click event listener and add function which pushes cards into a selected cards array
    cardElement.addEventListener('click', () => {
      selectedCards = cardValues
      const test = cards.reduce(element => element === cardValues)
      console.log(cards)
      console.log(selectedCards)
      console.log(test)
      console.log(element)
    })

    cardsWrapper.append(cardElement);
  });
}

 shuffleCards = () => {
  // Sort
  cards.sort(() => Math.random() - 0.5); // Randomly re-arranges the Cards array.
  cards.forEach((card, i) => {
    const positionFromLeft = i * cardSpacing; // Takes the index of the array and spreads the cards out.
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value); // Sets value of class name.
    cardElement.classList.add('card', `${card.suit}-${card.value}`); // Takes the card array key/value pair and finds corresponding class.
    cardElement.style.left = `${positionFromLeft}px`; // Sets unique spacing
    cardsWrapper.append(cardElement);
  });
}
//look for 'hidden' among card classes, add if present remove it, else add it in.
 showHideCards = () => {
  return (cardsWrapper.classList.contains('hidden')) ? cardsWrapper.classList.remove('hidden') : cardsWrapper.classList.add('hidden');
}

magicSort = () => {

}

// Clear out the initial button and create new buttons to play the game.
createButtons = () => {
  const startButton = document.getElementById('start-game');
  startButton.parentNode.removeChild(startButton);
  const buttonWrapper = document.querySelector('.btn-wrapper');

  // Creates shuffle button
  const shuffle = document.createElement('button'); // Creates new button Element.
  // shuffle.setAttribute('id', 'shuffle');
  shuffle.setAttribute('class', 'btn btn-lg btn-secondary'); // Sets value of class name.
  shuffle.innerHTML = 'Shuffle'; // Text name of the button
  shuffle.addEventListener('click', shuffleCards); // Calls shuffleCards method when button is clicked.

  // Creates show and hide button
  const showAndHide = document.createElement('button'); // Creates new button Element.
  // showAndHide.setAttribute('id', 'show-hide');
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
  buttonWrapper.appendChild(shuffle); // Append shuffle button to parent
  buttonWrapper.appendChild(showAndHide); // Append showAndHide button to parent
  buttonWrapper.appendChild(magic); // Append magic button to parent
}

// Function to start the game by clearing the wrapper, creating and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
