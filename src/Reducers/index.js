

import * as t from '../Constants';

const CARD_LIST_REDUCER = (state = [], action) => {

 console.log('data',action.data);
  switch (action.type) {
    case t.SAVE_USER:
      const newState = state.concat([action.data]);
      return newState;
      break;

    default:
      return state;
  }
};

export default CARD_LIST_REDUCER;