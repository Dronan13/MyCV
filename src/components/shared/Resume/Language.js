import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../../config/cfg'

class Language extends Component {
    constructor() {
   
        super();
        this.state = {
            items: []
        };
      }

    componentDidMount() 
    {
        this.getItems();
    }

    getItems() {
        axios.get(cfg.baseURL+'api/language')
          .then(response => {
            this.setState({items: response.data})
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    printItems(){
        return this.state.items.map(item =>  {
        return(<div key={item._id}>{item.language} ({item.description})</div>);
        })
    }

    render() {
        return (
            <div>
                <h4>Languages</h4> 
                {this.printItems()}
            </div>
        );
    }
}
export default Language;