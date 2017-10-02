import * as CONST from '../constants/constants';
import imageDataFilter from '../../helpers/image-result-helper';

export const searchForImages = searchTerm => async (dispatch, getState, { Api }) => {
  let currentTerm = getState().searchResults.searchTerm;
  if (currentTerm === searchTerm || searchTerm === undefined) {
    dispatch({
      type: CONST.SEARCH_AGAIN,
    });
  } else {
    currentTerm = searchTerm;
    dispatch({
      type: CONST.NEW_SEARCH,
      searchTerm,
    });
  }
  const page = getState().searchResults.page;
  const payload = await Api.imgurSearch(currentTerm, page);
  const images = imageDataFilter(payload.data);
  if (images.length > 0) {
    dispatch({
      type: CONST.IMGUR_SEARCH,
      images,
    });
  } else {
    dispatch({
      type: CONST.NO_IMAGES,
    });
  }
};
