import * as CONST from '../constants/constants';

export const searchForImages = searchTerm => async (dispatch, getState, { Api }) => {
  dispatch({ type: CONST.LOADING });
  const page = getState().searchResults.page;
  const payload = await Api.imgurSearch(searchTerm, page);
  console.log(payload);
};
