import { connect } from 'react-redux';
import ImageResults from './image-results';

const mapStateToProps = state => ({
  images: state.searchResults.images,
  fetching: state.searchResults.fetching,
});

export default connect(mapStateToProps)(ImageResults);
