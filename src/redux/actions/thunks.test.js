import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as CONST from '../constants/constants';
import { sampleData, filtered } from '../../helpers/sample-data-test';
import { searchForImages } from './thunks';

describe('searchForImages', () => {
  it('searchForImages dispatches correct actions based on loading more images', () => {
    const imgurSearchMock = jest.fn();
    imgurSearchMock.mockReturnValue(
      Promise.resolve({
        data: sampleData,
      }),
    );

    const Api = {
      imgurSearch: imgurSearchMock,
    };
    const mockStore = configureStore([thunk.withExtraArgument({ Api })]);

    const currentState = {
      searchResults: {
        fetching: false,
        page: 0,
        images: [],
        searchTerm: 'bulldog',
        noImages: false,
      },
    };

    const expected = [
      { type: CONST.SEARCH_AGAIN },
      { type: CONST.IMGUR_SEARCH,
        images: filtered,
      },
    ];


    const store = mockStore(currentState);
    store.dispatch(searchForImages('bulldog')).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('searchForImages dispatches correct actions based on new search', () => {
    const imgurSearchMock = jest.fn();
    imgurSearchMock.mockReturnValue(
      Promise.resolve({
        data: sampleData,
      }),
    );

    const Api = {
      imgurSearch: imgurSearchMock,
    };
    const mockStore = configureStore([thunk.withExtraArgument({ Api })]);

    const currentState = {
      searchResults: {
        fetching: false,
        page: 0,
        images: [],
        searchTerm: 'bulldog',
        noImages: false,
      },
    };

    const expected = [
      { type: CONST.NEW_SEARCH,
        searchTerm: 'english bulldog',
      },
      { type: CONST.IMGUR_SEARCH,
        images: filtered,
      },
    ];

    const store = mockStore(currentState);

    store.dispatch(searchForImages('english bulldog')).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('searchForImages dispatches correct actions when no results', () => {
    const imgurSearchMock = jest.fn();
    imgurSearchMock.mockReturnValue(
      Promise.resolve({
        data: [],
      }),
    );

    const Api = {
      imgurSearch: imgurSearchMock,
    };
    const mockStore = configureStore([thunk.withExtraArgument({ Api })]);

    const currentState = {
      searchResults: {
        fetching: false,
        page: 0,
        images: [],
        searchTerm: 'bulldog',
        noImages: false,
      },
    };

    const expected = [
      { type: CONST.NEW_SEARCH,
        searchTerm: 'asdfghjkjhgfdfghjkjhgf',
      },
      { type: CONST.NO_IMAGES,
      },
    ];

    const store = mockStore(currentState);

    store.dispatch(searchForImages('asdfghjkjhgfdfghjkjhgf')).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
