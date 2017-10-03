import searchResults from './search-results-reducer';
import initialState from '../store/initial-state';
import * as CONST from '../constants/constants';

const images = [
  {
    datetime: 'Mon Oct 02 2017',
    id: '5Nz0DqK',
    image: 'https://i.imgur.com/5Nz0DqK.jpg',
    score: 10,
    tags: ['pets', 'doggie', 'bulldog'],
    title: 'Angus the bulldog',
  },
  {
    datetime: 'Mon Oct 02 2017',
    id: 'neosBB1',
    image: 'https://i.imgur.com/neosBB1.jpg',
    score: 36,
    tags: ['funny', 'dog', 'aww'],
    title: 'Door won’t stay closed? Try the Bulldog Door Stop 3000. Weighs about 70lbs and will not let the door open.',
  },
];

describe('searchResults Reducer', () => {
  it('Returns the proper state with CONST.NEW_SEARCH', () => {
    const action = {
      type: CONST.NEW_SEARCH,
      searchTerm: 'bulldog',
    };
    const expected = {
      error: false,
      fetching: true,
      page: 0,
      images: [],
      searchTerm: 'bulldog',
      noImages: false,
    };
    const actual = searchResults(initialState, action);
    expect(actual).toEqual(expected);
  });
  it('Returns the proper state with CONST.NO_IMAGES', () => {
    const action = {
      type: CONST.NO_IMAGES,
    };
    const expected = {
      error: false,
      fetching: false,
      page: 0,
      images: [],
      searchTerm: '',
      noImages: true,
    };
    const actual = searchResults(initialState, action);
    expect(actual).toEqual(expected);
  });
  it('Returns the proper state with CONST.SEARCH_AGAIN', () => {
    const action = {
      type: CONST.SEARCH_AGAIN,
    };

    const state = {
      fetching: false,
      page: 1,
      images,
      searchTerm: 'bulldog',
      noImages: false,
      error: false,
    };

    const expected = {
      error: false,
      fetching: true,
      page: 1,
      images,
      searchTerm: 'bulldog',
      noImages: false,
    };
    const actual = searchResults(state, action);
    expect(actual).toEqual(expected);
  });
  it('Returns the proper state with CONST.ERROR_OCCURED', () => {
    const action = {
      type: CONST.ERROR_OCCURED,
    };
    const expected = {
      error: true,
      fetching: false,
      page: 0,
      images: [],
      searchTerm: '',
      noImages: false,
    };
    const actual = searchResults(initialState, action);
    expect(actual).toEqual(expected);
  });
  it('Returns the proper state with CONST.IMGUR_SEARCH', () => {
    const action = {
      type: CONST.IMGUR_SEARCH,
      images,
    };
    const expected = {
      error: false,
      fetching: false,
      page: 1,
      images,
      searchTerm: '',
      noImages: false,
    };
    const actual = searchResults(initialState, action);
    expect(actual).toEqual(expected);
  });
  it('Returns the default state with unknown action', () => {
    const action = {
      type: 'SOMETHING',
    };
    const actual = searchResults(initialState, action);
    expect(actual).toEqual(initialState);
  });
});
