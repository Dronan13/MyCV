import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../../config/cfg'

class Work extends Component {
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
        axios.get(cfg.baseURL+'api/work')
          .then(response => {
            this.setState({items: response.data})
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    printJobs(){
        return this.state.items.map(item =>  {
            return(
                <div className="mb-2" key={item._id}>
                    <div className="row">
                        <div className="col-md-7 font-weight-bold">
                            {item.company}
                        </div>
                        <div className="col-md-5 text-right">
                            {item.country}, {item.city}
                        </div>          
                    </div> 
                    <div className="row">
                        <div className="col-md-7 font-italic">
                            {item.job} 
                        </div>
                        <div className="col-md-5 text-right">
                            {item.date_start} - {item.date_end}
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-justify">
                            {item.description}
                        </div>
                    </div>  
                </div>
            );
        })
    }

    render() {
        return (
            <div> 
                {this.printJobs()}
            </div>
        );
    }
}
export default Work;