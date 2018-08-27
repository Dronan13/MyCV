import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../config/cfg';

class CreateChapter extends Component {
    constructor() {
   
        super();
        this.state = {
            firstname: '',
            middlename: '',   
            lastname: '',
            email: '',
            phone_cell: '',
            phone_extra: '',
            skype: '',
            country:'', 
            city: '',
            address: '',                  
            about: '',
            linkedin_url: '',
            github_url: '',
            facebook_url: '',
            twitter_url: '',
            google_url: '',   
            skills: ''            
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
            firstname: this.state.firstname,
            middlename: this.state.middlename,
            lastname: this.state.lastname,
            email: this.state.email,
            phone_cell: this.state.phone_cell,  
            phone_extra: this.state.phone_extra,                 
            skype: this.state.skype,
            country: this.state.country,
            city: this.state.city,
            address: this.state.address,
            about:this.state.about,    
            linkedin_url:this.state.linkedin_url,
            github_url:this.state.github_url,
            facebook_url:this.state.facebook_url,
            twitter_url:this.state.twitter_url,
            skills:this.state.github_url
            }
        
        axios.post(cfg.baseURL+'api/owner', data)
            .catch(err => {console.log(err)});
       } 
    
     render() {
        return (
                <div className='box-text'>
                    <div className='container'>
                        <h3 className='text-center'>ADD OWNER DETAILS</h3>
                        <form id="contact-form" onSubmit={ this.handleSubmit }>
                            <div className="controls">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_firstname">Firstname *</label>
                                            <input id="form_firstname" type="text" name="firstname" 
                                            className="form-control"
                                            required="required" data-error="Firstname are required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.title }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>    
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_middlename">Middlename</label>
                                            <input id="form_middlename" type="text" name="middlename" 
                                            className='form-control'
                                            data-error="Authors are required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.title }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>    
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_lastname">Lastname *</label>
                                            <input id="form_lastname" type="text" name="lastname" 
                                            className='form-control'
                                            required="required" data-error="Lastname are required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.title }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>                                
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_email">E-mail *</label>
                                            <input id="form_email" type="text" name="email" 
                                            className='form-control'
                                            required="required" data-error="E-mail are required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.title }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>    
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_phone_cell">Phone: *</label>
                                            <input id="form_phone_cell" type="text" name="phone_cell" 
                                            className='form-control'
                                            required="required" 
                                            data-error="Phone are required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.title }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>    
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_phone_extra">Phone extra</label>
                                            <input id="form_phone_extra" type="text" name="phone_extra" 
                                            className='form-control'
                                            data-error="Phone extra are required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.title }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div> 
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_Skype">Skype</label>
                                            <input id="form_Skype" type="text" name="skype" 
                                                className='form-control'
                                                data-error="Skype are required."
                                                onChange={ this.handleInputChange }
                                                value={ this.state.title }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>                                
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_country">Country *</label>
                                            <input id="form_country" type="text" name="country" 
                                                className='form-control'
                                                required="required" data-error="Country are required."
                                                onChange={ this.handleInputChange }
                                                value={ this.state.title }/>
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>    
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_city">City: *</label>
                                            <input id="form_pcity" type="text" name="city" 
                                                className='form-control'
                                                required="required" 
                                                data-error="City are required."
                                                onChange={ this.handleInputChange }
                                                value={ this.state.title }/>
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>    
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_address">Address</label>
                                            <input id="form_address" type="text" name="address" 
                                                className='form-control'
                                                required="required" 
                                                data-error="Address extra are required."
                                                onChange={ this.handleInputChange }
                                                value={ this.state.title }/>
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>                                
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_Linked">Linked *</label>
                                            <input id="form_Linked" type="text" name="linkedin_url" 
                                                className='form-control'
                                                onChange={ this.handleInputChange }
                                                value={ this.state.title }/>
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>    
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_github_url">GitHub: *</label>
                                            <input id="form_github_url" type="text" name="github_url" 
                                            className='form-control'
                                            onChange={ this.handleInputChange }
                                            value={ this.state.title }   />
                                        </div>
                                    </div>    
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_facebook_url">Facebook</label>
                                            <input id="form_facebook_url" type="text" name="facebook_url" 
                                                className='form-control'
                                                onChange={ this.handleInputChange }
                                                value={ this.state.title }   />
                                        </div>
                                    </div> 
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_twitter_url">Twitter</label>
                                            <input id="form_twitter_url" type="text" name="twitter_url" 
                                                className='form-control'
                                                onChange={ this.handleInputChange }
                                                value={ this.state.title }   />
                                        </div>
                                    </div>                                
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="form_skills">Skills *</label>
                                            <input id="form_skills" type="text" name="skills" 
                                            className="form-control"
                                            required="required" data-error="Skills are required."
                                            onChange={ this.handleInputChange }
                                            value={ this.state.title }   />
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="submit" className="btn btn-success btn-send float-right" value="Create"/>
                                    </div>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>

        );
    }
}


export default CreateChapter;