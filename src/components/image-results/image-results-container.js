import { connect } from 'react-redux';
import ImageResults from './image-results';

export const mapStateToProps = state => ({
  images: state.searchResults.images,
  searchTerm: state.searchResults.searchTerm,
});

export default connect(mapStateToProps)(ImageResults);
