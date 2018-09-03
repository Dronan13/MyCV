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
                skill:'',
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
        axios.get(cfg.baseURL+'api/skill/'+this.state.id)
        .then((response) => {
            let formValues = this.state.formValues;
            formValues.skill = response.data.skill;
            this.setState({formValues});
        })
        .catch((error)  => {
              console.log(error);
        }) 
    }

    updateItem(data, id){
        axios.put(cfg.baseURL+'api/skill/'+id, data)
            .then(alert('Updated !'))
            .catch(err => {console.log(err)});
    }

    createItem(data){
        axios.post(cfg.baseURL+'api/skill', data)
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
            skill: this.state.formValues.skill,
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
                                <label htmlFor="form_language">Skill *</label>
                                <input id="form_language" type="text" name="skill" 
                                className='form-control'
                                required="required" data-error="Skill is required."
                                onChange={ this.handleInputChange }
                                value={ this.state.formValues.title }/>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>                          
                    </div>
                    <div className="col-md-4">
                            <input type="submit" className="btn btn-success btn-send float-right" value={this.state.action_name}/>
                        </div>
                </div>
            </form>
        );
    }
}


export default Form;