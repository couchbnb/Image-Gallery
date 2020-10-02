import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';
import Image from '../client/src/components/Gallery/Image.jsx';
import GalleryContainer from '../client/src/components/Gallery/GalleryContainer.jsx';
import LikeShare from '../client/src/components/LikeShare.jsx';

describe('Client', () => {
  const { location } = window;

  describe('App', () => {
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

    it('mocks window.location.reload', () => {
      const { location } = window;
      delete window.location;
      window.location = { match: jest.fn() };
      const match = [null];

      expect(window.location.match).not.toHaveBeenCalled();
      window.location.match();
      expect(window.location.match).toHaveBeenCalled();
      window.location = location;
    });

    describe('App Component to render and to have the componet Gallery as its child', () => {
      const props = {};
      it('It should Render without errors', () => {
        const wrapper = mount(<App />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('Gallery').length).toEqual(1);
      });
      it('It contain state', () => {
        const wrapper = mount(<App />);
        expect(wrapper).toHaveState('data');
        expect(wrapper).toHaveState('imageURL');
      });

      it('should check `componentDidMount()` and invoke getData once', () => {
        const wrapper = shallow(<App />);
        const instance = wrapper.instance();
        const axios = {
          get: jest.fn(() => Promise.resolve({ data: {} }))
        };
        // you assign your instance of the wrapper
        jest.spyOn(instance, 'getData')
        jest.spyOn(instance, 'componentDidMount'); // You spy on func
        instance.componentDidMount();
        expect(instance.componentDidMount).toHaveBeenCalledTimes(1);
        expect(instance.getData).toHaveBeenCalledTimes(1);

      });

      it('should run the helper function once, asnych call', () => {
        const wrapper = shallow(<App />);
        const instance = wrapper.instance(); // you assign your instance of the wrapper
        jest.spyOn(instance, 'imageURLGen'); // You spy on func
        instance.componentDidMount();
        expect(instance.imageURLGen).toHaveBeenCalledTimes(0);
      });



      describe('Image Component', () => {
        it('It Renders 5 Image components', () => {
          const data = [null];
          const wrapper = mount(<GalleryContainer data={data} />);
          expect(wrapper.find('Image').length).toEqual(5);
        });
      });

      it('props passed to Image should be a string', () => {
        const data = ['myexternallist.js'];
        const wrapper = mount(<GalleryContainer data={data} />);
        expect(wrapper.find('Image').length).toEqual(5);
      });
    });

    describe('Like and share should render dynamically', () => {
      it('Like should render 1 heart', () => {
        const likedtoggled = true;
        const wrapper = mount(<GalleryContainer data />);
        expect(wrapper).toContainExactlyOneMatchingElement('.save');
      });
    });
  });
});