import React from 'react';

import styles from '../../css/model.module.css'

import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    let{children}=this.props;
    return ReactDOM.createPortal(

      children,

      this.el,
    );
  }
}

export default Modal;
