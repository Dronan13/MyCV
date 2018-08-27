import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../../config/cfg'

class Education extends Component {
    constructor() {
   
        super();
        this.state = {
            items: []
        };
        this.fetchData = this.fetchData.bind(this);
      }

    componentDidMount() 
    {
        this.fetchData();
    }

    fetchData() {
        axios.get(cfg.baseURL+'api/work')
          .then(function (response) {
            //this.setState({items: response});
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
      }

    render() {
        return (
            <div className="container bg-info"> 
                <div className="mb-2">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="font-weight-bold">WORK NAME</h5>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-12 font-weight-bold">
                        COMPANY
                    </div>
                </div>  
                <div className="row">
                    <div className="col-md-6">
                        date.start - date.end
                    </div>
                    <div className="col-md-6 text-right">
                        direction
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul>
                            <li>text 1</li>
                            <li>text 2</li>
                            <li>text 3</li>
                        </ul>
                    </div>
                </div>  
            </div>
            </div>
        );
    }
}
export default Education;