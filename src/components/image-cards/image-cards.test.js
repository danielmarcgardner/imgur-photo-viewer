import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ImageCard } from './image-cards';

configure({ adapter: new Adapter() });

const image = 'https://i.imgur.com/fZ8JNw4.jpg';
const id = 'fZ8JNw4';
const history = {
  push: jest.fn(),
};

describe('ImageCard', () => {
  it('Renders to page', () => {
    const component = shallow(
      <ImageCard
        image={image}
        id={id}
        history={history}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('When the ImageCard is clicked, history.push is called and with the proper url', () => {
    const component = mount(
      <ImageCard
        image={image}
        id={id}
        history={history}
      />,
    );
    component.find('.IndividualCard').simulate('click');
    expect(history.push).toHaveBeenCalled();
    expect(history.push.mock.calls[0][0]).toBe('/hero/fZ8JNw4');
  });
  it('Renders with all correct properties', () => {
    const component = mount(
      <ImageCard
        image={image}
        id={id}
        history={history}
      />,
    );

    expect(component.find('.IndividualCard').length).toBe(1);
    expect(component.find('.ImageHeader').length).toBe(1);
    expect(component.find('.Image').length).toBe(1);
  });
});
