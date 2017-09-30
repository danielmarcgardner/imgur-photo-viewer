import React from 'react';
import '../../App.css';

const SearchBar = ({ updateSearchTerm, searchTerm, searchForImages }) => (
  <div id="SearchBar">
    <input
      type="text"
      id="InputBar"
      placeholder="Search Imgur for your favorite images"
      onChange={event => updateSearchTerm(event.target.value)}
    />
    <button id="SubmitButton" onClick={() => searchForImages(searchTerm)}> Search Imgur!</button>
  </div>
);

export default SearchBar;
