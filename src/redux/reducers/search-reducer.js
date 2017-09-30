import initialState from '../store/initial-state';
import * as CONST from '../constants/constants';


const search = (state = initialState.search, action) => {
  switch (action.type) {
    case CONST.UPDATE_SEARCH_TERM:
      return action.search;
    default:
      return state;
  }
};


export default search;
