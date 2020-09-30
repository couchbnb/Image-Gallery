import React from 'react';
import Image from './Image.jsx';
import styles from '../../css/container.module.css';

class GalleryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
    };
  }

  render() {
    return (

      <div className={styles.container}>
        <div className={styles.container1}><Image URL={this.props.data[0]} /></div>
        <div className={styles.container2}>
          <div className={styles.container3}><Image URL={this.props.data[1]} /></div>
          <div className={styles.container3}><Image URL={this.props.data[2]} /></div>
        </div>
        <div className={styles.container2}>
          <div className={styles.container3}><Image URL={this.props.data[3]} /></div>
          <div className={styles.container3}><Image URL={this.props.data[4]} /></div>
        </div>
      </div>

    );
  }
}

export default GalleryContainer;
