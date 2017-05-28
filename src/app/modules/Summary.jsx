/**
 * Summary
 * A summary of a thread
 */

import React from 'react';
import MetaList from './MetaList';

const Summary = ({ title, subtitle, summary, meta }) => {
  return (
    <header className="summary">
      <img className="summary__img thumb" src="https://gauntlet-images.s3-us-west-1.amazonaws.com/2074175/1494819189407.jpg" alt=""/>
      <div className="summary__snippet">
        <h1 className="summary__title">{title}</h1>
        <span className="summary__subtitle">{subtitle}</span>
        <div dangerouslySetInnerHTML={{__html: summary}} />
        <button className="btn btn--primary">Play now</button>
        <button>Flag as inappropriate</button>
      </div>
      <div className="summary__meta">
        <MetaList meta={meta} />
      </div>
    </header>
  );
};

export default Summary;