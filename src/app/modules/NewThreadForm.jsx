import React from 'react';

const NewThreadForm = ({ onSubmit, isFetching, errorMessage }) => {
  return (
    <form action="#" onSubmit={onSubmit}>
      <input
        type="text"
        name="url"
        placeholder="Enter your Gauntlet URL"
        disabled={isFetching}
      />
      { errorMessage || '' }
    </form>
  );
};

export default NewThreadForm;