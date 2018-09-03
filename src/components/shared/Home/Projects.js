import React, { Component } from 'react';

import pr_img_1 from '../../../img/net.png'
import pr_img_2 from '../../../img/net.png'
import pr_img_3 from '../../../img/net.png'

class Projects extends Component {
     render() {
        return (
            <div className='box-text'>
                <div className='container'>
                    <h3 className='text-center'>Projects</h3>
                    <div className="row">
                        <div className="col-sm-3">
                        <div className="card">
                            <img className="card-img-top" src={pr_img_1} alt="First project"/>
                            <div className="card-body">
                                <h5 className="card-title">Project information</h5>
                                    <h6 className="card-subtitle mb-2">Keywords</h6>
                                    <p className="card-text">Some quick example text to build 
                                    on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card">
                            <img className="card-img-top" src={pr_img_2} alt="Second project"/>
                            <div className="card-body">
                                <h5 className="card-title">Project information</h5>
                                    <h6 className="card-subtitle mb-2">Keywords</h6>
                                    <p className="card-text">Some quick example text to build 
                                    on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card">
                            <img className="card-img-top" src={pr_img_3} alt="Therd project"/>
                            <div className="card-body">
                                <h5 className="card-title">Project information</h5>
                                    <h6 className="card-subtitle mb-2">Keywords</h6>
                                    <p className="card-text">Some quick example text to build 
                                    on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-3">
                        <div className="card">
                            <img className="card-img-top" src={pr_img_3} alt="Fourth project"/>
                            <div className="card-body">
                                <h5 className="card-title">Project information</h5>
                                    <h6 className="card-subtitle mb-2">Keywords</h6>
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