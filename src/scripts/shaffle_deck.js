'use strict';

let { DECK } = require('./create_deck');
const { DECK_LENGTH } = require('./create_deck');

const shuffledDeck = [];

function shuffleDeck() {
  for (let card = 0; card < DECK_LENGTH; card++) {
    const randomCard = DECK[Math.floor(Math.random() * DECK.length)];

    DECK = DECK.filter(removeCard => removeCard !== randomCard);
    shuffledDeck.push(randomCard);
  }
}

module.exports = {
  shuffleDeck, shuffledDeck,
};
