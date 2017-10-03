import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Loader = ({ fetching, searchForImages, searchTerm, noImagesFound, error }) => {
  if (fetching === true) {
    return <div id="Loading">Loading...</div>;
  }
  if (fetching === false && noImagesFound === true) {
    return (
      <div className="NotFound">
        <img src={require('../../assets/warning-icon.svg')} alt="Cannot find search results" />
        <p>Sorry we can't find any more images with that search. Please try a new search!</p>
      </div>
    );
  }
  if (error === true && fetching === false) {
    return (
      <div className="NotFound">
        <img src={require('../../assets/warning-icon.svg')} alt="Error Occured" />
        <p>Sorry an unexpected error has occured. Please try a new search!</p>
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
  error: PropTypes.bool.isRequired,
};

export default Loader;
