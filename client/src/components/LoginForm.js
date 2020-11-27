import React from 'react';
import PropTypes from 'prop-types';

import { useState } from 'react';

const LoginForm = ({handle_login}) => {
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };


    return (
      <form onSubmit={e => handle_login(e, state)}>
        <h4>Log In</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handle_change}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handle_change}
        />
        <input type="submit" />
      </form>
    );
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};