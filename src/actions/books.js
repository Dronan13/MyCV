import axios from 'axios';
import cfg from '../components/config/cfg'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export const updateItem = (data, id, history) => dispatch => {
    axios.put(cfg.baseURL+'api/book/'+id, data)
        .then(alert('Updated'))
        .catch(err => {
          dispatch({
              type: GET_ERRORS,
              payload: err.response.data
          });
        });
}

export const createItem = (data, history) => dispatch => {
    axios.post(cfg.baseURL+'api/book', data)
        .then(alert('Created'))
        .catch(err => {
          dispatch({
              type: GET_ERRORS,
              payload: err.response.data
          });
        });
}

export const getItems = (history) => dispatch => {
    axios.get(cfg.baseURL+'api/book')
      .then(response => {
        return {
          type: GET_BOOKS_ITEMS,
          payload: response.data
        }
      })
      .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
      });
}

export const deleteItem = (id, history) => dispatch => {
    axios.delete(cfg.baseURL+'api/book/'+id)
    .then(response => {
      return {
        type: DEL_BOOK_ITEM,
        payload: response.data
      }
    })
    .catch(err => {
      dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      });
    });
}

export function confDelete(id){
    confirmAlert({
        title: 'Confirm to delete',
        message: 'Are you sure to do this?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => this.deleteItem(id)
          },
          {
            label: 'No',
            onClick: () => alert('Click No')
          }
        ]
      })
}
