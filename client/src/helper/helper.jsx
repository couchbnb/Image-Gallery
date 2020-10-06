const helper = {

  imageURLGen() {
    const imageUrlArr = [];
    const data = this.state.data[0];
    const photoSet = data.photo_set;
    const photoNum = JSON.parse(data.number_photo);

    for (let i = 1; i < photoNum.length; i += 1) {
      imageUrlArr.push(`https://couchbnb-photo.s3-us-west-1.amazonaws.com/00${photoSet}/${photoSet}-${photoNum[i+1]}.png`);
    }
    this.setState({ imageURL: imageUrlArr });
  },

};
export default helper;
