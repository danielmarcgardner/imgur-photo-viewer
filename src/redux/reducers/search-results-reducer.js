import initialState from '../store/initial-state';
import * as CONST from '../constants/constants';


const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case CONST.NEW_SEARCH:
      return { ...state, fetching: true, searchTerm: action.searchTerm, page: 0, images: [], noImages: false };
    case CONST.SEARCH_AGAIN:
      return { ...state, fetching: true };
    case CONST.IMGUR_SEARCH:
      return { ...state, fetching: false, page: state.page += 1, images: state.images.concat(action.images) };
    case CONST.NO_IMAGES:
      return { ...state, fetching: false, noImages: true };
    default:
      return state;
  }
};

export default searchResults;
