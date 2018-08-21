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
          <a href="#" className="nav-link" activeClassName="active">{user.username}:{user.role}</a>    
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" activeClassName="active" onClick={this.onLogout.bind(this)}>Logout</a>   
         </li>
      </ul>
    )

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/registration">Sign Up</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/login">LogIn</NavLink>
         </li>
      </ul>
    )

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top scrolling-navbar">
          <div className="container-fluid">
            <a className="navbar-brand text-white"><strong>MyCV</strong></a>
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

export default connect(mapStateToProps, { logoutUser }, null, { pure: false })(withRouter(Navigation));