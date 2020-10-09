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

const GlobalDiv = styled.div`

> di{
  display:flex;
  overflow:hidden
}
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
        location: '',
        name: '',
        number_photo: '[1]',
        photo_set: 1,
        rating: 1,
      }],
      imageURL: [1, 2, 3, 4, 5],
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

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // need to refactor here
    // const id = window.location.pathname.match(/(\d+)/)[0];
    let urlParams = new URLSearchParams(window.location.search);

    const id = urlParams.get('listing_id')
    console.log(id, "id")
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
        <GalSlider images={this.state.imageURL} />
      </Modal>
    ) : null;

    return (

      <GlobalDiv>

        <span />
        <div>
          {' '}
          <Rug />
        </div>

        <Header data={data} isSuperHost={isSuperHost} updateLike={this.updateLike} />

        <Gallery imageData={this.state.imageURL} />

        {/* {modal}
        <button onClick={this.toggleModal}> MODAL BUTTON!!!!!!</button> */}
      </GlobalDiv>

    );
  }
}

export default App;
