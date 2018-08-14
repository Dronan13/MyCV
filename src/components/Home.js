import React, { Component } from 'react';
import axios from 'axios';

//const $ = window.$;
class Home extends Component {
    constructor() {
   
        super();
        this.state = 
        {
            'formFields': {
                firstname: '',
                lastname: '',
                email: '',
                phone: ''
            }    
        };
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
      
     formHandler(formFields) {
        axios.post('http://localhost:5000/api/user', formFields)
          .then(function(response){
            console.log(response);
            //Perform action based on response
        })
          .catch(function(error){
            console.log(error);
            //Perform action based on error
          });
       }  


     render() {
        return (
            <div className="container"> 
                <h2>This is Home</h2>
                <div>
                    Content of home page
                    <form onSubmit={this.formHandler(this.state.formFields)}>
                        <strong>firstname:</strong> <br /> <input type="text" name="firstname" placeholder="Nathaniel" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.firstname} /> <br />
                        <strong>lastname:</strong> <br /> <input type="text" name="lastname" placeholder="Nathaniel" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.lastname} /> <br />
                        <strong>Email:</strong> <br /> <input type="email" name="email" placeholder="me@example.com" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.email} /> <br />
                        <strong>phone:</strong> <br /> <input type="text" name="phone" placeholder="666777888" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.phone} /> <br />
                        <button class="btn btn-primary">Register Account</button>
                    </form>
                </div>                                     
            </div>
        );
    }
}
export default Home;