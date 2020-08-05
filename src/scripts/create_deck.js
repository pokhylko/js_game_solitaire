'use strict';

const SUITS = ['hearts', 'diamonds', 'spades', 'clubs'];
const NAME = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const DECK = [];
const DECK_LENGTH = 52;

for (let rank = 0; rank < NAME.length; rank++) {
  for (let card = 0; card < SUITS.length; card++) {
    DECK.push({
      name: `${NAME[rank]}`,
      suit: `${SUITS[card]}`,
      color: `${SUITS[card] === 'hearts'
      || SUITS[card] === 'diamonds' ? 'red' : 'black'}`,
      number: `${rank + 1}`,
      cardback: true,
    });
  }
}

module.exports = {
  DECK, DECK_LENGTH,
};
