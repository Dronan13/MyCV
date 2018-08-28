import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../helpers/setAuthToken';
import setAuthUser from '../helpers/setAuthUser';
import jwt_decode from 'jwt-decode';
import cfg from '../components/config/cfg'

export const registerUser = (user, history) => dispatch => {
    axios.post(cfg.baseURL+'api/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user) => dispatch => {
    axios.post(cfg.baseURL+'api/login', user)
            .then(res => {
                const { token } = res.data
                localStorage.setItem('jwtToken', token)                     
                setAuthToken(token)
                const decoded = jwt_decode(token)
                localStorage.setItem('user', decoded)   
                setAuthUser({sub:decoded.sub, username:decoded.username, permissions:decoded.permissions, email:decoded.email})
                dispatch(setCurrentUser(decoded))              
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data.errors
                });
            });
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    setAuthUser(false);
    dispatch(setCurrentUser({}));
    //history.push('/');
}


export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}
