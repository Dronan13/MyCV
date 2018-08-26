import React, { Component } from 'react';
import Login from './Login'

class LoginModal extends Component {

    render() {
        return(
            <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" 
                 aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">SIGN IN</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Login/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export  default LoginModal