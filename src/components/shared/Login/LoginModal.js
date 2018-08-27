import React, { Component } from 'react';
import Login from './Login'

class LoginModal extends Component {

    render() {
        return(
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" 
                 aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">SIGN IN</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Login/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export  default LoginModal