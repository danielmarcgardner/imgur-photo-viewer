import React from 'react';
import '../../App.css';

const HeroImage = ({ heroImage, history }) => (
  <div>
    <div id="HeroImageContainer">
      <div id="HeroImageHeader">
        <img src={heroImage.image} alt="HeroImage" id="HeroImage" />
      </div>
      <p id="HeroTitle">{heroImage.title}</p>
      <p>{heroImage.tags.length > 0 ? `Tags: ${heroImage.tags.join(', ')}` : 'Tags: None :('}</p>
      <p>{`Score: ${heroImage.score}`}</p>
      <p>{`Date: ${heroImage.datetime}`}</p>
    </div>
    <button onClick={() => history.push('/')}>
    Back To Image Gallery
    </button>
  </div>
);

export default HeroImage;
