const helper = {

  imageURLGen() {
    const imageUrlArr = [];
    const data = this.state.data[0];
    const photoSet = data.photo_set;
    const photoNum = data.number_photo;
    console.log(photoNum, photoSet);

    for (let i = 1; i <= photoNum; i += 1) {
      imageUrlArr.push(`https://couchbnb-photo.s3-us-west-1.amazonaws.com/00${photoSet}/${photoSet}-${i}.png`);
    }

    this.setState({ imageURL: imageUrlArr });
  },

};
export default helper;
