import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImgGalleryItem, ImgGalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from './../Modal/Modal';

export const ImageGalleryItem = ({ id, smallImg, biglImg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <ImgGalleryItem key={id}>
      <ImgGalleryItemImage src={smallImg} alt="" onClick={openModal} />
      {isModalOpen && <Modal img={biglImg} closeModal={closeModal} />}
    </ImgGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImg: PropTypes.string.isRequired,
  biglImg: PropTypes.string.isRequired,
};
