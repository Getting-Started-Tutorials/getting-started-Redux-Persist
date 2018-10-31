

import { createSelector } from 'reselect';
export const selectCardState = state => state.CARD_REDUCER;
export const makeSelectCardData = () => createSelector(selectCardState, (substate) => {
  if (substate) {
    return substate;
  }
})