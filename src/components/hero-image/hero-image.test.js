import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HeroImage from './hero-image';
import { mapStateToProps } from './hero-image-container';

configure({ adapter: new Adapter() });


const heroImage = {
  image: 'https://i.imgur.com/fZ8JNw4.jpg',
  title: 'Skateboarding Bulldog',
  tags: ['Funny', 'Dog', 'Action'],
  score: 100,
  datetime: 'Mon Oct 02 2017',
  id: 'fZ8JNw4',
};
const history = {
  push: jest.fn(),
};

describe('HeroImage', () => {
  it('Renders to page', () => {
    const component = shallow(
      <HeroImage
        heroImage={heroImage}
        history={history}
      />,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders to page with no tags', () => {
    const heroImageAlt = {
      image: 'https://i.imgur.com/fZ8JNw4.jpg',
      title: 'Skateboarding Bulldog',
      tags: [],
      score: 100,
      datetime: 'Mon Oct 02 2017',
    };
    const component = shallow(
      <HeroImage
        heroImage={heroImageAlt}
        history={history}
      />,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders with all correct classes', () => {
    const component = shallow(
      <HeroImage
        heroImage={heroImage}
        history={history}
      />,
    );
    expect(component.find('#HeroImageContainer').length).toBe(1);
    expect(component.find('#HeroImageHeader').length).toBe(1);
    expect(component.find('#HeroImage').length).toBe(1);
    expect(component.find('#HeroTitle').length).toBe(1);
  });
  it('When button is clicked history.push is called', () => {
    const component = mount(
      <HeroImage
        heroImage={heroImage}
        history={history}
      />,
    );
    component.find('button').simulate('click');
    expect(history.push).toHaveBeenCalled();
    expect(history.push.mock.calls[0][0]).toBe('/');
  });
  it('MapStateToProps returns the proper items', () => {
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
      },
    };

    const ownProps = {
      match: {
        params: {
          id: 'fZ8JNw4',
        },
      },
    };

    const expected = {
      heroImage: {
        image: 'https://i.imgur.com/fZ8JNw4.jpg',
        title: 'Skateboarding Bulldog',
        tags: ['Funny', 'Dog', 'Action'],
        score: 100,
        datetime: 'Mon Oct 02 2017',
        id: 'fZ8JNw4',
      } };
    const actual = mapStateToProps(state, ownProps);
    expect(actual).toEqual(expected);
  });
});
