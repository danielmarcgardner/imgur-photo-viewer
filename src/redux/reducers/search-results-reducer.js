import initialState from '../store/initial-state';
import * as CONST from '../constants/constants';


const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case CONST.LOADING:
      return { ...state, fetching: true, searchTerm: action.searchTerm };
    case CONST.IMGUR_SEARCH:
      return { ...state, fetching: false, page: action.page, images: state.images.concat(action.images) };
    default:
      return state;
  }
};

export default searchResults;
