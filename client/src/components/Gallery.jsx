import React from 'react';

import GalleryContainer from './Gallery/GalleryContainer.jsx';

function Gallery(props) {
  return (

    <div>
      <GalleryContainer data={props.imageData} />
    </div>

  );
}

export default Gallery;
