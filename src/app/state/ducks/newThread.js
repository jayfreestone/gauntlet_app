/**
 * newThread
 * Responsible for the creation of threads
 */
import { fetchThread } from './threads';

const initialState = {
  isFetching: false,
  errors: [],
};

export function createThread(url) {
  return dispatch => {
    // Log that we're fetching...
    dispatch(isFetching(true));

    fetch('http://localhost:8000/thread', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, }),
      })
      .then(resp => resp.json())
      .then(resp => {
        /*
         Throw an error if the request is not good, since
         fetch won't do it for us
         */
        if (resp.status !== 200) {
          throw new Error(resp.message || 'Something went wrong.');
        } else {
          return resp;
        }
      })
      .then(data => {
        // If we've been returned a thread id...
        if (data.thread_id) {
          // Fetch the new full thread data
          dispatch(fetchThread(data.chan_id))
        } else {
          // Otherwise throw an error
          throw new Error(data.message || 'No thread found.');
        }
      })
      .catch(e => {
        // Log the error
        dispatch(addError(e.message));
        // Log that the fetch is over
        dispatch(isFetching(false));
      });
  };
}

export function isFetching(fetching = true) {
  return {
    type: 'NEW_THREAD_FETCHING',
    val: fetching,
  };
}

export function addError(error) {
  return {
    type: 'NEW_THREAD_FAILURE',
    message: error,
  };
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'NEW_THREAD_FETCHING':
      return Object.assign({}, state, {
        isFetching: action.val,
      });
    case 'NEW_THREAD_FAILURE':
      // Create a new array with the old errors and the new one
      const errors = [].concat(state.errors, action.message);
      console.log(errors);
      return Object.assign({}, state, { errors });
    default:
      return state;
  }
}
