import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';
import Image from '../client/src/components/Gallery/Image.jsx'

describe('testSuite', () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
    window.location = { match: jest.fn() };
  });

  afterAll(() => {
    window.location = location;
  });

  it('mocks `match`', () => {
    expect(jest.isMockFunction(window.location.match)).toBe(true);
  });

  it('calls `match`', () => {
    window.location.match();
    expect(window.location.match).toHaveBeenCalled();
  });

  it('mocks window.location.reload', () => {
    const { location } = window;
    delete window.location;
    window.location = { match: jest.fn() };

    expect(window.location.match).not.toHaveBeenCalled();
    window.location.match();
    expect(window.location.match).toHaveBeenCalled();
    window.location = location;
  });

  describe('App Component', () => {
    //  set up to change attribute
    const setUp = (props = {}) => {
      const component = shallow(<App />);
      return component;
    };
    // applys component to each test
    let component;
    beforeEach(() => {
      component = setUp();
    });

    describe('App Component Rendering', () => {
      it('It should Render without errors', () => {
        const wrapper = findByTestAtrr(component, 'AppComponent');
        expect(wrapper.length).toBe(1);
      });
    });
  });

  describe('Image Component', () => {
    it('It should Render without errors', () => {
      const component = shallow(<Image />);
      const wrapper = component.find('.buy_box');
      expect(wrapper.length).toBe(1);
    });
  });

});
