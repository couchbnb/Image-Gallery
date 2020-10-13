import React from 'react';
import styled from 'styled-components';
import GalleryContainer from './Gallery/GalleryContainer.jsx';

const Wrapper = styled.div`
  display: inline-flex;
  object-fit: contain;

  `


function Gallery({ imageData, toggleModal }) {
  return (

    <Wrapper>
      <GalleryContainer data={imageData} toggleModal={toggleModal}/>
    </Wrapper>

  );
}

export default Gallery;
