import * as CONST from '../constants/constants';
import imageDataFilter from '../../helpers/image-result-helper';

export const searchForImages = searchTerm => async (dispatch, getState, { Api }) => {
  const currentTerm = getState().searchResults.searchTerm;
  if (currentTerm === searchTerm || searchTerm === undefined) {
    dispatch({
      type: CONST.SEARCH_AGAIN,
    });
  } else {
    dispatch({
      type: CONST.NEW_SEARCH,
      searchTerm,
    });
  }
  const page = getState().searchResults.page;
  console.log(page);
  const payload = await Api.imgurSearch(searchTerm, page);
  const images = imageDataFilter(payload.data);
  dispatch({
    type: CONST.IMGUR_SEARCH,
    images,
  });
};
