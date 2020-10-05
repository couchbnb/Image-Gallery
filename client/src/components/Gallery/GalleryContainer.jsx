import React from 'react';
import styled from 'styled-components';
import styles from '../../css/container.module.css';
import LikeShare from '../LikeShare.jsx';

const Container = styled.div`
 display: flex;
    /* background-color: grey; */
    justify-content: flex-start;
    overflow: hidden;
    flex-wrap: nowrap;
    width: 1303px;
    flex: 0 1 auto;
    min-width: 500px;
    max-height: 540px;
    min-height: 250px

`;

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
border-bottom-right-radius: 0px;
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
border-bottom-right-radius: 20px;
transition: all .5s ease;
	:hover {
    -webkit-filter: brightness(78%);
   filter: brightness(78%);
	}
`;
const ShowAllBttn = styled.button `
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
font-weight: 450;
line-height:18px;
border: 1px solid black;
  top: 70%;
 right: 10%;


  font-size: 14px;
  padding: 7px 15px;

  cursor: pointer;
  border-radius: 8px;
  position: absolute;
  width: 135px;
  height:33px;
  -webkit-font-smoothing: antialiased;
}
`

class GalleryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const { data } = this.props;
    return (

      <Container>

        {/* <LikeShare /> */}

        <div className={styles.container1}><Image1 src={data[0]} /></div>

        <div className={styles.container2}>
          <div className={styles.container3}><Image2 src={data[1]} /></div>
          <div className={styles.container3}><Image3 src={data[2]} /></div>
        </div>
        <div className={styles.container2}>
          <div className={styles.container3}><Image4 src={data[3]} /></div>
          <div className={styles.container3}><Image5 src={data[4]} /><ShowAllBttn>Show all photos</ShowAllBttn></div>

        </div>

      </Container>
    );
  }
}

export default GalleryContainer;
