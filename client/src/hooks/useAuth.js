import {useState, useEffect } from 'react';
import axios from 'axios';


const fetchUser = async () => {
    let result;
    try {
        result = axios.get('http://localhost:8000/core/current_user/', {
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
            }
          })
    } catch(e) {
        console.log(e);
    }

    return result;
}

const useAuth = () => {
    const [state, setState] = useState({
        displayed_form: '',
        logged_in: localStorage.getItem('token') ? true : false,
        username: ''
    });

    useEffect(() => {

        const getLogin = async () => {
            await fetchUser().then(res => res.json())
            .then(json => {
                setState({ username: json.username });
              });
        }
        getLogin();

    }, []);

    const handle_login = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/token-auth/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(json => {
            localStorage.setItem('token', json.token);
            setState({
              logged_in: true,
              displayed_form: '',
              username: json.user.username
            });
          });
      };
    
      const handle_signup = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/core/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(json => {
            localStorage.setItem('token', json.token);
            setState({
              logged_in: true,
              displayed_form: '',
              username: json.username
            });
          });
      };
    
      const handle_logout = () => {
        localStorage.removeItem('token');
        setState({ logged_in: false, username: '' });
      };
    

    return { state, setState, handle_logout, handle_signup, handle_login }

}

export default useAuth;