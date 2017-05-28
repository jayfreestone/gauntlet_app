/**
 * ThreadThumb
 * A mini thumbnail preview, for use in a grid/index
 **/
import React from 'react';
import { Link } from 'react-router-dom';
import lazySizes from 'lazysizes';

const ThreadThumb = ({ title, link, id, count }) => {
  return (
    <article className="thread-thumb">
      <Link to={link} className="thumb thread-thumb__img">
        <img
          data-src="https://gauntlet-images.s3-us-west-1.amazonaws.com/2074175/1494821539152.jpg"
          data-sizes="auto"
          className="lazyload"
          alt=""
        />
      </Link>
      <div className="thread-thumb__title">
        <h3 className="thread-thumb__name">
          <Link to={link}>
            {title}
          </Link>
        </h3>
        <span className="thread-thumb__count">
          ({count})
        </span>
      </div>
      <span className="thread-thumb__subtitle">
        #{id}
      </span>
    </article>
  );
};

export default ThreadThumb;