import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow, Image } from './Modal.styled';

export const Modal = ({ img, closeModal }) => {
  useEffect(() => {
    const pressKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', pressKeyDown);

    return () => {
      window.removeEventListener('keydown', pressKeyDown);
    };
  }, [closeModal]);

  const backdropClick = e => {
    if (e.target.nodeName === 'DIV') {
      closeModal();
    }
  };

  return (
    <Overlay onClick={backdropClick}>
      <ModalWindow>
        <Image src={img} alt="" />
      </ModalWindow>
    </Overlay>
  );
};

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
