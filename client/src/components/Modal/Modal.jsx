import React from 'react';
import styles from '../../css/model.module.css'
const modalRoot = document,getElementByid('modal');


class Modal extends REact.Component {
  constructor(props) {
    super(props);
    // creates like a sturctire to mount to the dom with children
    this.element = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.element)

  }

  componentWillUnmount() {
    modalRoot.removeChild(this.elemnt)
  }

};

// initial modal set up