import axios from 'axios';
import cfg from '../components/config/cfg'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export function updateItem(data, id){
    axios.put(cfg.baseURL+'api/book/'+id, data)
        .then(alert('Updated'))
        .catch(err => {console.log(err)});
}

export function createItem(data){
    axios.post(cfg.baseURL+'api/book', data)
        .then(alert('Created'))
        .catch(err => {console.log(err)});
}

export function getItems() {
    axios.get(cfg.baseURL+'api/book')
      .then(response => {
        this.setState({items: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
}

export function deleteItem(id){
    axios.delete(cfg.baseURL+'api/book/'+id)
    .then( this.getItems())
    .catch(function (error) {
      console.log(error);
    })
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
