import initialState from '../store/initial-state';
import * as CONST from '../constants/constants';


const searchResults = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case CONST.LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default searchResults;
