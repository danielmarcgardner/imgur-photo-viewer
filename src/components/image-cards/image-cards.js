import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../App.css';

const ImageCard = ({ image, id, history }) => (
  <div
    className="IndividualCard"
    onClick={() => history.push(`/hero/${id}`)}
  >
    <div className="ImageHeader">
      <img src={image} alt={id} className="Image" />
    </div>
  </div>
);

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ImageCard);
