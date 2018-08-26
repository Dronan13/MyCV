import React, { Component } from 'react';
import Registration from './Registration';

class RegistrationModal extends Component {

    render() {
        return(
            <div class="modal fade" id="registrationModal" tabindex="-1" role="dialog" 
                 aria-labelledby="registrationModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">REGISTRATION</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Registration/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default RegistrationModal