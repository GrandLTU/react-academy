import { constants } from '../../constants';

export const requestCard = (deckId = 'new') => {
  return {
    type: constants.cards.REQUEST,
    payload: {
        deckId
    }
  }
};

export const addCard = (card) => {
  return {
    type: constants.cards.ADD,
    payload: {
      card
    }
  }
};
