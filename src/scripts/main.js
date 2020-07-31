'use strict';

const DECK = [
  {
    suit: 'hearts', number: 1, name: '2',
  },
  {
    suit: 'diamonds', number: 1, name: '2',
  },
  {
    suit: 'spades', number: 1, name: '2',
  },
  {
    suit: 'clubs', number: 1, name: '2',
  },
  {
    suit: 'hearts', number: 2, name: '3',
  },
  {
    suit: 'diamonds', number: 2, name: '3',
  },
  {
    suit: 'spades', number: 2, name: '3',
  },
  {
    suit: 'clubs', number: 2, name: '3',
  },
  {
    suit: 'hearts', number: 3, name: '4',
  },
  {
    suit: 'diamonds', number: 3, name: '4',
  },
  {
    suit: 'spades', number: 3, name: '4',
  },
  {
    suit: 'clubs', number: 3, name: '4',
  },
  {
    suit: 'hearts', number: 4, name: '5',
  },
  {
    suit: 'diamonds', number: 4, name: '5',
  },
  {
    suit: 'spades', number: 4, name: '5',
  },
  {
    suit: 'clubs', number: 4, name: '5',
  },
  {
    suit: 'hearts', number: 5, name: '6',
  },
  {
    suit: 'diamonds', number: 5, name: '6',
  },
  {
    suit: 'spades', number: 5, name: '6',
  },
  {
    suit: 'clubs', number: 5, name: '6',
  },
  {
    suit: 'hearts', number: 6, name: '7',
  },
  {
    suit: 'diamonds', number: 6, name: '7',
  },
  {
    suit: 'spades', number: 6, name: '7',
  },
  {
    suit: 'clubs', number: 6, name: '7',
  },
  {
    suit: 'hearts', number: 7, name: '8',
  },
  {
    suit: 'diamonds', number: 7, name: '8',
  },
  {
    suit: 'spades', number: 7, name: '8',
  },
  {
    suit: 'clubs', number: 7, name: '8',
  },
  {
    suit: 'hearts', number: 8, name: '9',
  },
  {
    suit: 'diamonds', number: 8, name: '9',
  },
  {
    suit: 'spades', number: 8, name: '9',
  },
  {
    suit: 'clubs', number: 8, name: '9',
  },
  {
    suit: 'hearts', number: 9, name: '10',
  },
  {
    suit: 'diamonds', number: 9, name: '10',
  },
  {
    suit: 'spades', number: 9, name: '10',
  },
  {
    suit: 'clubs', number: 9, name: '10',
  },
  {
    suit: 'hearts', number: 10, name: 'J',
  },
  {
    suit: 'diamonds', number: 10, name: 'J',
  },
  {
    suit: 'spades', number: 10, name: 'J',
  },
  {
    suit: 'clubs', number: 10, name: 'J',
  },
  {
    suit: 'hearts', number: 11, name: 'D',
  },
  {
    suit: 'diamonds', number: 11, name: 'D',
  },
  {
    suit: 'spades', number: 11, name: 'D',
  },
  {
    suit: 'clubs', number: 11, name: 'D',
  },
  {
    suit: 'hearts', number: 12, name: 'K',
  },
  {
    suit: 'diamonds', number: 12, name: 'K',
  },
  {
    suit: 'spades', number: 12, name: 'K',
  },
  {
    suit: 'clubs', number: 12, name: 'K',
  },
  {
    suit: 'hearts', number: 13, name: 'A',
  },
  {
    suit: 'diamonds', number: 13, name: 'A',
  },
  {
    suit: 'spades', number: 13, name: 'A',
  },
  {
    suit: 'clubs', number: 13, name: 'A',
  },
];

const deskFieldColumn = document.querySelectorAll('.desk-field__w');
const deskHeaderIn = document.querySelector('.desk-header__in');
const deskHeaderInS1 = deskHeaderIn.querySelector('.s1');
const cardsS1 = deskHeaderInS1.querySelector('.card');
const baseCardS1 = deskHeaderInS1.querySelector('.base-card');
const deskHeaderInS2 = deskHeaderIn.querySelector('.s2');
const cardsS2 = deskHeaderInS2.querySelectorAll('.card');
let copyDeck = DECK.slice();
let deckS2 = [];
let deckS2Flip = [];

function randomCard() {
  const newCard = copyDeck[Math.floor(Math.random() * copyDeck.length)];

  copyDeck = copyDeck.filter(card => card !== newCard);

  return newCard;
}

function startGame() {
  for (const column of deskFieldColumn) {
    [...column.querySelectorAll('.card')].map(card => {
      const newCard = randomCard();

      card.hidden = false;
      card.childNodes[0].textContent = newCard.name;
      // card.textContent = newCard.name;
      card.classList.add(newCard.suit);
    }
    );
  }

  for (let i = 0; i < 24; i++) {
    deckS2.push(randomCard());
  }

  cardsS1.addEventListener('click', eventS1);
}

function threeRandomCards() {
  [...cardsS2].map(card => {
    const newCard = deckS2[0];

    deckS2.shift(newCard);
    deckS2Flip.push(newCard);
    card.hidden = false;
    card.childNodes[0].textContent = newCard.name;
    card.classList.remove('hearts');
    card.classList.remove('diamonds');
    card.classList.remove('spades');
    card.classList.remove('clubs');
    card.classList.add(newCard.suit);
  });

  if (deckS2.length === 0) {
    cardsS1.hidden = true;
  }
}

function flipCard() {
  deckS2 = deckS2Flip.slice();
  deckS2Flip = [];
  cardsS1.hidden = false;

  [...cardsS2].map(card => {
    card.hidden = true;
  });
}

const eventS1 = function(event) {
  threeRandomCards();
};

const eventFlipS1 = function(event) {
  flipCard();
};

baseCardS1.addEventListener('click', eventFlipS1);

startGame();

// console.log(cardBackS1)
// console.log(cardsS1);
