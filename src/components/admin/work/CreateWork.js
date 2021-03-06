import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../../config/cfg';

class CreateWork extends Component {
    constructor() {
   
        super();
        this.state = {
            job: '', 
            company: '',           
            date_start: '',
            date_end: '',
            country: '',
            city: '',
            description:''         
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
       } 
      
     handleSubmit(e) {
        e.preventDefault();
        const data = {
            job: this.state.job,
            company: this.state.company,
            date_start: this.state.date_start,
            date_end: this.state.date_end,
            country: this.state.country,
            city: this.state.city,
            description: this.state.description,  
            }
        
        axios.post(cfg.baseURL+'api/work', data)
            .catch(err => {console.log(err)});
       } 
    
     render() {
        return (
                <div className='box-text'>
                    <div className='container'>
                        <h3 className='text-center'>ADD JOB DESCRIPTION</h3>
                        <form id="contact-form" onSubmit={ this.handleSubmit }>
                            <div className="messages"></div>        
                            <div className="controls">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="form_tit">Title *</label>
                                            <input id="form_tit" type="text" name="job" 
                                            className='form-control'
                                            required="required" data-error="Title is required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.title }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_comp">Company *</label>
                                            <input id="form_comp" type="text" name="company" 
                                            className='form-control'
                                            required="required" data-error="Company is required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.company }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>    
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_country">Country *</label>
                                            <input id="form_country" type="text" name="country" 
                                            className='form-control'
                                            required="required" data-error="Country is required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.country }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div> 
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_city">City *</label>
                                            <input id="form_city" type="text" name="city" 
                                            className='form-control'
                                            required="required" data-error="City is required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.city }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>                               
                            </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_ds">Date start *</label>
                                            <input id="form_ds" type="text" name="date_start" 
                                            className='form-control'
                                            required="required" data-error="Date is required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.date_start }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>   
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_de">Date end *</label>
                                            <input id="form_de" type="text" name="date_end" 
                                            className='form-control'
                                            required="required" data-error="Date is required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.date_end}   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="form_desc">Description *</label>
                                            <textarea id="form_desc" type="text" name="description" 
                                            className='form-control'rows="10" 
                                            required="required" data-error="Description is required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.description }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary float-right">
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
}


export default CreateWork;