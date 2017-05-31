/**
 * threads
 * Responsible for fetching existing threads/thread data
 */
import assignment from 'assignment';

// Action creators
export function addThreads(data = []) {
  return {
    type: 'ADD_THREADS',
    threads: data,
  };
}

export function addFullThread(chanID, data) {
  return {
    type: 'ADD_FULL_THREAD',
    chanID,
    data,
  };
}

export function fetchThreads() {
  return (dispatch) => {
    fetch('http://localhost:8000/thread')
      .then(resp => resp.json())
      .then(data =>
        dispatch(addThreads(data)),
      );
  };
}

export function fetchThread(chanID) {
  return (dispatch) => {
    fetch(`http://localhost:8000/thread/${chanID}`)
      .then(resp => resp.json())
      .then(data =>
        dispatch(addFullThread(chanID, data)),
      );
  };
}

export default function threads(state = {}, action) {
  switch (action.type) {
    case 'ADD_THREADS':
      // Do a deep merge:
      // If we go single -> index we want to retain posts
      return assignment({}, state, action.threads);
    case 'ADD_FULL_THREAD':
      return Object.assign({}, state, {
        [action.chanID]: action.data,
      });
    default:
      return state;
  }
}
