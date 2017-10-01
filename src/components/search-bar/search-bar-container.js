import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchForImages } from '../../redux/actions/thunks';
import SearchBar from './search-bar';

const mapDispatchToProps = dispatch => bindActionCreators({
  searchForImages,
}, dispatch);

export default connect(null, mapDispatchToProps)(SearchBar);
