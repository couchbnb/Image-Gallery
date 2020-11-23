import React from 'react';
import styled from 'styled-components';
import styles from '../../css/model.module.css';
import SliderContent from './SliderContent.jsx';
import Arrow from './Arrows.jsx';
// has some animations information here
const GallerySLider = styled.div`
  align-items: center!important;
  justify-content: center !important;
  -webkit-box-direction: normal !important;
  -webkit-box-orient: vertical !important;
  background: rgb(255, 255, 255) !important;
  position: relative !important;
  height: 1200px !important;
  max-height: 100% !important;
  width: 100vw !important;
  max-width: 100vw !important;
  display: flex !important;
  flex-direction: row !important;
  animation-duration: 400ms !important;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

class GalSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currentSlide: 1,
      imageURL: [],
    };
    this.incromentCounter = this.incromentCounter.bind(this);
    this.decromentCounter = this.decromentCounter.bind(this);
  }

  incromentCounter(event) {
    event.preventDefault();
    const { currentSlide } = this.state;
    this.setState({ currentSlide: (currentSlide +1)});
  }

  decromentCounter(event) {
    event.preventDefault();
    let { currentSlide } = this.state;
    this.setState({ currentSlide: (currentSlide - 1) });
  }

  render() {
    const { images, toggleModal } = this.props;
    const { currentSlide } = this.state;
    return (
      <GallerySLider>
        <SliderContent images={images} toggleModal={toggleModal} currentSlide={currentSlide} decromentCounter={this.decromentCounter} incromentCounter={this.incromentCounter} />
      </GallerySLider>
    );
  }
}

export default GalSlider;
