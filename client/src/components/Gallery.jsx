import React from 'react';

import GalleryContainer from './Gallery/GalleryContainer.jsx';

function Gallery({imageData}) {

  return (

    <div>
      <GalleryContainer data={imageData} />
    </div>

  );
}

export default Gallery;
