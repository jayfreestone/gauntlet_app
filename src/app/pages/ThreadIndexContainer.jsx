import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchThreads } from './../state/ducks/threads';
import ThreadIndex from './ThreadIndex';

function mapStateToProps(state) {
  return {
    threads: state.threads,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchThreads: () => {
      dispatch(fetchThreads());
    },
  };
}

// Additional wrapper to gain access to lifecycle methods
class ThreadIndexAsync extends Component {
  componentDidMount() {
    this.props.fetchThreads();
  }
  render() {
    return (
      <ThreadIndex {...this.props} />
    );
  }
}

const ThreadIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThreadIndexAsync);

export default ThreadIndexContainer;