import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled.jsx';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryList>
      {items.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            smallImg={webformatURL}
            biglImg={largeImageURL}
          />
        );
      })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};
