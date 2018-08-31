import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import cfg from '../../config/cfg';

class List extends Component {
    constructor(props) {
   
        super(props);

        this.state = {
            items:[]
        }            
    }

    componentDidMount() {
        this.getItems();
    }    

    getItems(){
        axios.get(cfg.baseURL+'api/conf')
            .then(response => {
                this.setState({
                    items: response.data
                })
            })
            .catch(err => {console.log(err)});
    }

    printItems(){
        return(
            <table>
                <tbody>{this.state.items.map(function(item, key) {  
                    return (
                        <tr key = {item._id}>
                            <td>{item.title}</td>
                            <td>
                                <NavLink exact className="nav-link" activeClassName="active" to={'/admin/confs/'+item._id}>Update</NavLink>
                                <a className="nav-link" href={null}>Delete</a>
                            </td>
                        </tr>
                        )
                    })}</tbody>
            </table>
        )
    }
    
    render() {
        return (
                <div className='box-text'>
                    <div className='container'>
                        {this.printItems()}
                    </div>
                </div>

        );
    }
}


export default List;