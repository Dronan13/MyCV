import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
const $ = window.$;
class Heroes extends Component {
    
    constructor() {
   
        super();
        this.state = 
                {
                    'items': [],
                    'currentItem': ''
                };
      }

      componentDidMount() {
        this.getItems();
      }

      getItems()
      {
        fetch('api/heroes')
            .then(results => results.json())
            .then(results => this.setState({'items' : results.heroes_list}))
            .catch(function (error) {
                console.log(error);
              });
      }

      

      renderItems() {
        return this.state.items.map(item =>  {
            return (
                <tr key={ item.id }>
                    <td>{ item.id }</td>
                    <td >{ item.firstname }</td>
                    <td>{ item.lastname }</td>
                    <td>{ item.race }</td>
                    <td>{ item.class }</td>
                    <td>{ item.weapon }</td>
                    <td>{ item.level }</td>
                    <td>{ item.strength }</td>
                    <td>{ item.intelligence }</td>
                    <td>{ item.dexterity }</td>
                    <td>
                        <button type="button" className="btn btn-primary btn-sm" onClick={this.onShow.bind(this,item.id)}>Show</button>
                        <button type="button" className="btn btn-warning btn-sm">Edit</button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={this.onDelete.bind(this,item.id)}>Del</button>               
                    </td>
                </tr>                   
            );
        })
      }
    
    onDelete($id)
    {
        fetch('api/heroes/' + $id, {
            method: 'delete'
        })     
        .then(result=>{
            console.log(result)
            this.getItems()
        })
        .catch(function (error) {
            console.log(error);
        });       
    }  

    onShow($id)
      {
        
        fetch('api/heroes/' + $id)
            .then(results => results.json())
            .then(results => {
                this.setState({'currentItem' : results})
                $('#heroShow').modal('show')
            })
            .catch(function (error) {
                console.log(error);
              });
      }

    render() {
        return (
            <div className="container"> 
                <h2>Heroes</h2>
                <NavLink exact className="btn btn-primary btn-sm" activeClassName="active" to='/addhero'>Create new</NavLink>
                <table id="tbr" className="table table-striped table-hover">
                    <thead>
                        <tr className="font-weight-bold">
                            <td>ID</td>
                            <td>Firstname</td>
                            <td>Lastname</td>                            
                            <td>Race</td>
                            <td>Class</td>
                            <td>Weapon</td>
                            <td>Level</td>
                            <td>Str</td>
                            <td>Int</td>
                            <td>Dex</td>
                            <td>Actions</td>
                        </tr>
                    </thead>

                    <tbody>
                        { this.renderItems() }  
                    </tbody>
                </table>     
                { this.showItem() }                       
            </div>
        );
    }

    showItem()
    {
        return(
            <div className="modal fade" id="heroShow" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{this.state.currentItem.firstname} {this.state.currentItem.lastname}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <table id="tbr" className="table table-hover">
                    <thead className="thead-dark">
                        <tr className="font-weight-bold">                                              
                            <td>Race</td>
                            <td>Class</td>
                            <td>Weapon</td>
                            <td>Level</td>
                            <td>Str</td>
                            <td>Int</td>
                            <td>Dex</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>                                              
                            <td>{this.state.currentItem.race}</td>
                            <td>{this.state.currentItem.class}</td>
                            <td>{this.state.currentItem.weapon}</td>
                            <td>{this.state.currentItem.level}</td>
                            <td>{this.state.currentItem.strength}</td>
                            <td>{this.state.currentItem.intelligence}</td>
                            <td>{this.state.currentItem.dexterity}</td>
                        </tr>
                    </tbody>
                </table>       
                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        );
    }

}
export default Heroes;