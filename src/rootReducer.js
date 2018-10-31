



import { combineReducers } from 'redux';
import cardReducer from './Reducers';
import * as t from './Constants';

export default combineReducers({
	[t.CARD_REDUCER]  : cardReducer,
});