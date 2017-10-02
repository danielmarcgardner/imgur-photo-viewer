import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Loader = ({ fetching, searchForImages, searchTerm, noImagesFound }) => {
  if (fetching === true) {
    return <div id="Loading">Loading...</div>;
  }
  if (fetching === false && noImagesFound === true) {
    return (
      <div id="NotFound">
        <img src={require('../../assets/warning-icon.svg')} alt="Cannot find search results" />
        <p>Sorry we can't find any images with that search. Please try again!</p>
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={() => searchForImages(searchTerm)}
      >
            Load More!
      </button>
    </div>
  );
};

Loader.propTypes = {
  fetching: PropTypes.bool.isRequired,
  searchForImages: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  noImagesFound: PropTypes.bool.isRequired,
};

export default Loader;
