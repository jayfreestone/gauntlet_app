/**
 * threads
 * Responsible for fetching existing threads/thread data
 */
import assignment from 'assignment';

const initialState = {};

export function fetchThreads() {
  return dispatch => {
    fetch('http://localhost:8000/thread')
      .then(resp => resp.json())
      .then(data =>
        dispatch(addThreads(data))
      );
  };
}

export function fetchThread(chanID) {
  return (dispatch) => {
    // const threadState = getState().threads;

    // If we don't have the full data set
    // if (threadState[chanID] === undefined ||
    //     threadState[chanID].posts === undefined) {
      fetch(`http://localhost:8000/thread/${chanID}`)
        .then(resp => resp.json())
        .then(data =>
          dispatch(addFullThread(chanID, data))
        );
    // }
  };
}

export function addThreads(threads = []) {
  return {
    type: 'ADD_THREADS',
    threads,
  };
}

export function addFullThread(chanID, data) {
  console.log(data.posts.length);
  return {
    type: 'ADD_FULL_THREAD',
    chanID,
    data,
  };
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
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