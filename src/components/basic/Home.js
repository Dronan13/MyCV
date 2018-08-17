import React, { Component } from 'react';
import cfg from '../config/cfg'

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
                    Content of Home
                </div>                                     
            </div>
        );
    }
}
export default Home;