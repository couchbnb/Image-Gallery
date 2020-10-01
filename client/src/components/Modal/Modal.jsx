import React from 'react';
const modalRoot = document,getElementByid('modal');


class Modal extends REact.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.element)

  }

  componentWillUnmount() {
    modalRoot.removeChild(this.elemnt)
  }

}