import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from './loader';
import { mapStateToProps, mapDispatchToProps } from './loader-container';

configure({ adapter: new Adapter() });

const searchForImages = jest.fn();

describe('Loader', () => {
  it('Renders to the page when not fetching', () => {
    const component = shallow(
      <Loader
        fetching={false}
        searchForImages={searchForImages}
        searchTerm={'bulldog'}
        noImagesFound={false}
      />,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders to the page when fetching', () => {
    const component = shallow(
      <Loader
        fetching
        searchForImages={searchForImages}
        searchTerm={'bulldog'}
        noImagesFound={false}
      />,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders to page when no results', () => {
    const component = shallow(
      <Loader
        fetching={false}
        searchForImages={searchForImages}
        searchTerm={'asdfghjkjhgfdsdfgh'}
        noImagesFound
      />,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders with correct properties', () => {
    const componentFetching = shallow(
      <Loader
        fetching
        searchForImages={searchForImages}
        searchTerm={'bulldog'}
        noImagesFound={false}
      />,
    );
    const component = shallow(
      <Loader
        fetching={false}
        searchForImages={searchForImages}
        searchTerm={'bulldog'}
        noImagesFound={false}
      />,
    );
    const componentNoImages = shallow(
      <Loader
        fetching={false}
        searchForImages={searchForImages}
        searchTerm={'asdfghjkjhgfdsdfgh'}
        noImagesFound
      />,
    );
    expect(componentFetching.find('#Loading').length).toBe(1);
    expect(component.find('button').length).toBe(1);
    expect(componentNoImages.find('#NotFound').length).toBe(1);
  });
  it('When clicked searchForImages is called with the correct search term', () => {
    const component = mount(
      <Loader
        fetching={false}
        searchForImages={searchForImages}
        searchTerm={'bulldog'}
        noImagesFound={false}
      />,
    );
    component.find('button').simulate('click');
    expect(searchForImages).toHaveBeenCalled();
    expect(searchForImages.mock.calls[0][0]).toBe('bulldog');
  });
  it('mapStateToProps returns the correct state', () => {
    const state = {
      searchResults: {
        images: [
          {
            image: 'https://i.imgur.com/fZ8JNw4.jpg',
            title: 'Skateboarding Bulldog',
            tags: ['Funny', 'Dog', 'Action'],
            score: 100,
            datetime: 'Mon Oct 02 2017',
            id: 'fZ8JNw4',
          },
          {
            id: 'gzC6hl4',
            image: 'https://i.imgur.com/gzC6hl4.gif',
            title: 'Tired Bulldog Dad Needs Break From His Playful Puppies.',
            score: 39,
            tags: [],
            datetime: 'Mon Oct 02 2017',
          }, {
            id: 'xE7Yu2v',
            image: 'https://i.imgur.com/xE7Yu2v.jpg',
            title: 'Trevor Donovan with his bulldog Tito and German Shepherd Dogbert.',
            score: 26,
            tags: ['dogs', 'dog', 'german she…', 'pets'],
            datetime: 'Mon Oct 02 2017' },
        ],
        searchTerm: 'bulldog',
        fetching: false,
        noImages: false,
      },
    };
    const expected = {
      searchTerm: 'bulldog',
      fetching: false,
      noImagesFound: false,
    };
    const actual = mapStateToProps(state);
    expect(actual).toEqual(expected);
  });
  it('mapDispatchToProps dispatches the expected action', () => {
    const dispatch = jest.fn();
    const dispatched = mapDispatchToProps(dispatch);
    expect(dispatched).toHaveProperty('searchForImages');
  });
});
