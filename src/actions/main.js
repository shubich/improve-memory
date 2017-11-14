import { CHANGE_PLACE } from '../constants/main';

const changePlace = place => ({
  type: CHANGE_PLACE,
  place,
});

export default changePlace;
