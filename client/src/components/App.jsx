import React from 'react';
import axios from 'axios';

import LikeShare from './LikeShare.jsx';
import Gallery from './Gallery.jsx';
import helper from '../helper/helper.jsx';
import styled from 'styled-components';
import Header from './Header.jsx'
import GalSlider from './Modal/GalSlider.jsx'
import Modal from './Modal/Modal.jsx'

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
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #484848;
    background-color: #fff;
    margin: 0;
    -webkit-font-smoothing: antialiased;
}

`
console.log(helper.imageURLGen);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{id: 0,
        is_liked: 0,
        is_super: 0,
        location: "",
        name: "",
        number_photo: "[1]",
        photo_set: 1,
        rating: 1
      }],
      imageURL: [1, 2, 3, 4, 5],
      showModal: false,
    };
    this.getData = this.getData.bind(this);
    this.imageURLGen = this.imageURLGen.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.updateLike = this.updateLike.bind(this);
  }

toggleModal(){
  this.setState({showModal:!this.state.showModal})
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

  updateLike() {
    alert("I was clicked")
    let boolNum = this.state.is_liked;
    let id = this.state.id;
    if( boolNum === 0) {
      this.setState({ is_liked : 1});
    } else {
      this.setState({ is_liked : 0});
    }
    // var params = [id, boolNum]
    // axios.get('/updateLike')
componentDidUpdate
  }

  imageURLGen() {
    helper.imageURLGen = helper.imageURLGen.bind(this);
    helper.imageURLGen();
  }

  render() {
    const {data} = this.state;
    console.log(data,"data ata ata")

    const modal = this.state.showModal ? (
      <Modal>
        <GalSlider images = {this.state.imageURL}/>
      </Modal>
    ) : null;


    return (



      <GlobalDiv>


        <span></span><div> <Rug /></div>

          <Header data={data} updateLike={this.updateLike}/>

        <Gallery imageData={this.state.imageURL} />


        {/* {modal}
        <button onClick={this.toggleModal}> MODAL BUTTON!!!!!!</button> */}
      </GlobalDiv>

    );
  }
}

export default App;
