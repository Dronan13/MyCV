import React, { Component } from 'react';
import Registration from './Registration';

class RegistrationModal extends Component {

    render() {
        return(
            <div className="modal fade" id="registrationModal" tabIndex="-1" role="dialog" 
                 aria-labelledby="registrationModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">REGISTRATION</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Registration/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default RegistrationModal