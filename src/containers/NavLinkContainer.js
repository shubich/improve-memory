import { connect } from 'react-redux';
import NavLink from '../components/NavLink';
import changePlace from '../actions/main';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  place: state.main.place,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => {
    dispatch(changePlace(ownProps.to));
  },
});

const NavLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavLink);

export default NavLinkContainer;
