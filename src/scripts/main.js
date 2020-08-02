'use strict';

const DECK = [
  {
    suit: 'hearts', color: 'red', number: 1, name: 'A', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 1, name: 'A', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 1, name: 'A', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 1, name: 'A', cardback: true,
  },
  {
    suit: 'hearts', color: 'red', number: 2, name: '2', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 2, name: '2', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 2, name: '2', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 2, name: '2', cardback: true,
  },
  {
    suit: 'hearts', color: 'red', number: 3, name: '3', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 3, name: '3', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 3, name: '3', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 3, name: '3', cardback: true,
  },
  {
    suit: 'hearts', color: 'red', number: 4, name: '4', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 4, name: '4', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 4, name: '4', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 4, name: '4', cardback: true,
  },
  {
    suit: 'hearts', color: 'red', number: 5, name: '5', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 5, name: '5', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 5, name: '5', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 5, name: '5', cardback: true,
  },
  {
    suit: 'hearts', color: 'red', number: 6, name: '6', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 6, name: '6', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 6, name: '6', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 6, name: '6', cardback: true,
  },
  {
    suit: 'hearts', color: 'red', number: 7, name: '7', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 7, name: '7', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 7, name: '7', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 7, name: '7', cardback: true,
  },
  {
    suit: 'hearts', color: 'red', number: 8, name: '8', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 8, name: '8', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 8, name: '8', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 8, name: '8', cardback: true,
  },
  {
    suit: 'hearts', color: 'red', number: 9, name: '9', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 9, name: '9', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 9, name: '9', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 9, name: '9', cardback: true,
  },
  {
    suit: 'hearts', color: 'red', number: 10, name: '10', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 10, name: '10', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 10, name: '10', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 10, name: '10', cardback: true,
  },
  {
    suit: 'hearts', color: 'red', number: 11, name: 'J', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 11, name: 'J', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 11, name: 'J', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 11, name: 'J', cardback: true,
  },
  {
    suit: 'hearts', color: 'red', number: 12, name: 'D', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 12, name: 'D', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 12, name: 'D', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 12, name: 'D', cardback: true,
  },
  {
    suit: 'hearts', color: 'red', number: 13, name: 'K', cardback: true,
  },
  {
    suit: 'diamonds', color: 'red', number: 13, name: 'K', cardback: true,
  },
  {
    suit: 'spades', color: 'black', number: 13, name: 'K', cardback: true,
  },
  {
    suit: 'clubs', color: 'black', number: 13, name: 'K', cardback: true,
  },
];

const deskColumns = document.querySelectorAll('.desk-field__w');
const deskHeaderIn = document.querySelector('.desk-header__in');
const deskHeaderInS1 = deskHeaderIn.querySelector('.s1');
const cardsS1 = deskHeaderInS1.querySelector('.card');
const baseCardS1 = deskHeaderInS1.querySelector('.base-card');
const deskHeaderInS2 = deskHeaderIn.querySelector('.s2');
const cardsS2 = deskHeaderInS2.querySelectorAll('.card');
let copyDeck = DECK.slice();
const shuffledDeck = [];
let deckS2 = [];
let deckS2Flip = [];
const gameColumns = [];

function shuffleDeck() {
  for (let card = 0; card < DECK.length; card++) {
    const randomCard = copyDeck[Math.floor(Math.random() * copyDeck.length)];

    copyDeck = copyDeck.filter(removeCard => removeCard !== randomCard);
    shuffledDeck.push(randomCard);
  }
}

shuffleDeck();

function handOverCard(deck) {
  return deck.pop();
}

function sevenColumnArray() {
  for (let column = 0; column < deskColumns.length; column++) {
    const arrColumn = [];

    for (let card = 0; card < column; card++) {
      arrColumn.push(handOverCard(shuffledDeck));
    }

    const lastCard = handOverCard(shuffledDeck);

    lastCard.cardback = false;
    arrColumn.push(lastCard);
    gameColumns.push(arrColumn);
  }
}

sevenColumnArray();

function createSevenColumn() {
  for (let column = 0; column < gameColumns.length; column++) {
    const baseCard = document.createElement('div');

    baseCard.classList.add('base-card');
    deskColumns[column].append(baseCard);

    for (let card = 0; card <= column; card++) {
      const newCard = document.createElement('div');

      if (gameColumns[column][card].cardback === true) {
        newCard.classList.add('card', 'cardback');
      } else {
        newCard.classList.add('card', 'card-last');
        newCard.innerHTML = `<span>${gameColumns[column][card].name}</span>`;
        newCard.draggable = true;
        newCard.classList.add(gameColumns[column][card].suit);
      }
      deskColumns[column].append(newCard);
    }
  }
  styleTopCard();
}

createSevenColumn();

  // for (let i = 0; i < 24; i++) {
  //   deckS2.push(handOverCard(shuffledDeck));
  // }
  // styleTopCard();
  // cardsS1.addEventListener('click', eventS1);
// }

function threeHandOverCard() {
  for (let card = 0; card < 3; card++) {
    const random = handOverCard(shuffledDeck);
    const newCard = document.createElement('div');

    newCard.classList.add('card', 'card-last');
    newCard.innerHTML = `<span>${random.name}</span>`;
    newCard.classList.add(random.suit);
    deskHeaderInS2.append(newCard);

    if (card === 2) {
      newCard.draggable = true;
    }
  }
}

function styleTopCard() {
  [...deskColumns].map(column => {
    const cards = column.querySelectorAll('.card');
    let top = '0';

    for (const card of cards) {
      card.style.top = `${top}px`;
      top = +top + 40;
    }
  });
}

function flipCard() {
  deckS2 = deckS2Flip.slice();
  deckS2Flip = [];
  cardsS1.classList.remove('hidden');

  [...cardsS2].map(card => {
    card.classList.add('hidden');
  });
}

const eventS1 = function(event) {
  threeHandOverCard();
};

cardsS1.addEventListener('click', eventS1);

const eventFlipS1 = function(event) {
  flipCard();
};

baseCardS1.addEventListener('click', eventFlipS1);

let activeCard;

document.addEventListener('dragstart', event => {
  activeCard = event.target;
  // console.log(activeCard);

  setTimeout(() => {
    activeCard.classList.add('hidden');
  }, 0);
});

document.addEventListener('dragend', event => {
  activeCard.classList.remove('hidden');
});

const dragOver = function(event) {
  event.preventDefault();
};
const dragEnter = function(event) {
  event.preventDefault();
};
// const dragLeave = function() {
// };
const dragDrop = function() {
  let fromColumn = 0;
  let dropColumn = 0;

  while (deskColumns[fromColumn] !== activeCard.parentNode) {
    fromColumn++;
  }

  while (deskColumns[dropColumn] !== this) {
    dropColumn++;
  }

  const fromCard = gameColumns[fromColumn][gameColumns[fromColumn].length - 1];
  const fromCardBack = gameColumns[fromColumn][gameColumns[fromColumn].length - 2];
  const dropCard = gameColumns[dropColumn][gameColumns[dropColumn].length - 1];

  // append A

  if (fromCard.number === 1 && dropCard === undefined) {
    const popCard = gameColumns[fromColumn].pop();

    const cardback = activeCard.previousSibling;

    if ([...cardback.classList].includes('cardback')
    && activeCard.parentNode !== this) {
      cardback.classList.add('card-last', fromCardBack.suit);
      cardback.classList.remove('cardback');
      cardback.innerHTML = `<span>${fromCardBack.name}</span>`;
    };

    gameColumns[dropColumn].push(popCard);
    this.lastChild.classList.remove('card-last');
    cardback.draggable = true;
    this.append(activeCard);
    styleTopCard();
  }

  // append card + card

  if (dropCard.number - fromCard.number === 1
    && dropCard.color !== fromCard.color) {
    const popCard = gameColumns[fromColumn].pop();

    gameColumns[dropColumn].push(popCard);

    const prevCard = gameColumns[fromColumn];

    if (prevCard.length > 0) {
      prevCard[prevCard.length - 1].cardback = false;
    }

    let cardback;

    if ([...activeCard.parentNode.classList].includes('desk-field__w')) {
      cardback = activeCard.previousSibling;

      if ([...cardback.classList].includes('cardback')
        && activeCard.parentNode !== this) {
        cardback.classList.add('card-last', fromCardBack.suit);
        cardback.classList.remove('cardback');
        cardback.innerHTML = `<span>${fromCardBack.name}</span>`;
      };
    }

    if ([...activeCard.parentNode.classList].includes('desk-header__in-s')) {
      cardback = activeCard.previousSibling;
    }

    this.lastChild.classList.remove('card-last');
    cardback.draggable = true;
    this.append(activeCard);
    styleTopCard();
  };
  console.log(gameColumns);
};

deskColumns.forEach(column => {
  column.addEventListener('dragover', dragOver);
  column.addEventListener('dragenter', dragEnter);
  // column.addEventListener('dragleave', dragLeave);
  column.addEventListener('drop', dragDrop);
});
