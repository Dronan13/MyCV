import axios from 'axios';
import { GET_ERRORS } from './types';
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
                console.log(res.data);
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}