import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../../config/cfg';

class Chapters extends Component {

    constructor() {
   
        super();
        this.state = {
            items: []
        };

      }

    componentDidMount(){
        this.getItems();
    }

    getItems() {
        axios.get(cfg.baseURL+'api/chapter')
          .then(response => {
            this.setState({items: response.data})
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    printItems(){
        return this.state.items.map(item =>  {
            return(
                    <div className="mb-2" key={item._id}>
                        {item.authors}, {item.title}, {item.journal} {item.volume}
                        ({item.year}) {item.pages}pp.
                    </div>
            );
        })
    }

    render() {
        if(this.state.items.length !== 0){
            return (
                <div>
                    <h3>Books chapters</h3>
                    {this.printItems()}
                </div>
            )
        }
        else{
            return ''
        }
        
    }
}
export default Chapters;