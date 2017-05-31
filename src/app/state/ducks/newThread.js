/**
 * newThread
 * Responsible for the creation of threads
 */

import { combineReducers } from 'redux';
import { fetchThread } from './threads';

// Action creators
export function newThreadRequest() {
  return {
    type: 'NEW_THREAD_REQUEST',
  };
}

export function newThreadFailure(message) {
  return {
    type: 'NEW_THREAD_FAILURE',
    message,
  };
}

export function newThreadSuccess() {
  return {
    type: 'NEW_THREAD_SUCCESS',
  };
}

// Async actions
export function createThread(url) {
  return dispatch => {
    // Log that we're fetching...
    dispatch(newThreadRequest());

    fetch('http://localhost:8000/thread', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    })
      .then((resp) => {
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
      .then(resp => resp.json())
      .then((data) => {
        // If we've been returned a thread id...
        if (data.thread_id) {
          dispatch(newThreadSuccess());
          // Fetch the new full thread data
          dispatch(fetchThread(data.chan_id));
        } else {
          // Otherwise throw an error
          throw new Error(data.message || 'No thread found.');
        }
      })
      .catch((e) => {
        // Log the error
        dispatch(newThreadFailure(e.message));
      });
  };
}

// Reducers
export function isFetching(state = false, action) {
  switch (action.type) {
    case 'NEW_THREAD_REQUEST':
      return true;
    case 'NEW_THREAD_SUCCESS':
    case 'NEW_THREAD_FAILURE':
      return false;
    default:
      return state;
  }
}

export function errorMessage(state = null, action) {
  switch (action.type) {
    case 'NEW_THREAD_REQUEST':
    case 'NEW_THREAD_SUCCESS':
      return null;
    case 'NEW_THREAD_FAILURE':
      return action.message;
    default:
      return state;
  }
}

// Exported reducer
export default combineReducers({
  errorMessage,
  isFetching,
});
