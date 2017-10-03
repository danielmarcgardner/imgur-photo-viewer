import React from 'react';
import PropTypes from 'prop-types';
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


HeroImage.propTypes = {
  heroImage: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    score: PropTypes.number.isRequired,
    datetime: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default HeroImage;
