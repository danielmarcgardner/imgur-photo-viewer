import React from 'react';
import renderIf from 'render-if';
import PropTypes from 'prop-types';
import '../../App.css';
import ImageCard from '../image-cards/image-cards';
import Loader from '../loader/loader-container';

const ImageResults = ({ images, searchTerm }) => (
  <div id="ImageResults">
    {images.map(image => (
      <ImageCard
        image={image.image}
        id={image.id}
        key={image.id}
      />
    ))
    }
    <div id="LoadMoreDiv">
      {renderIf(searchTerm !== '' || images.length !== 0)(
        <Loader />,
      )}
    </div>
  </div>
);

ImageResults.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default ImageResults;
