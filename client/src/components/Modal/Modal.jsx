import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../css/model.module.css';

const modalRoot = document.getElementById('modalGallery');

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
    const { children } = this.props;
    return ReactDOM.createPortal(

      children,

      this.el,
    );
  }
}

export default Modal;
