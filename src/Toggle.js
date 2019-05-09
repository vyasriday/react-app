/* eslint-disable no-shadow */
import React from 'react';
// Inside the component that's going to use store import connect
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMessage } from './actions';


const Toggle = (props) => {
  // eslint-disable-next-line react/prop-types
  const { messageVisibility, toggleMessage } = props;
  return (
    <div>
      {messageVisibility && (<h4>Redux Magic Happening Here !!!</h4>)}
      {
        /* dispatch takes an object so we must call the function. React is not going to call it for us. It isn't a callback.
      */}
      <button onClick={toggleMessage} type="button"> Toggle </button>
    </div>
  );
};

/*
  * to pick the parts of state that we want in this component instead of all of the state.
  * mapStateToProps is an arrow function that takes state as an arg and returns an object.
  * Now inside props to Toggle we have access to messageVisibility
  * state passed as arg is the initial state which we got from rootReducer as store.
*/
const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

// eslint-disable-next-line max-len
// taking the action creator and binding it to dispatch. Now toggle message is available as props.toggleMessage
const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,
}, dispatch);

// instead of exporting default Toggle we will do this which is Toggle connected to our redux
export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
