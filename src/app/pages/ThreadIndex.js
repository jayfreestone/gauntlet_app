/**
 * ThreadIndex
 * Index screen for all threads
 */
import React from 'react';

const ThreadIndex = ({ threads }) => {
  return (
    <div>
      {Object.keys(threads).map(thread => (
        threads[thread].title
      ))}
    </div>
  );
};

export default ThreadIndex;