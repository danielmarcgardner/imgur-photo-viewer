import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/search-bar/search-bar-container';
import NavBar from './components/nav-bar/nav-bar';
import ImageResults from './components/image-results/image-results-container';
import HeroImage from './components/hero-image/hero-image-container';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={SearchBar} />
      <Route exact path="/" component={ImageResults} />
      <Route path="/hero/:id" component={HeroImage} />
    </div>
  </BrowserRouter>
);

export default App;
