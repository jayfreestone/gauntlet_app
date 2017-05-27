/**
 * Thread
 * The single thread view
 */
import React from 'react';

const Thread = ({ data }) => {
  if (data && data.posts) {
    return (
      <div>
        <h1>Thread: {data.chan_id}</h1>
        <ol>
          {data.posts.map(post => (
            <li key={post.post_id}>
              <img data-src={data.img_root + post.img} alt="" className="lazyload" />
              {post.body}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default Thread;