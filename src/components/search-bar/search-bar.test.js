import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './search-bar';
import { mapDispatchToProps } from './search-bar-container';

configure({ adapter: new Adapter() });

const searchForImages = jest.fn();

describe('SearchBar', () => {
  it('Renders to the page', () => {
    const component = shallow(
      <SearchBar
        searchForImages={searchForImages}
      />,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders with correct properties', () => {
    const component = shallow(
      <SearchBar
        searchForImages={searchForImages}
      />,
    );
    expect(component.find('#SearchBar').length).toBe(1);
    expect(component.find('form').length).toBe(1);
    expect(component.find('input').length).toBe(1);
    expect(component.find('button').length).toBe(1);
  });
  it('onSubmit of form calls correct searchForImages with correct value', () => {
    const component = shallow(
      <SearchBar
        searchForImages={searchForImages}
      />,
    );
    component.find('form').simulate('submit', {
      target: {
        InputBar: {
          value: 'bulldog',
        },
      },
      preventDefault: jest.fn(),
    });
    expect(searchForImages).toHaveBeenCalled();
    expect(searchForImages.mock.calls[0][0]).toBe('bulldog');
  });
  it('mapDispatchToProps dispatches the expected action', () => {
    const dispatch = jest.fn();
    const dispatched = mapDispatchToProps(dispatch);
    expect(dispatched).toHaveProperty('searchForImages');
  });
});
