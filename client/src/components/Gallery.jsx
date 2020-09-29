import React from 'react';

import GalleryContainer from './Gallery/GalleryContainer.jsx';

function Gallery(props) {

  return (

      <div>
        <h1>Gallery</h1>
        <GalleryContainer data={props.imageData}  />
      </div>

  );
}

export default Gallery;
