import * as types from '../constants/main';

const initialState = {
  place: '/',
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PLACE:
      return { ...initialState, place: action.place };
    default:
      return state;
  }
};

export default main;
