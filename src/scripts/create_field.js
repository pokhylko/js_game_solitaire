'use strict';

const { shuffledDeck } = require('./shaffle_deck');
const { handOverCard } = require('./hand_over_card');
const { styleSeven } = require('./styled_card');
const { styleTwo } = require('./styled_card');

const deskColumns = document.querySelectorAll('.desk-field__w');
const deskHeaderIn = document.querySelector('.desk-header__in');
const deskHeaderInS1 = deskHeaderIn.querySelector('.s1');
const deskHeaderInS2 = deskHeaderIn.querySelector('.s2');
let deckS1 = [];
let deckS2 = [];
const sevenColumns = document.querySelectorAll('.desk-field__w');
const sevenDeck = [];

function createS1() {
  const baseCard = document.createElement('div');

  baseCard.classList.add('base-card');
  deskHeaderInS1.append(baseCard);

  baseCard.addEventListener('click', eventFlipS1);

  for (let card = 0; card < 24; card++) {
    const handOver = handOverCard(shuffledDeck);
    const newCard = document.createElement('div');

    newCard.classList.add('card', 'cardback');
    newCard.innerHTML = `<span>${handOver.name}</span>`;
    newCard.classList.add(handOver.suit);
    newCard.style.top = '0px';
    deskHeaderInS1.append(newCard);
    deckS1.push(handOver);
  }
}

function createSevenColumn() {
  for (let column = 0; column < sevenColumns.length; column++) {
    const columnArr = [];
    const baseCard = document.createElement('div');

    baseCard.classList.add('base-card');
    sevenColumns[column].append(baseCard);

    for (let card = 0; card <= column; card++) {
      const newCard = document.createElement('div');
      const newArrCard = handOverCard(shuffledDeck);

      if (card !== column) {
        newCard.classList.add('card', 'cardback');
      } else {
        newCard.classList.add('card');
        newArrCard.cardback = false;
      }
      newCard.innerHTML = `<span>${newArrCard.name}</span>`;
      newCard.classList.add(newArrCard.suit);
      sevenColumns[column].append(newCard);
      columnArr.push(newArrCard);
    }

    sevenDeck.push(columnArr);
  }
  styleSeven(deskColumns);
}

// ****

function threeHandOverCard() {
  if (deckS1.length > 0) {
    for (let card = 0; card < 3; card++) {
      const handOver = handOverCard(deckS1);
      const newCard = deskHeaderInS1.lastChild;

      newCard.classList.add('card');
      newCard.classList.remove('cardback');
      newCard.innerHTML = `<span>${handOver.name}</span>`;
      newCard.classList.add(handOver.suit);
      deskHeaderInS2.append(newCard);
      deckS2.push(handOver);
    }

    addListenerS1();
    styleTwo();
  }
}

function flipCard() {
  deckS1 = deckS2.slice().reverse();
  deckS2 = [];

  const backDeck = deskHeaderInS2.querySelectorAll('.card');

  for (let card = 0; card < backDeck.length; card++) {
    backDeck[card].classList.add('cardback');
    backDeck[card].style.left = '0px';

    deskHeaderInS1.append(backDeck[card]);
  }
}

const eventS1 = function(event) {
  threeHandOverCard();
};

const eventFlipS1 = function(event) {
  flipCard();
  addListenerS1();
};

function addListenerS1() {
  const lastCardS1 = deskHeaderInS1.lastChild;

  lastCardS1.addEventListener('click', eventS1);
}

module.exports = {
  deckS1,
  createS1,
  createSevenColumn,
  addListenerS1,
  sevenDeck,
  sevenColumns,
};
