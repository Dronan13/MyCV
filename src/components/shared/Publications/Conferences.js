import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import cfg from '../../config/cfg';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class Conferences extends Component {

    constructor() {
        super();
        this.state = {
            items: []
        };

    }

    componentDidMount() 
    {
        this.getItems();
    }

    getItems() {
        axios.get(cfg.baseURL+'api/conf')
          .then(response => {
            this.setState({items: response.data})
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    deleteItem(id){
        axios.delete(cfg.baseURL+'api/conf/'+id)
        .then( this.getItems())
        .catch(function (error) {
          console.log(error);
        })
    }

    confDelete(id){
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.deleteItem(id)
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          })
    }

    

    printItems(){
        const {isAuthenticated, user} = this.props.auth;
        return this.state.items.map(item =>  {
            const adminLinks = (
                <div>
                    <NavLink exact className="btn btn-success btn-sm" activeClassName="active" to={'/admin/conf/'+item._id}>Update</NavLink>
                    <button type="button" className="btn btn-danger btn-sm" onClick={this.confDelete.bind(this, item._id)}>Delete</button>
                </div>
            )
            return(
                <div className="text-justify" key={item._id}>
                    <div className="mb-2">
                        {item.authors} ({item.year})  {item.title}. In {item.conference} {item.volume ? item.volume : ''} pp.{item.pages} {item.publisher}  
                        <button type="button" className="btn btn-link"
                            data-toggle="collapse" data-target={"#collapseAbstract_" + item._id} 
                            aria-expanded="false" aria-controls="collapseExample">
                            More
                        </button>
                        {user.permissions === 'admin' ? adminLinks : ''}
                    </div>
                    <div className="collapse mb-2 p-2 bg-abstract border rounded" id={"collapseAbstract_" + item._id} >
                        <div className="font-weight-bold">Keywords:</div> <div>{item.keywords}</div>
                        <div className="font-weight-bold">Abstract:</div><div>{item.abstract}</div>
                    </div>
                </div>
            );
        })
    }

    render() {
        if(this.state.items.length !== 0){
            return (
                <div className="mb-2">
                    <h3>Conferences</h3> 
                    {this.printItems()}
                </div>
            );
        }
        else{
            return '';
        }
        
    }
}

Conferences.propTypes = {
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth
  })
export default connect(mapStateToProps)(withRouter(Conferences));