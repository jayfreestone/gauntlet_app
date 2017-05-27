import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchThread } from './../state/ducks/threads';
import Thread from './Thread';

// Small helper to grab the threadID from React Router params
function getID(props) {
  return props.match.params.threadID;
}

function mapStateToProps(state, ownProps) {
  return {
    data: state.threads[getID(ownProps)],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchThreadDetails: (chanID) => {
      dispatch(fetchThread(chanID));
    }
  }
}

class ThreadAsync extends Component {
  componentDidMount() {
    this.props.fetchThreadDetails(getID(this.props));
  }
  render() {
    return (
      <Thread {...this.props} />
    );
  }
}

const ThreadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  // We use withRouter to pass down router props to ownProps
)(withRouter(ThreadAsync));

export default ThreadContainer;