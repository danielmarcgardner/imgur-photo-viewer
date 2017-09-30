import { combineReducers } from 'redux';
import searchResults from './search-results-reducer';

const imgurApp = combineReducers({
  searchResults,
});

export default imgurApp;
