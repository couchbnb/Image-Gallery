import React from 'react';
import SlideImage from './SlideImage.jsx';
import styles from '../../css/model.module.css';

function SliderContent({ images, currentSlide }) {
  const imageShow = images.map((image, index) => {
    if (index === currentSlide) {
      return <SlideImage className={styles.imageDisplay} image={image} />;
    }

    // <SlideImage className={styles.imageHide}/>
  });

  return (
    <div className={styles.sliderContent}>
      {imageShow}

    </div>
  );
}

export default SliderContent;
