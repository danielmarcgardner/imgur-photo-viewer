import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../App.css';

const ImageCard = ({ image, id, history }) => (
  <div className="IndividualCard" onClick={() => history.push(`/hero/${id}`)}>
    <div className="ImageHeader">
      <img src={image} alt={id} className="Image" />
    </div>
  </div>
);

export default withRouter(ImageCard);
