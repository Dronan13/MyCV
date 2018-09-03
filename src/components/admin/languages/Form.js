import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../../config/cfg';

class Form extends Component {
    constructor(props) {
   
        super(props);
        this.state = {
            action: this.props.params.action,
            action_name: '',
            id: this.props.params.id,
            formValues:{
                language:'',
                description:'',
            }          
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.state.action === 'update'){
            this.setState({action_name:'Update'})
            this.getItem();
        }
        else{
            this.setState({action_name:'Create'})
        }
    }

    getItem(){
        axios.get(cfg.baseURL+'api/language/'+this.state.id)
        .then((response) => {
            let formValues = this.state.formValues;
            formValues.language = response.data.language;
            formValues.description = response.data.description;
            this.setState({formValues});
        })
        .catch((error)  => {
              console.log(error);
        }) 
    }

    updateItem(data, id){
        axios.put(cfg.baseURL+'api/language/'+id, data)
            .then(alert('Updated !'))
            .catch(err => {console.log(err)});
    }

    createItem(data){
        axios.post(cfg.baseURL+'api/language', data)
            .then(alert('Created !'))
            .catch(err => {console.log(err)});
    }

      handleInputChange(e) {
        e.preventDefault();
        let formValues = this.state.formValues;
        formValues[e.target.name] = e.target.value;
        this.setState({formValues})
       } 
      
     handleSubmit(e) {
        e.preventDefault();
        const data = {
            language: this.state.formValues.language,
            description: this.state.formValues.description,
        }

        if(this.state.action === 'update'){
            this.updateItem(data, this.state.id);
        }else{
            this.createItem(data);
        }
        
       } 
    
     render() {
        return (
            <form id="contact-form" onSubmit={ this.handleSubmit }>

                <div className="messages"></div>

                <div className="controls">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="form_language">Language *</label>
                                <input id="form_language" type="text" name="language" 
                                className='form-control'
                                required="required" data-error="language is required."
                                onChange={ this.handleInputChange }
                                value={ this.state.formValues.title }   />
                            <div className="help-block with-errors"></div>
                            </div>
                        </div>  
                        <div className="col-md-8">
                            <div className="form-group">
                                <label htmlFor="form_Description">Description *</label>
                                <input id="form_Description" type="text" name="description" 
                                className='form-control'
                                required="required" data-error="Description is required."
                                onChange={ this.handleInputChange }
                                value={ this.state.formValues.authors }   />
                            <div className="help-block with-errors"></div>
                            </div>
                        </div>                              
                    </div>
                    <div className="col-md-12">
                        <input type="submit" className="btn btn-success btn-send float-right" value={this.state.action_name}/>
                    </div>
                </div>
            </form>
        );
    }
}


export default Form;