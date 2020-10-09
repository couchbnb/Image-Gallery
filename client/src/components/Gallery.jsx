import React from 'react';
import styled from 'styled-components';
import GalleryContainer from './Gallery/GalleryContainer.jsx';

const Wrapper = styled.div`
  display: inline-flex;
  object-fit: contain;

  `


function Gallery({ imageData }) {
  return (

    <Wrapper>
      <GalleryContainer data={imageData} />
    </Wrapper>

  );
}

export default Gallery;
