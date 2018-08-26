import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { addQuestion} from '../../../actions/question';
import classnames from 'classnames';

class Questions extends Component {
    constructor() {
   
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email:'',
            question:'',
            errors: {}            
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
        const question = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            question: this.state.question
        }
        this.props.addQuestion(question, this.props.history);
       } 
    
     render() {
        const { errors } = this.state;
        return (
                <div className='box-text'>
                    <div className='container'>
                        <h3 className='text-center'>ASK QUESTIONS</h3>
                        <form id="contact-form" onSubmit={ this.handleSubmit }>

                        <div className="messages"></div>
                    
                        <div className="controls">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_name">Firstname *</label>
                                        <input id="form_name" type="text" name="firstname" 
                                                className={classnames('form-control', {
                                                    'is-invalid': errors.firstname
                                                })} 
                                                placeholder="Please enter your firstname *" 
                                                required="required" data-error="Firstname is required."
                                                onChange={ this.handleInputChange }
                                                value={ this.state.firstname }
                                                />
                                                {errors.firstname && (<div className="invalid-feedback">{errors.firstname}</div>)}
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_lastname">Lastname *</label>
                                        <input id="form_lastname" type="text" name="lastname" 
                                                className={classnames('form-control', {
                                                    'is-invalid': errors.lastname
                                                })}
                                                placeholder="Please enter your lastname *" 
                                                required="required" data-error="Lastname is required."
                                                onChange={ this.handleInputChange }
                                                value={ this.state.lastname } />
                                                {errors.lastname && (<div className="invalid-feedback">{errors.lastname}</div>)}
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_email">Email *</label>
                                        <input id="form_email" type="email" name="email" 
                                        className={classnames('form-control', {
                                            'is-invalid': errors.email
                                        })}
                                        placeholder="Please enter your email *" 
                                        required="required" data-error="Valid email is required."
                                        onChange={ this.handleInputChange }
                                        value={ this.state.email }   />
                                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}

                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_message">Message *</label>
                                        <textarea id="form_message" name="question" 
                                                className={classnames('form-control', {
                                                    'is-invalid': errors.question
                                                })} 
                                                placeholder="Message for me *" 
                                                rows="4" required="required" 
                                                data-error="Please, leave us a message."
                                                onChange={ this.handleInputChange }
                                                value={ this.state.question }></textarea>
                                                {errors.question && (<div className="invalid-feedback">{errors.question}</div>)}
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <input type="submit" className="btn btn-success btn-send" value="Send message"/>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>

        );
    }
}


Questions.propTypes = {
    addQuestion: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{ addQuestion })(withRouter(Questions))