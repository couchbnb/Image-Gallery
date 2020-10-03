import React from 'react';
import axios from 'axios';

import LikeShare from './LikeShare.jsx';
import Gallery from './Gallery.jsx';
import helper from '../helper/helper.jsx';
import styled from 'styled-components';
import Header from './Header.jsx'

const Rug = styled.div`
height: 71px !important;
width: 1180px!important;
display:flex
justify-content:center;
background-image: url("rug.png");
`

const GlobalDiv = styled.div`

display: grid;
background-color: #ffffff;
font-family: "Times New Roman", Times, serif;
position: relative;
z-index: 5;
}

`
console.log(helper.imageURLGen);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{id: 15,
        is_liked: 1,
        is_super: 1,
        location: "",
        name: "Bobs place",
        number_photo: "[1]",
        photo_set: 6,
        rating: 2
      }],
      imageURL: [1, 2, 3, 4, 5],
    };
    this.getData = this.getData.bind(this);
    this.imageURLGen = this.imageURLGen.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // need to refactor here
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
    const {data} = this.state;
    console.log(data,"data ata ata")
    return (



      <GlobalDiv>


        <span></span><div> <Rug /></div>

          <Header data={data}/>

        <Gallery imageData={this.state.imageURL} />

      </GlobalDiv>

    );
  }
}

export default App;
