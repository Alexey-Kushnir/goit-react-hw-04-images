import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow, Image } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.pressKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.pressKeyDown);
  }

  backdropClick = e => {
    if (e.target.nodeName === 'DIV') {
      this.props.closeModal();
    }
  };

  pressKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.backdropClick}>
        <ModalWindow>
          <Image src={this.props.img} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
