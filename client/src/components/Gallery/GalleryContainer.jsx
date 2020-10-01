import React from 'react';
import Image from './Image.jsx';
import styles from '../../css/container.module.css';
import LikeShare from '../LikeShare.jsx'
class GalleryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
const {data} = this.props
    return(

      <div className={styles.container}>
        <LikeShare />
        <div className={styles.container1}><Image URL={data[0]} /></div>
        <div className={styles.container2}>
          <div className={styles.container3}><Image URL={data[1]} /></div>
          <div className={styles.container3}><Image URL={data[2]} /></div>
        </div>
        <div className={styles.container2}>
          <div className={styles.container3}><Image URL={data[3]} /></div>
          <div className={styles.container3}><Image URL={data[4]} /></div>
        </div>
      </div>

    );
  }
}

export default GalleryContainer;
