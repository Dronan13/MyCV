import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../config/cfg'
//const $ = window.$;
class Home extends Component {
    constructor() {
   
        super();
        this.state = 
        {
            'formFields': {
                username: '',
                password: ''
            }    
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        //this.getHeroesTotal();
      }
      /*
      getHeroesTotal()
      {
        fetch('api/heroes_count')
            .then(results => results.json())
            .then(results => this.setState(
                {
                    'heroes_total' : results
                }
            ))
            .catch(function (error) {
                console.log(error);
              });
      }
      */
     inputChangeHandler(e) {
        let formFields = {...this.state.formFields};
        formFields[e.target.name] = e.target.value;
        this.setState({
         formFields
        });
       } 
      
     handleSubmit(e) {
        e.preventDefault();
        const data = this.state.formFields;
        fetch(cfg.baseURL+'api/login', {
            method: 'POST',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
               },
            body: JSON.stringify(data)
          })
          .then(function(response){
            console.log(response)
            //Perform action based on response
        })
          .catch(function(error){
            console.log(error)
            //Perform action based on error
          });
       }  


     render() {
        return (
            <div className="container"> 
                <h2>This is Home</h2>
                <div>
                    Content of home page
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="text" name="username" className="form-control" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.username}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.password}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>                                     
            </div>
        );
    }
}
export default Home;