import React, { Component } from 'react';
import '../../css/fa.css';

class Contacts extends Component {
     render() {
        return (
                <div className='box-text'>
                    <div className='container'>
                    <h3 className='text-center'>CONTACT ME</h3>
                    <br/>
                        <div className='row'>
                            <div className='col-md-6'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56637.36284653936!2d-115.48069393322306!3d32.61911524280407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7700ca877ddd3%3A0xd40033a0e5cdf59a!2sMexicali%2C+Baja+California!5e0!3m2!1sen!2smx!4v1534973461929" 
                                        width="450" height="300" frameborder="0" style={{border:0}} allowfullscreen>
                                </iframe>       
                            </div>
                            <div className='col-md-6'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Contacts information</h5>
                                        <h6 className="card-subtitle mb-2">Firstname Lastname</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className='row'>
                                            <div className='col-sm-2'>E-mail:</div>
                                            <div className='col-sm-4'>
                                                <a className="#" class="card-link">email@email.com</a>
                                            </div>           
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-2'>Phone:</div>
                                            <div className='col-sm-4'>
                                                <label class="card-link">+00-(000)-5555-55</label>
                                            </div>           
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-2'>Social:</div>
                                            <div className='col-sm-4'>
                                            <i class="fab fa-linkedin"></i>
                                            <i class="fab fa-github"></i>
                                            </div>           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
        );
    }
}
export default Contacts;