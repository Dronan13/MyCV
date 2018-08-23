import React, { Component } from 'react';

class Projects extends Component {
     render() {
        return (
            <div className='box-text'>
                <div className='container'>
                    <h3 className='text-center'>Projects</h3>
                    <div className="row">
                        <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Contacts information</h5>
                                    <h6 className="card-subtitle mb-2">Firstname Lastname</h6>
                                    <p className="card-text">Some quick example text to build 
                                    on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Contacts information</h5>
                                    <h6 className="card-subtitle mb-2">Firstname Lastname</h6>
                                    <p className="card-text">Some quick example text to build 
                                    on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Contacts information</h5>
                                    <h6 className="card-subtitle mb-2">Firstname Lastname</h6>
                                    <p className="card-text">Some quick example text to build 
                                    on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Projects;