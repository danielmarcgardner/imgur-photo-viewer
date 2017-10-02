import React from 'react';
import '../../App.css';

const Loader = ({ fetching, searchForImages, searchTerm }) => {
  if (fetching === true) {
    return <div id="Loading">Loading...</div>;
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

export default Loader;
