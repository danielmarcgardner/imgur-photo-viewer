import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchForImages } from '../../redux/actions/thunks';

import SearchBar from './search-bar';

const mapStateToProps = state => ({
  searchTerm: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  searchForImages,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
