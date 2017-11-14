import * as types from '../constants/letters';

export const reset = () => ({
  type: types.RESET,
});

export const open = details => ({
  type: types.OPEN,
  details,
});

// export const close = () => ({
//   type: types.CLOSE,
// });

export const click = details => ({
  type: types.CLICK,
  details,
});

export const timer = stopwatch => ({
  type: types.TIMER,
  stopwatch,
});

export const close = () => (
  (dispatch) => {
    // dispatch(getPeopleRequest(query));

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve('result');
      }, 1000);
    });

    return promise
      .then(() => dispatch({ type: types.CLOSE }));
  }
);
