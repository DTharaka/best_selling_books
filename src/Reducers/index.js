// Combine all reducers in only one reducer & set it into a single parent state
import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
    books: searchReducer
});
