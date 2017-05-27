import React from 'react';

const NewThreadForm = ({ onSubmit, isFetching, errors }) => {
  return (
    <form action="#" onSubmit={onSubmit}>
      <input
        type="text"
        name="url"
        placeholder="Enter your Gauntlet URL"
        disabled={isFetching}
      />
      { errors ? errors.map(error => (
       <p>{error}</p>
      )) : '' }
    </form>
  );
};

export default NewThreadForm;