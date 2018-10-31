



import { combineReducers } from 'redux';
import CARD_LIST_REDUCER from './Reducers';
import * as t from './Constants';

export default combineReducers({
	[t.CARD_LIST_REDUCER]  : CARD_LIST_REDUCER,
});