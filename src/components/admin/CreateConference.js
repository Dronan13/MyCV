import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../config/cfg';

class CreateConference extends Component {
    constructor() {
   
        super();
        this.state = {
            title:'',
            authors:'',
            conference: '',
            volume: '',
            year: '',
            publisher: '',  
            pages: '',                  
            issn: '',
            doi: '',
            url:'',    
            abstract:'',
            keywords:'',            
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
            title: this.state.title,
            authors: this.state.authors,
            conference: this.state.conference,
            volume: this.state.volume,
            year: this.state.year,
            publisher: this.state.publisher,  
            pages: this.state.publisher,                 
            issn: this.state.issn,
            doi: this.state.doi,
            url:this.state.url,    
            abstract:this.state.abstract,
            keywords:this.state.keywords
            }
        
        axios.post(cfg.baseURL+'api/conf', data)
            .catch(err => {console.log(err)});
       } 
    
     render() {
        return (
                <div className='box-text'>
                    <div className='container'>
                        <h3 className='text-center'>ADD CONFERENCE PAPER</h3>
                        <form id="contact-form" onSubmit={ this.handleSubmit }>

                        <div className="messages"></div>
                    
                        <div className="controls">
                        <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_title">Title *</label>
                                        <input id="form_title" type="text" name="title" 
                                        className='form-control'
                                        required="required" data-error="Authors are required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.title }   />
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>                                
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_authors">Authors *</label>
                                        <input id="form_authors" type="text" name="authors" 
                                        className='form-control'
                                        required="required" data-error="Authors are required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.authors }   />
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>                                
                            </div>

                            <div className="row">
                                <div className="col-md-9">
                                    <div className="form-group">
                                        <label htmlFor="form_conference">Conference *</label>
                                        <input id="form_conference" type="text" name="conference" 
                                        className='form-control'
                                        required="required" data-error="Conference are required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.conference }/>
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>                     

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="form_vol">Volume *</label>
                                        <input id="form_vol" type="text" name="volume" 
                                        className='form-control'
                                        required="required" data-error="Vol. is required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.volume }   />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>                 
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_publisher">Publisher *</label>
                                        <input id="form_publisher" type="text" name="publisher" 
                                        className='form-control'
                                        required="required" data-error="Publisher is required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.publisher }   />
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>   
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="form_year">Year *</label>
                                        <input id="form_year" type="text" name="year" 
                                        className='form-control'
                                        required="required" data-error="Year are required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.year }/>
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>                       
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="form_pages">Pages *</label>
                                        <input id="form_pages" type="text" name="pages" 
                                        className='form-control'
                                        required="required" data-error="Pages are required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.pages }   />
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>                                          
                            </div>

                            <div className="row">                               
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="form_issn">ISSN *</label>
                                        <input id="form_issn" type="text" name="issn" 
                                        className='form-control'
                                        required="required" data-error="ISSN is required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.issn }   />
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>                             
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="form_doi">DOI *</label>
                                        <input id="form_doi" type="text" name="doi" 
                                        className='form-control'
                                        required="required" data-error="DOI is required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.doi }   />
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>   
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="form_url">URL *</label>
                                        <input id="form_url" type="text" name="url" 
                                        className='form-control'
                                        required="required" data-error="URL is required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.url}   />
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>                             
                            </div>

                            <div className="row">  
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_keywords">Keywords *</label>
                                        <input id="form_keywords" type="text" name="keywords" 
                                        className='form-control'
                                        required="required" data-error="Keywords is required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.keywords }   />
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>                             
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_abstract">Abstract *</label>
                                        <textarea id="form_abstract" name="abstract" 
                                                className='form-control'
                                                rows="4" required="required" 
                                                data-error="Abstract is required."
                                                onChange={ this.handleInputChange }
                                                value={ this.state.abstract }></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <input type="submit" className="btn btn-success btn-send" value="Create"/>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>

        );
    }
}


export default CreateConference;