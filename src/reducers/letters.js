import * as types from '../constants/letters';
import vectorToMatrix from '../lib/vectorToMatrix';
import genAlphabet from '../lib/alphabet';
import shuffle from '../lib/shuffle';

const reset = () => {
  const letters = genAlphabet(10);
  const vector = shuffle([...letters, ...letters]).map((val, i) => ({
    val,
    id: i,
    display: false,
    open: false,
  }));

  return {
    matrix: vectorToMatrix(vector),
    clicked: [],
    counter: 0,
    win: false,
    stopwatch: {
      min: 0,
      sec: 0,
    },
  };
};

const compare = (cur, prev) => (
  cur.val === prev.val
      && cur.id !== prev.id
);

const openItem = (matrix, cur) => matrix.map(arr =>
  arr.map((item) => {
    if (item.id === cur.id) item.open = true;
    return item;
  }));

const closeItems = (matrix, counter) => {
  if (counter % 2 !== 0) {
    return matrix;
  }

  return matrix.map(arr =>
    arr.map((item) => {
      item.open = false;
      return item;
    }));
};

const displayItems = (matrix, cur) => matrix.map(arr =>
  arr.map((item) => {
    if (item.val === cur.val) item.display = true;
    return item;
  }));

const shouldBeOpen = (cur, clicked) => {
  if (cur.display) return false;
  if (cur.open) return false;
  if (
    clicked.length >= 2
      && clicked[0].id !== clicked[1].id
      && clicked[0].open
      && clicked[1].open
  ) return false;

  return true;
};

const winCheck = (matrix) => {
  let win = true;
  matrix.forEach(arr =>
    arr.forEach((item) => {
      if (item.display === false) win = false;
    }));
  return win;
};

const click = (state, action) => {
  if (!shouldBeOpen(action.details, state.clicked)) {
    return state;
  }

  const counter = state.counter + 1;
  const clicked = [action.details, ...state.clicked];
  let matrix = openItem(state.matrix, action.details);
  let win = false;

  if (
    counter % 2 === 0
      && compare(action.details, state.clicked[0])
  ) {
    matrix = displayItems(matrix, action.details);
    if (winCheck(matrix)) win = true;
  }

  return {
    counter,
    clicked,
    matrix,
    win,
    stopwatch: state.stopwatch,
  };
};

const initialState = reset();

const main = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET:
      return reset();
    case types.CLICK:
      return click(state, action);
    case types.CLOSE:
      return { ...state, matrix: closeItems(state.matrix, state.counter) };
    case types.TIMER:
      return { ...state, stopwatch: action.stopwatch };
    default:
      return state;
  }
};

export default main;
