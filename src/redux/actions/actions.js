import * as CONST from '../constants/constants';

export const updateSearchTerm = search => ({
  type: CONST.UPDATE_SEARCH_TERM,
  search,
});
