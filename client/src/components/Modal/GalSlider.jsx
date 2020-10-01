import React from 'react';
import styles from '../../css/model.module.css'
import SliderContent from './SliderContent.jsx'
import Arrow from './Arrows.jsx'
class GalSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currentSlide: 1,
      imageURL: []
  };

  }

  render() {
    const{images}=this.props;
    const{currentSlide}=this.state
    return (
      <div className={styles.galSlider}>
        <Arrow direction={false} />
        <SliderContent images={images} currentSlide={currentSlide}/>
        <Arrow direction={true} />

      </div>
    );
  }
}

export default GalSlider;