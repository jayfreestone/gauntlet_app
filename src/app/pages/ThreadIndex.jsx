/**
 * ThreadIndex
 * Index screen for all threads
 */
import React from 'react';
import { Link } from 'react-router-dom';

const ThreadIndex = ({ threads }) => {
  return (
    <div>
      <ul>
        {Object.keys(threads).map(thread => (
          <li key={threads[thread].chan_id}>
            <Link to={`thread/${threads[thread].chan_id}`}>
              {threads[thread].title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadIndex;