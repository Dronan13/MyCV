import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';



class Navigation extends Component{ 
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() { 
    const {isAuthenticated, user} = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <a href="#" className="nav-link">{user.username} </a>    
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={this.onLogout.bind(this)}>Logout</a>   
         </li>
      </ul>
    )

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/registration">Sign Up</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">LogIn</NavLink>
         </li>
      </ul>
    )

    return (
        <nav className="navbar navbar-dark navbar-expand-lg transparent fixed-top bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"><strong>MyCV</strong></NavLink>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/'>Home</NavLink></li>
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/education'>Education</NavLink></li>
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/work'>Work</NavLink></li>
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/publications'>Publications</NavLink></li>
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/papers'>Papers</NavLink></li>
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/books'>Books/Chapters</NavLink></li>
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/conferences'>Conferences</NavLink></li>
              </ul>          
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {isAuthenticated ? authLinks : guestLinks}
              </div>
          </div>
          </div>
        </nav> 
    )}
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navigation));