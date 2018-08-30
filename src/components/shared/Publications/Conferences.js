import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../../config/cfg';

class Conferences extends Component {

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
        axios.get(cfg.baseURL+'api/conf')
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
                    <div className="mb-2">
                        {item.authors} ({item.year})  {item.title}. In {item.conference} {item.volume ? item.volume : ''} pp.{item.pages} {item.publisher}  
                        <button type="button" className="btn btn-link"
                            data-toggle="collapse" data-target={"#collapseAbstract_" + item._id} 
                            aria-expanded="false" aria-controls="collapseExample">
                        More
                            </button>
                    </div>
                    <div className="collapse" id={"collapseAbstract_" + item._id} >
                        <div className="font-weight-bold">Keywords:</div> <div>{item.keywords}</div>
                        <div className="font-weight-bold">Abstract:</div><div>{item.abstract}</div>
                    </div>
                </div>
            );
        })
    }

    render() {
        if(this.state.items.length !== 0){
            return (
                <div className="mb-2">
                    <h3>Conferences</h3> 
                    {this.printItems()}
                </div>
            );
        }
        else{
            return '';
        }
        
    }
}
export default Conferences;