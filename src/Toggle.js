import React from 'react';
// Inside the component that's going to use store import connect
import { connect } from 'react-redux';


const Toggle = (props) => {
  // eslint-disable-next-line react/prop-types
  const { messageVisibility, dispatch } = props;
  return (
    <div>
      {messageVisibility && (<h4>Redux Magic Happening Here !!!</h4>)}
      <button onClick={() => dispatch({ type: 'TOGGLE_MESSAGE' })} type="button"> Toggle </button>
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


// instead of exporting default Toggle we will do this which is Toggle connected to our redux
export default connect(mapStateToProps)(Toggle);
