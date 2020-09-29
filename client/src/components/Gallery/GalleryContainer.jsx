import React from 'react';
import Image from './Image.jsx';
import styles from '../../css/container.module.css';

class GalleryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const imageRender = this.props.data.map((image, index) => {
      if (index > 4) {
        return;
      }
      if (index === 0) {
        console.log('it happened');
        return <div className={styles.container1}><Image URL={image} id={`img00${index}`} key={index} /></div>;
      }
      return <div><Image className={styles.container} URL={image} id={`img00${index}`} key={index} /></div>;
    });

    return (

      <div className={styles.container}>

        {imageRender}

      </div>

    );
  }
}

export default GalleryContainer;
