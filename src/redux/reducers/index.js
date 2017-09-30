import { combineReducers } from 'redux';
import search from './search-reducer';
import searchResults from './search-results-reducer';

const imgurApp = combineReducers({
  search,
  searchResults,
});

export default imgurApp;
