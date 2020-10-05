import React from 'react';

import styled from 'styled-components';
import styles from '../../css/model.module.css';

const ImageSlide = styled.img`
  object-fit: contain;
  justify-content: center;
  translate: 0;
  transition: 1;
  height: auto;
  width: auto%;
  top: 50%;
  align-items: center;
  justify-content: center;

  img[fade='1'] {
  animation: fade 1s 1;
    }
  }

  @keyframes fade {
  0%   { opacity: 0; }
  11.11%   { opacity: 1; }
  33.33%  { opacity: 1; }
  44.44%  { opacity: 0; }
  100% { opacity: 0; }
}

img{
    opacity:0;
    animation-name: fade;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    position:absolute;
    left:0;
    right:0;
}
`;

const ImageContainer = styled.div`
width: 750px;
height: 700px;
justify-content: center;

`;

const DisplayCounter = styled.div`
position:absolute;
  display: flex;
  width: auto;
  height: auto;
  text-align: center;
  background-color: white;
  top: 5%;
 right: 50%;
 font-weight: 450;
line-height:18px;
font-size: 14px;
`;

const CloseBtn = styled.button`
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
font-weight: 450;
line-height:18px;
border: 1px solid black;
  top: 5%;
 left: 5%;


  font-size: 14px;
  padding: 7px 15px;

  cursor: pointer;
  border-radius: 8px;
  position: absolute;
  width: 100px;
  height:33px;
  -webkit-font-smoothing: antialiased;
}
`;

const Arrows = styled.button`
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
font-weight: 450;
line-height:18px;
border: 1px solid black;
  top: 50%;
 left: ${(props) => (props.direction ? '92%' : '8%')};
 align-content: center;
 position: absolute;
  img{
    top: 50%;
    position: absolute;
    top: 0px;
    left: 10%;
    display: block;
    margin-left: auto;
    margin-right: auto

  }

  font-size: 14px;
  padding: 15px 15px;
  text:center;

  cursor: pointer;
  border-radius: 50%;


  -webkit-font-smoothing: antialiased;
}
`;

function SliderContent({
  images, currentSlide, decromentCounter, incromentCounter,
}) {
  const [fade, setFade] = React.useState(0);

  // <SlideImage className={styles.imageHide}/>

  return (

    <dic>
      <Arrows direction={false} onClick={decromentCounter}>
        {' '}
        <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-left.png" />
        {' '}
      </Arrows>
      <CloseBtn>XCloseme</CloseBtn>
      <DisplayCounter>
        {' '}
        { `${currentSlide} / ${images.length}` }
      </DisplayCounter>
      <ImageContainer>
        <ImageSlide
          src={images[currentSlide]}
          onClick={() => setFade(1)}
          onAnimationEnd={() => setFade(0)}
          fade={fade}
        />
      </ImageContainer>
      <Arrows direction onClick={incromentCounter}>
        {' '}
        <img src="https://img.icons8.com/material/24/000000/chevron-right--v1.png" />
      </Arrows>
    </dic>
  );
}

export default SliderContent;
