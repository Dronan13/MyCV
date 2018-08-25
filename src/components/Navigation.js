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
            <NavLink className="nav-link" to="/me">{user.username}</NavLink>    
          </li>
          <li className="nav-item">
            <a className="nav-link text-danger" onClick={this.onLogout.bind(this)}>Logout</a>   
         </li>
      </ul>
    )

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href='#' data-toggle="modal" data-target="#registrationModal">Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#' data-toggle="modal" data-target="#loginModal">Sign In</a>
         </li>
      </ul>
    )

    const adminLinks = (
      <ul className="navbar-nav ml-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/admin/questions'>Questions</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/admin/users'>Users</NavLink></li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Publications</a>
            <div className="dropdown-menu" aria-labelledby="dropdown">
              <NavLink exact className="dropdown-item" activeClassName="active" to='/admin/books'>Books</NavLink>
              <NavLink exact className="dropdown-item" activeClassName="active" to='/admin/confs'>Conferences</NavLink>
              <NavLink exact className="dropdown-item" activeClassName="active" to='/admin/papers'>Papers</NavLink>
            </div>
          </li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/admin/edu'>Education</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/admin/work'>Experience</NavLink></li>
      </ul>
    )

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand text-white"><strong>MyCV</strong></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbars">    
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/'>Home</NavLink></li>
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/resume'>Resume</NavLink></li>
                <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to='/publications'>Publications</NavLink></li>
              </ul>
              {user.permissions === 'admin' ? adminLinks : ''}
              {isAuthenticated ? authLinks : guestLinks}
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