import { connect } from 'react-redux';
import serialize from 'form-serialize';
import NewThreadForm from './NewThreadForm';
import { createThread } from './../state/ducks/newThread';

const mapStateToProps = ({ newThread }) => {
  return {
    isFetching: newThread.isFetching,
    errors: newThread.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      /*
       Convert the form data to JSON.
       Better than using a ref with an inline arrow function,
       and less intensive than a controlled component
       */
      const data = serialize(e.currentTarget, { hash: true });

      // If we don't have a URL, exit out
      if (!data.url) return;

      // Otherwise, shoot off the createThread action with the URL
      dispatch(createThread(data.url));
    },
  };
};

const NewThreadFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewThreadForm);

export default NewThreadFormContainer;
