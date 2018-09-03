import React, { Component } from 'react';
import Form from './Form'

class Update extends Component {
    constructor() {
        super();
        
        this.state = {
            action: 'update',
            id: '',           
        };   
    }

    componentWillMount(){
        this.setState({
            id:this.props.match.params.id
        })
    }

    render() {  
        return (
            <div className='box-text'>
                <h3 className='text-center'>Update skill</h3>
                <div className='container'>
                    <Form params={this.state}/>
                </div>
            </div>
        );
    }
}

export default Update;
