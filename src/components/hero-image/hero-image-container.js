import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeroImage from './hero-image';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const heroImage = state.searchResults.images.filter(image => image.id === id);
  return {
    heroImage: heroImage[0],
  };
};

export default connect(mapStateToProps)(withRouter(HeroImage));
