import React, { Component } from 'react';
import Form from './Form'

class Create extends Component {
    constructor() {
        super();
        
        this.state = {
            action: 'create',
            id: '',           
        };   
    }

    render() {  
        return (
            <div className='box-text'>
                <h3 className='text-center'>Create conference</h3>
                <div className='container'>
                    <Form params={this.state}/>
                </div>
            </div>
        );
    }
}

export default Create;
