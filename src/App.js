import React from 'react';
import './App.css';
import SearchBar from './components/search-bar/search-bar-container';
import NavBar from './components/nav-bar/nav-bar';
import ImageResults from './components/image-results/image-results-container';

const App = () => (
  <div>
    <NavBar />
    <SearchBar />
    <ImageResults />
  </div>
);

export default App;
