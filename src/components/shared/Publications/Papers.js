import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cfg from '../../config/cfg';

class Papers extends Component {

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
        axios.get(cfg.baseURL+'api/paper')
          .then(response => {
            this.setState({items: response.data})
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    printItems(){
        const {isAuthenticated, user} = this.props.auth;
        const adminLinks = (
            <button type="button" class="btn btn-secondary btn-sm">Update</button>
          )
        return this.state.items.map(item =>  {
            return(
                <div className="text-justify" key={item._id}>
                    <div>
                        {item.authors}, {item.title}, {item.journal} {item.volume} {item.issue ? '('+item.issue+')' : ''} ({item.year}) pp. {item.pages}

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
                    <h3>Papers</h3> 
                    {this.printItems()}
                </div>
            );
        }
        else{
            return '';
        }
        
    }
}

Papers.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth
  })

  export default connect(mapStateToProps)(withRouter(Papers));