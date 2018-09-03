
import axios from 'axios';
import cfg from '../components/config/cfg'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export function getItems() {
    axios.get(cfg.baseURL+'api/chapter')
      .then(response => {
        this.setState({items: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
}

export function deleteItem(id){
    axios.delete(cfg.baseURL+'api/chapter/'+id)
    .then( this.getItems() )
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