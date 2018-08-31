import React, { Component } from 'react';
import Form from './Form'

class Modal extends Component {
    constructor(props) {
   
        super(props);
        this.state = {
            action: this.props.action,
            id: this.props.id,                    
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return(
            <div className="modal fade" id="updateConfModal" tabIndex="-1" role="dialog" 
                 aria-labelledby="confModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ConfModalLabel">Create Conference</h5>
                            <button id="hidePopUpBtn" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Form action={this.state}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export  default Modal