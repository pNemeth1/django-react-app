import React, { Component } from 'react';
import Nav from './components/Nav';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import './App.css';

import useAuth from './hooks/useAuth';

const App = () => {

  const { state, handle_logout, handle_signup, handle_login, display_form } = useAuth();



    

    return (
        <div className="App">
            <input type="text"/>
          </div>
    );
  }


export default App;

// constructor(props) {
//   super(props);
//   this.state = {
//     displayed_form: '',
//     logged_in: localStorage.getItem('token') ? true : false,
//     username: ''
//   };
// }

// componentDidMount() {
//   if (this.state.logged_in) {
//     fetch('http://localhost:8000/core/current_user/', {
//       headers: {
//         Authorization: `JWT ${localStorage.getItem('token')}`
//       }
//     })
//       .then(res => res.json())
//       .then(json => {
//         this.setState({ username: json.username });
//       });
//   }
// }

// handle_login = (e, data) => {
//   e.preventDefault();
//   fetch('http://localhost:8000/token-auth/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//     .then(res => res.json())
//     .then(json => {
//       localStorage.setItem('token', json.token);
//       this.setState({
//         logged_in: true,
//         displayed_form: '',
//         username: json.user.username
//       });
//     });
// };

// handle_signup = (e, data) => {
//   e.preventDefault();
//   fetch('http://localhost:8000/core/users/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//     .then(res => res.json())
//     .then(json => {
//       localStorage.setItem('token', json.token);
//       this.setState({
//         logged_in: true,
//         displayed_form: '',
//         username: json.username
//       });
//     });
// };

// handle_logout = () => {
//   localStorage.removeItem('token');
//   this.setState({ logged_in: false, username: '' });
// };

// display_form = form => {
//   this.setState({
//     displayed_form: form
//   });
// };