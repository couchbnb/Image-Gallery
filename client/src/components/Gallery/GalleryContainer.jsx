import React from 'react';
import Image from './Image.jsx';

class GalleryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const imageRender = this.props.data.map((image,index) => (
      <div>
        <Image URL={image} id={"img00"+index} key={index}/>

      </div>
    ));

    return (
      <div>
        <h1>Gallery container</h1>
        {imageRender}
      </div>
    );
  }
}

export default GalleryContainer;
