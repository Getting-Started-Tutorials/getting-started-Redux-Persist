

import * as t from '../Constants';

const cardReducer = (state = [], action) => {

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

export default cardReducer;