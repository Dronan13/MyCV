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
                title:'',
                authors:'',
                journal: '',
                volume: '',
                issue: '',
                year: '',
                publisher: '',  
                pages: '',                  
                issn: '',
                doi: '',
                url:'',    
                abstract:'',
                keywords:'',
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
        axios.get(cfg.baseURL+'api/paper/'+this.state.id)
        .then((response) => {
            let formValues = this.state.formValues;
            formValues.title = response.data.title;
            formValues.journal = response.data.journal;
            formValues.authors = response.data.authors;
            formValues.volume = response.data.volume;
            formValues.issue = response.data.issue;
            formValues.year = response.data.year;
            formValues.publisher = response.data.publisher;  
            formValues.pages = response.data.pages;                 
            formValues.issn = response.data.issn;
            formValues.doi = response.data.doi;
            formValues.url = response.data.url;    
            formValues.abstract = response.data.abstract;
            formValues.keywords = response.data.keywords;
            this.setState({formValues});
        })
        .catch((error)  => {
              console.log(error);
        }) 
    }

    updateItem(data, id){
        axios.put(cfg.baseURL+'api/paper/'+id, data)
            .then(alert('Updated'))
            .catch(err => {console.log(err)});
    }

    createItem(data){
        axios.post(cfg.baseURL+'api/paper', data)
            .then(alert('Created'))
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
            title: this.state.formValues.title,
            authors: this.state.formValues.authors,
            journal: this.state.formValues.journal,
            volume: this.state.formValues.volume,
            issue: this.state.formValues.issue,
            year: this.state.formValues.year,
            publisher: this.state.formValues.publisher,  
            pages: this.state.formValues.publisher,                 
            issn: this.state.formValues.issn,
            doi: this.state.formValues.doi,
            url:this.state.formValues.url,    
            abstract:this.state.formValues.abstract,
            keywords:this.state.formValues.keywords
        }

        if(this.state.action === 'update'){
            this.updateItem(data, this.state.id);
        }

        if(this.state.action === 'create'){
            this.createItem(data);
        }
        
       } 
    
     render() {
        return (
            <form id="contact-form" onSubmit={ this.handleSubmit }>

                        <div className="messages"></div>
                    
                        <div className="controls">
                        <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_title">Title *</label>
                                        <input id="form_title" type="text" name="title" 
                                        className='form-control'
                                        required="required" data-error="Authors is required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.formValues.title }   />
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
                                        value={ this.state.formValues.authors }   />
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>                                
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_journal">Journal *</label>
                                        <input id="form_journal" type="text" name="journal" 
                                        className='form-control'
                                        required="required" data-error="Journal are required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.formValues.journal }/>
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
                                        value={ this.state.formValues.volume }   />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>       

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="form_issue">Issue</label>
                                        <input id="form_issue" type="text" name="issue" 
                                        className='form-control'
                                        onChange={ this.handleInputChange }
                                        value={ this.state.formValues.issue }   />
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
                                        value={ this.state.formValues.publisher }   />
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
                                        value={ this.state.formValues.year }/>
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
                                        value={ this.state.formValues.pages }   />
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>                                          
                            </div>

                            <div className="row">                               
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="form_issn">ISSN</label>
                                        <input id="form_issn" type="text" name="issn" 
                                        className='form-control'
                                        onChange={ this.handleInputChange }
                                        value={ this.state.formValues.issn }   />
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>                             
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="form_doi">DOI</label>
                                        <input id="form_doi" type="text" name="doi" 
                                        className='form-control'
                                        onChange={ this.handleInputChange }
                                        value={ this.state.formValues.doi }   />
                                    <div className="help-block with-errors"></div>
                                    </div>
                                </div>   
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="form_url">URL</label>
                                        <input id="form_url" type="text" name="url" 
                                        className='form-control'
                                        onChange={ this.handleInputChange }
                                        value={ this.state.formValues.url}   />
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
                                        value={ this.state.formValues.keywords }   />
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
                                                value={ this.state.formValues.abstract }></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                    <div className="col-md-12">
                        <input type="submit" className="btn btn-success btn-send float-right" value={this.state.action_name}/>
                    </div>
                </div>
            </div>
            </form>
        );
    }
}


export default Form;