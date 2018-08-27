import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../../config/cfg'

class Education extends Component {
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
        axios.get(cfg.baseURL+'api/edu')
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
                                {item.university}
                            </div>
                            <div className="col-md-5 text-right">
                                {item.country}, {item.city}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                {item.date_start} - {item.date_end}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 font-italic">
                                {item.title} 
                            </div>
                        </div>
                    </div>
            );
        })
    }

    render() {
        return (
            <div className="container"> 
                {this.printJobs()}
            </div>
        );
    }
}
export default Education;