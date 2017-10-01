import * as CONST from '../constants/constants';
import imageDataFilter from '../../helpers/image-result-helper';

export const searchForImages = searchTerm => async (dispatch, getState, { Api }) => {
  dispatch({
    type: CONST.LOADING,
    searchTerm,
  });
  let page = getState().searchResults.page;
  const payload = await Api.imgurSearch(searchTerm, page);
  const images = imageDataFilter(payload.data);
  dispatch({
    type: CONST.IMGUR_SEARCH,
    page: page++,
    images,
  });
};
