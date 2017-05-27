/**
 * ThreadIndex
 * Index screen for all threads
 */
import React from 'react';
import ThreadThumb from './../modules/ThreadThumb';

const ThreadIndex = ({ threads }) => {
  return (
    <ul className="l-thread-index">
      {Object.keys(threads).map(thread => (
        <li key={threads[thread].chan_id}>
          <ThreadThumb
            title={threads[thread].title}
            link={`thread/${threads[thread].chan_id}`}
            id={threads[thread].chan_id}
            count={threads[thread].post_count}
          />
        </li>
      ))}
    </ul>
  );
};

export default ThreadIndex;