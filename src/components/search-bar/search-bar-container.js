import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearchTerm } from '../../redux/actions/actions';
import { searchForImages } from '../../redux/actions/thunks';

import SearchBar from './search-bar';

const mapStateToProps = state => ({
  searchTerm: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateSearchTerm,
  searchForImages,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
