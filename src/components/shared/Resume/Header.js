import React, { Component } from 'react';
import axios from 'axios';
import cfg from '../../config/cfg'

class Header extends Component {
    constructor() {
   
        super();
        this.state = {
            firstname: '',
            middlename: '',    
            lastname: '',
            title: '',
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
            skills: '',
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
                middlename: response.data.middlename,    
                lastname: response.data.lastname,
                title: response.data.title,
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
                skills: response.data.skills,
            })
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    
    render() {
        return (
            <div> 
                <div className="mb-2" key={this.state._id}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12"><h3>{this.state.firstname} ({this.state.middlename}) {this.state.lastname}</h3></div>
                            </div>
                            <div className="row">
                                <div className="col-12 font-weight-bold"><h4>{this.state.title}</h4></div>
                            </div>
                        </div>
                        <div className="col-md-6 text-right">
                            <div className="row">
                                <div className="col-12">{this.state.country}, {this.state.address}</div>
                            </div>
                            <div className="row">
                                <div className="col-12">{this.state.city}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">{this.state.description}</div>
                    </div>
                    <br/>
                    <div className="row bg-dark text-white pt-2 pb-2">
                        <div className="col-md-3"><i className="fas fa-envelope"></i> {this.state.email}</div>
                        <div className="col-md-3"><i className="fas fa-phone"></i> {this.state.phone_cell}</div>
                        <div className="col-md-4">
                            <i className="fab fa-linkedin"></i> {this.state.linkedin_url}
                        </div>
                        <div className="col-md-2"><i className="fab fa-skype"></i> {this.state.skype}</div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12"><h4>SKILLS</h4></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">{this.state.skills}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;