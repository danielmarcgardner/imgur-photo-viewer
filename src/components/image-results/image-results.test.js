import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageResults from './image-results';
import { mapStateToProps } from './image-results-container';

configure({ adapter: new Adapter() });

const images = [
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
];

describe('ImageResults', () => {
  it('Renders to the page with no images or searchTerm', () => {
    const component = shallow(
      <ImageResults
        searchTerm=""
        images={[]}
      />,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders to the page with images and searchTerm', () => {
    const component = shallow(
      <ImageResults
        searchTerm="bulldog"
        images={images}
      />,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders with all the correct properties', () => {
    const component = shallow(
      <ImageResults
        searchTerm="bulldog"
        images={images}
      />,
    );
    expect(component.find('#ImageResults').length).toBe(1);
    expect(component.find('#LoadMoreDiv').length).toBe(1);
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

    const actual = mapStateToProps(state);
    const expected = {
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
    };
    expect(actual).toEqual(expected);
  });
});
