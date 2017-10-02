import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from './loader';
import { searchForImages } from '../../redux/actions/thunks';

const mapStateToProps = state => ({
  fetching: state.searchResults.fetching,
  searchTerm: state.searchResults.searchTerm,
  noImagesFound: state.searchResults.noImages,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  searchForImages,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
