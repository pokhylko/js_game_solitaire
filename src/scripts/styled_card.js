'use strict';

const fourColumns = document.querySelectorAll('.desk-header__out-f');
const deskHeaderIn = document.querySelector('.desk-header__in');
const deskHeaderInS2 = deskHeaderIn.querySelector('.s2');

function styleFour() {
  [...fourColumns].map(column => {
    const cards = column.querySelectorAll('.card');

    [...cards].map(card => {
      card.style.top = `0px`;
      card.style.left = '0px';
      card.style.zIndex = '1';
    });
  });
}

function styleSeven(columns) {
  [...columns].map(column => {
    const cards = column.querySelectorAll('.card');
    let top = '0';
    let zIndex = '1';

    [...cards].map(card => {
      card.style.top = `${top}px`;
      card.style.left = '0px';
      card.style.zIndex = `${zIndex}`;
      top = +top + 30;
      zIndex++;
    });
  });
}

function styleTwo() {
  const cardsS2 = deskHeaderInS2.querySelectorAll('.card');
  let left = '0';

  for (let card = 0; card < cardsS2.length; card++) {
    cardsS2[card].style.top = '0px';

    if (cardsS2.length - card <= 3) {
      cardsS2[card].style.left = `${left}px`;
      left = +left + 30;
    } else {
      cardsS2[card].style.left = '0px';
    }
  }
}

module.exports = {
  styleFour,
  styleSeven,
  styleTwo,
};
