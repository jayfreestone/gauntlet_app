/**
 * Thread
 * The single thread view
 */
import React from 'react';
import Summary from './../modules/Summary';
import u from './../utilities/_utiliy';

const Thread = ({ data }) => {
  if (data && data.posts) {
    return (
      <article>
        <Summary
          title={data.title}
          subtitle={`#${data.chan_id}`}
          summary={data.posts[0].body}
          meta={[
            {
              title: 'Board',
              info: data.board,
            },
            {
              title: 'Images',
              info: data.posts.length,
            },
            {
              title: 'Date',
              info: u.date(data.timestamp),
            },
          ]}
        />
        <ol className="l-gallery">
          {data.posts.map(post => (
            <li key={post.post_id} className="l-gallery__item">
              <img data-src={data.img_root + post.img} alt="" className="lazyload thumb" />
            </li>
          ))}
        </ol>
      </article>
    );
  }

  return <div>Loading...</div>;
};

export default Thread;