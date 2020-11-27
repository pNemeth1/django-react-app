import {useState, useEffect } from 'react';
import axios from axios;


const fetchData = async () => {
    let result;
    try {
        axios.get('http://localhost:8000/core/current_user/', {
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
            }
          })
    } catch(e) {
        console.log(e);
    }
}

const useAuth = () => {
    [state, setState] = useState({
        displayed_form: '',
        logged_in: localStorage.getItem('token') ? true : false,
        username: ''
    });

    useEffect(() => {

        const getLogin = async () => {
            await fetchData().then(res => res.json())
            .then(json => {
                setState({ username: json.username });
              });
        }
        getLogin();

    });

    return {state}

}

export default useAuth