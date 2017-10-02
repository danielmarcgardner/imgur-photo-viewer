import React from 'react';
import '../../App.css';

const ImageCard = ({ image, score, title, tags, datetime, id }) => (
  <div className="IndividualCard">
    <div className="ImageHeader">
      <img src={image} alt={id} className="Image" />
    </div>
  </div>
);

export default ImageCard;
