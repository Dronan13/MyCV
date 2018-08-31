import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
class PrivateRoute extends React.Component {
/*
  const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
*/
    componentWillMount() {
      this.checkAuth();
    }

    checkAuth() {
        const {isAuthenticated, user} = this.props.auth;
        if ( ! isAuthenticated) {
            //const location = this.props.location;
            //const redirect = location.pathname + location.search;
            this.props.router.push('/');
        }
    }

    render() {
      return this.props.isLoggedIn ? <Component { ...this.props }/>: null;
      //<Route handler={requireAuth(Todos)} name="todos"/>  
    }

  }

  PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth
  })

export default connect(mapStateToProps)(withRouter(PrivateRoute));