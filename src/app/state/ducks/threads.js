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

export function addThreads(threads = []) {
  return {
    type: 'ADD_THREADS',
    threads
  };
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_THREADS':
      break;
    case 'ADD_THREADS':
      return Object.assign({}, state, action.threads);
      break;
    default:
      return state;
  }
}