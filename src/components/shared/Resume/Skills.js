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
        axios.get(cfg.baseURL+'api/skill')
          .then(response => {
            this.setState({items: response.data})
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    printItems(){
        return this.state.items.map(item =>  {
        return(<label key={item._id}>{item.skill} </label>);
        })
    }

    render() {
        return (
            <div>
                <h4>Skills</h4> 
                {this.printItems()}
            </div>
        );
    }
}
export default Language;