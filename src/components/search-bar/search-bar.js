import React from 'react';
import '../../App.css';

const SearchBar = props => (
  <div id="SearchBar">
    <input
      type="text"
      id="InputBar"
      placeholder="Search Imgur for your favorite images"
      onChange={event => console.log(event.target.value)}
    />
    <button id="SubmitButton"> Search Imgur!</button>
  </div>
);

export default SearchBar;
