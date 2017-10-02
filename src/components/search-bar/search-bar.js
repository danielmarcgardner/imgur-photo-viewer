import React from 'react';
import '../../App.css';

const SearchBar = ({ searchForImages }) => (
  <div id="SearchBar">
    <form onSubmit={(event) => {
      event.preventDefault();
      searchForImages(event.target.InputBar.value);
    }}
    >
      <input
        type="text"
        id="InputBar"
        placeholder="Search Imgur for your favorite images"
      />
      <button>Search Imgur!</button>
    </form>
  </div>
);

export default SearchBar;
