import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/authentication';
import classnames from 'classnames';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
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
        const user = {
            username: this.state.username,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            //this.props.history.push('/') //in case of no modal
            this.closePopUp(); //in case of modal
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            //this.props.history.push('/') //in case of no modal
            this.closePopUp(); //in case of modal
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    closePopUp(){
        document.getElementById("hidePopUpBtn").click();
    }

    render() {
        const {errors} = this.state;
        return(
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="username"
                    placeholder="Username"
                    className={classnames('form-control', {
                        'is-invalid': errors.username
                    })}
                    name="username"
                    onChange={ this.handleInputChange }
                    value={ this.state.username }
                    />
                    {errors.username && (<div className="invalid-feedback">{errors.username}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className={classnames('form-control', {
                        'is-invalid': errors.password
                    })} 
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary float-right">
                        SIGN IN
                    </button>
                </div>
            </form>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)