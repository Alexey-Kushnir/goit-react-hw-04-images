import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow, Image } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    const { closeModal } = this.props;

    if (e.target.nodeName === 'DIV') {
      closeModal();
    }
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.closeModal}>
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
