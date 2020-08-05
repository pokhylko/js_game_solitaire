'use strict';

const { shuffleDeck } = require('./shaffle_deck');
const { createS1 } = require('./create_field');
const { sevenColumns } = require('./create_field');
const { createSevenColumn } = require('./create_field');
const { addListenerS1 } = require('./create_field');
const { styleSeven } = require('./styled_card');
const { styleFour } = require('./styled_card');

const deskColumns = document.querySelectorAll('.desk-field__w');

function startGame() {
  shuffleDeck();
  createS1();
  addListenerS1();
  createSevenColumn();
}

startGame();

document.addEventListener('mousedown', event => {
  if (event.target.classList[0] !== 'card'
  || event.target.classList[1] === 'cardback') {
    return;
  }

  const activeCard = event.target;
  const activeCardTop = activeCard.style.top;
  const activeCardLeft = activeCard.style.left;
  const fromNextCard = activeCard.nextSibling;
  const fromParentCard = activeCard.parentElement;
  const prevCard = activeCard.previousSibling;

  if (fromParentCard.classList[0] === 'desk-field__w') {
    let fromColumn = 0;

    while (fromParentCard !== sevenColumns[fromColumn]) {
      fromColumn++;
    }

    let fromCard = 0;
    const querCard = sevenColumns[fromColumn].querySelectorAll('.card');

    while (activeCard !== querCard[fromCard]) {
      fromCard++;
    }
  }

  const cards = [];
  let nextCard = activeCard;

  while (nextCard) {
    cards.push(nextCard);
    nextCard = nextCard.nextSibling;
  }

  let elemBelow = null;
  const shiftX = event.clientX - activeCard.getBoundingClientRect().left;
  const shiftY = event.clientY - activeCard.getBoundingClientRect().top;

  [...cards].map(card => {
    card.style.zIndex = 1000;
    document.body.append(card);
  });

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    let plusTop = 0;

    [...cards].map(card => {
      card.style.left = pageX - shiftX + 'px';
      card.style.top = pageY - shiftY + plusTop + 'px';
      plusTop += 30;
    });
  }

  function onMouseMove(evt) {
    moveAt(evt.pageX, evt.pageY);

    activeCard.hidden = true;

    elemBelow = document.elementFromPoint(evt.clientX, evt.clientY);

    activeCard.hidden = false;

    if (!elemBelow) {
      return; // eslint-disable-line
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  activeCard.onmouseup = function() {
    if (elemBelow === null) {
      activeCard.style.top = activeCardTop;
      activeCard.style.left = activeCardLeft;
      fromParentCard.append(activeCard);
    } else {
      if (fromParentCard.classList[0] === 'desk-field__w') {
        // The same W1-7
        if (elemBelow.classList[0] !== 'card'
        || fromParentCard === elemBelow.parentElement) {
          [...cards].map(card => {
            fromParentCard.append(card);
          });
          styleSeven(deskColumns);
        }

        // from W1-7 to W1-7
        if (fromParentCard !== elemBelow.parentElement
          && elemBelow.parentElement.classList[0] === 'desk-field__w') {
          prevCard.classList.remove('cardback');

          if (cards.length > 0) {
            [...cards].map(card => {
              elemBelow.parentElement.append(card);
            });
          }

          elemBelow.parentElement.append(activeCard);
          styleSeven(deskColumns);
        }

        // from W1-7 to F1-4
        if (fromParentCard !== elemBelow.parentElement
          && elemBelow.parentElement.classList[0] === 'desk-header__out-f'
          && fromNextCard === null) {
          prevCard.classList.remove('cardback');

          elemBelow.parentElement.append(activeCard);
          styleFour();
        }
      }
    }
    document.removeEventListener('mousemove', onMouseMove);
    activeCard.onmouseup = null;
  };

  activeCard.ondragstart = function() {
    return false;
  };
});
