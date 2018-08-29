import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../../config/cfg';

class Papers extends Component {

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
        axios.get(cfg.baseURL+'api/paper')
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
                <div className="text-justify" key={item._id}>
                    <div className="mb-2" >
                        {item.authors}, {item.title}, {item.journal} {item.volume}
                        {item.issue ? '('+item.issue+')' : ''} ({item.year}) {item.pages}pp.

                        <button type="button" className="btn btn-link"  
                                data-toggle="collapse" data-target="#collapseAbstract" 
                                aria-expanded="false" aria-controls="collapseExample">
                            More
                        </button>
                    </div>
                    <div className="collapse" id="collapseAbstract">
                        {item.abstract}
                    </div>
                </div>
            );
        })
    }

    render() {
        if(this.state.items.length !== 0){
            return (
                <div>
                    <h3>Papers</h3> 
                    {this.printItems()}
                </div>
            );
        }
        else{
            return '';
        }
        
    }
}
export default Papers;