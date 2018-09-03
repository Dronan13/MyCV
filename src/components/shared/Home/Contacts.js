import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../../config/cfg'
import '../../../css/fa.css';

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
            firstname: '',   
            lastname: '',
            description:'',
            email: '',
            phone_cell: '',
            phone_extra: '', 
            skype: '',
            country: '',
            city: '',
            address: '',                  
            about: '',
            linkedin_url: '',
            github_url: '',
            facebook_url: '',
            twitter_url: '',
        };
      }

    componentDidMount() 
    {
        this.getItems();
    }

    getItems() {
        axios.get(cfg.baseURL+'api/owner/'+cfg.owner)
          .then(response => {
            this.setState({
                id: response.data._id,
                firstname: response.data.firstname,
                lastname: response.data.lastname,
                description: response.data.description,
                email: response.data.email,
                phone_cell: response.data.phone_cell,
                phone_extra: response.data.phone_extra, 
                skype: response.data.skype,
                country: response.data.country,
                city: response.data.city,
                address: response.data.address,                  
                about: response.data.about,
                linkedin_url: response.data.linkedin_url,
                github_url: response.data.github_url,
                facebook_url: response.data.facebook_url,
                twitter_url: response.data.twitter_url,
            })
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    render() {
        return (
                <div className='box-text'>
                    <div className='container'>
                    <h3 className='text-center'>CONTACT ME</h3>
                    <br/>
                        <div className='row'>
                            <div className='col-md-6'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56637.36284653936!2d-115.48069393322306!3d32.61911524280407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7700ca877ddd3%3A0xd40033a0e5cdf59a!2sMexicali%2C+Baja+California!5e0!3m2!1sen!2smx!4v1534973461929" 
                                        className="if-gmaps" frameBorder="0" style={{border:0}} title='mylocation'>
                                </iframe>       
                            </div>
                            <div className='col-md-6'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Contacts information</h5>
                                        <h6 className="card-subtitle mb-2">{this.state.firstname} {this.state.lastname}</h6>
                                        <p className="card-text">{this.state.description}</p>
                                        
                                        <div className='row'>
                                            <div className='col-sm-2'><i className="fas fa-envelope"></i></div>
                                            <div className='col-sm-5'><a href={'mailto:'+this.state.email+'?subject=Have Questions'}>{this.state.email}</a></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-2'><i className="fab fa-skype"></i></div>
                                            <div className='col-sm-5'>{this.state.skype}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-2'><i className="fas fa-phone"></i></div>
                                            <div className='col-sm-5'>
                                                {this.state.phone_cell}
                                            </div>           
                                        </div><br/>

                                        <div className='row'>
                                            <div className='col-sm-2'></div>
                                            <div className='col-sm-5'>
                                                <a target="_blank" rel="noopener noreferrer" href={this.state.linkedin_url} className="card-link"><i className="fab fa-linkedin"></i></a>
                                                <a target="_blank" rel="noopener noreferrer" href={this.state.github_url} className="card-link"><i className="fab fa-github"></i></a>
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