import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Letters from '../components/Letters';
import { reset, click, close, timer } from '../actions/letters';

const mapStateToProps = state => ({
  ...state.letters,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  reset,
  click,
  close,
  timer,
}, dispatch);

const LettersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Letters);

export default LettersContainer;
