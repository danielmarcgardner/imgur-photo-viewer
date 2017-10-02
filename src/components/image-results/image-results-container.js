import { connect } from 'react-redux';
import ImageResults from './image-results';

const mapStateToProps = state => ({
  images: state.searchResults.images,
  searchTerm: state.searchResults.searchTerm,
});

export default connect(mapStateToProps)(ImageResults);
