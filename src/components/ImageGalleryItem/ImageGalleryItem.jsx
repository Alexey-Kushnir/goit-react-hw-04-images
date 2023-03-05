import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImgGalleryItem, ImgGalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from './../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { id, smallImg, biglImg } = this.props;

    return (
      <ImgGalleryItem key={id}>
        <ImgGalleryItemImage src={smallImg} alt="" onClick={this.openModal} />
        {this.state.isModalOpen && (
          <Modal img={biglImg} closeModal={this.closeModal} />
        )}
      </ImgGalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImg: PropTypes.string.isRequired,
  biglImg: PropTypes.string.isRequired,
};
