import React from 'react';

const MetaList = ({ meta }) => {
  // Workaround to avoid adding an invalid surrounding tag
  function createMeta(m) {
    return [
      <dt className="meta-list__title">{m.title}</dt>,
      <dd className="meta-list__info">{m.info}</dd>
    ];
  }

  return (
    <dl className="meta-list">
      {meta.map(m => ( createMeta(m) ))}
    </dl>
  );
};

export default MetaList;