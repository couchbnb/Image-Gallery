import React from 'react';
import styles from '../../css/container.module.css';
import LikeShare from '../LikeShare.jsx';
import styled from 'styled-components';

const Image1 = styled.img`

border-bottom-left-radius: 15px;
border-top-left-radius: 15px;
border-top-right-radius: 0px;
border-bottom-right-radius: 0x


-webkit-transition: all .5s ease;

   transition: all .5s ease;
	:hover {
    -webkit-filter: brightness(78%);
   filter: brightness(78%);
	}


`;

const Image2 = styled.img`
   transition: all .5s ease;
	:hover {
    -webkit-filter: brightness(78%);
   filter: brightness(78%);
	}

`;

const Image3 = styled.img`
   transition: all .5s ease;
	:hover {
    -webkit-filter: brightness(78%);
   filter: brightness(78%);
	}

`;

const Image4 = styled.img`

border-bottom-left-radius: 0px;
border-top-left-radius: 0px;
border-top-right-radius: 20px;
border-bottom-right-radius: 20x
transition: all .5s ease;
	:hover {
    -webkit-filter: brightness(78%);
   filter: brightness(78%);
	}


`;

const Image5 = styled.img`

border-bottom-left-radius: 0px;
border-top-left-radius: 0px;
border-top-right-radius: 0px;
border-bottom-right-radius: 20px
transition: all .5s ease;
	:hover {
    -webkit-filter: brightness(78%);
   filter: brightness(78%);
	}


`;

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
        {/* <LikeShare /> */}

         <div className={ styles.container1} ><Image1   src={data[0]} /></div>

        <div className={styles.container2}>
          <div className={styles.container3}><Image2 src={data[1]} /></div>
          <div className={styles.container3}><Image3 src={data[2]} /></div>
        </div>
        <div className={styles.container2}>
          <div className={styles.container3}><Image4 src={data[3]} /></div>
          <div className={styles.container3}><Image5 src={data[4]} /></div>
        </div>
      </div>

    );
  }
}

export default GalleryContainer;
