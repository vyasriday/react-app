/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../actions/movie';
import { messageVisibility } from '../actions/toggle';


const Toggle = (props) => {
  // eslint-disable-next-line react/prop-types
  const { getMovies, messageVisibility } = props;
  return (
    <div>
      {messageVisibility && <p>Redux Magic</p>}
      <button onClick={messageVisibility} type="button">Toggle</button>
      <button onClick={getMovies} type="button">Load Movies</button>
    </div>
  );
};

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
});

// eslint-disable-next-line max-len
const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies,
  messageVisibility,
}, dispatch);

/* mapToState must be first argument, If not present pass null.
* Otherwise dispatch won't be available to component
*/
// export default connect(null, mapDispatchToProps)(Toggle);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
