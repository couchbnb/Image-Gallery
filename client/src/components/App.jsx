import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import LikeShare from './LikeShare.jsx';
import Gallery from './Gallery.jsx';
import helper from '../helper/helper.jsx';
import Header from './Header.jsx';
import GalSlider from './Modal/GalSlider.jsx';
import Modal from './Modal/Modal.jsx';

const Rug = styled.div`
height: 71px !important;
width: 1180px!important;
display:flex;
justify-content:center;
background-image: url("rug.png");
`;

const Wrapper = styled.div`

position: absolute;
display: flex;
overflow: visible;
flex-shrink: 1 2 auto;
`


const GlobalDiv = styled.div`

width: auto;
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
    overflow: hidden;

}
}

`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: 0,
        is_liked: 0,
        is_super: 0,
        location: 'San Francisco, California, United States of America',
        name: 'The House Near St Marys',
        number_photo: '[1,2,3,4,5,6,7]',
        photo_set: 1,
        rating: 1,
      }],
      imageURL: [
        "https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-11.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-8.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-5.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-7.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-0.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-12.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-14.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-4.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-3.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-15.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-6.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-1.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-13.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-2.png","https://couchbnb-photo.s3-us-west-1.amazonaws.com/006/6-undefined.png"],
      showModal: false,
      isSuperHost: 0,
      listingId: 0,
    };
    this.getData = this.getData.bind(this);
    this.imageURLGen = this.imageURLGen.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.updateLike = this.updateLike.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    this.setState({ showModal: !this.state.showModal });
    console.log("toggle happened")

  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // un comment for development final url path http://localhost:3061/listing/10/
    // const id = window.location.pathname.match(/(\d+)/)[0];
    //un comment for deployment very important
    let urlParams = new URLSearchParams(window.location.search);
     const id = urlParams.get('listing_id');


    console.log(id, "id that is hit")
    axios.get(`/data/${id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .then(() => {
        this.imageURLGen();
        this.setState({
          isSuperHost: this.state.data[0].is_super,
          listingId: this.state.data[0].id,
        });
      })
      .catch((error) => {
        console.log(error, 'we had an error on get request');
      });
  }

  updateLike() {
    const boolNum = this.state.isSuperHost;
    const { id } = this.state;
    if (boolNum === 0) {
      this.setState({ isSuperHost: 1 });
      this.submitUpdate({ id: this.state.listingId, is_liked: 1 });
    } else {
      this.setState({ isSuperHost: 0 });
      this.submitUpdate({ id: this.state.listingId, is_liked: 0 });
    }
    // var params = [id, boolNum]
    // axios.get('/updateLike')
  }

  submitUpdate(params) {
    axios.patch('/data/update', params)
      .then((results) => {
        console.log(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  imageURLGen() {
    helper.imageURLGen = helper.imageURLGen.bind(this);
    helper.imageURLGen();
  }

  render() {
    const { data, isSuperHost } = this.state;

    const modal = this.state.showModal ? (
      <Modal>
        <GalSlider images={this.state.imageURL} toggleModal={this.toggleModal}/>
      </Modal>
    ) : null;

    return (
<Wrapper>
      <GlobalDiv>

        <span />
        <div>
          {' '}
          <Rug />
        </div>

        <Header data={data} isSuperHost={isSuperHost} updateLike={this.updateLike} />

        <Gallery imageData={this.state.imageURL} toggleModal={this.toggleModal}/>

        {modal}
      </GlobalDiv>
      </Wrapper>
    );
  }
}

export default App;
