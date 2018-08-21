import axios from 'axios';
import { GET_ERRORS } from './types';
import cfg from '../components/config/cfg'

export const addQuestion = (data, history) => dispatch => {
    axios.post(cfg.baseURL+'api/question', data)
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

