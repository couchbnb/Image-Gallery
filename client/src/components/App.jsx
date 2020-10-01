import React from 'react';
import axios from 'axios';

import LikeShare from './LikeShare.jsx';
import Gallery from './Gallery.jsx';
import helper from '../helper/helper.jsx';
import GalSlider from './Modal/GalSlider.jsx'


console.log(helper.imageURLGen);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      imageURL: [1, 2, 3, 4, 5],
    };
    this.getData = this.getData.bind(this);
    this.imageURLGen = this.imageURLGen.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const id = window.location.pathname.match(/(\d+)/)[0];
    axios.get(`/data/${id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .then(() => {
        this.imageURLGen();
      })
      .catch((error) => {
        console.log(error, 'we had an error on get request');
      });
  }

  imageURLGen() {
    helper.imageURLGen = helper.imageURLGen.bind(this);
    helper.imageURLGen();
  }

  render() {
    const{data,imageURL} =this.state
    return (
      <div>
        {/* <Gallery imageData={this.state.imageURL} /> */}
        <GalSlider images={imageURL} />

      </div>

    );
  }
}

export default App;
