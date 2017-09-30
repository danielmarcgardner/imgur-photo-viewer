import * as CONST from '../constants/constants';

export const searchForImages = searchTerm => async (dispatch, getState, { Api }) => {
  dispatch({
    type: CONST.LOADING,
    searchTerm,
  });
  let page = getState().searchResults.page;
  const payload = await Api.imgurSearch(searchTerm, page);
  dispatch({
    type: CONST.IMGUR_SEARCH,
    images: payload.data,
    page: page++,
  });
};
