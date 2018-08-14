import React, { Component } from 'react';
const $ = window.$;
class Monsters extends Component {
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
        fetch('api/monsters')
            .then(results => results.json())
            .then(results => this.setState({'items' : results.monsters_list}))
            .catch(function (error) {
                console.log(error);
              });
      }

      renderItems() {
        return this.state.items.map(item =>  {
            return (
                <tr key={ item.id }>
                    <td>{ item.id }</td>
                    <td >{ item.name }</td>
                    <td>{ item.race_name }</td>
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
        fetch('api/monsters/' + $id, {
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
        fetch('api/monsters/' + $id)
            .then(results => results.json())
            .then(results => {
                this.setState({'currentItem' : results})
                $('#monsterShow').modal('show')
            })
            .catch(function (error) {
                console.log(error);
              });
      }

    render() {
        return (
            <div className="container"> 
                <h2>Monsters</h2>
                <table id="tbr" className="table table-striped table-hover">
                    <thead>
                        <tr className="font-weight-bold">
                            <td>ID</td>
                            <td>Name</td>
                            <td>Race</td>                                                        
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

    showAbilities()
    {
        if(this.state.currentItem.abilities)
        {
            return this.state.currentItem.abilities.map(item =>  {
                return (<li>{ item.name }</li>);
            })
        }
        else
        {
            return "";
        }
    }

    showItem()
    {
        return(
            <div className="modal fade" id="monsterShow" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{this.state.currentItem.name}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <table id="tbr" className="table table-hover">
                    <thead className="thead-dark">
                        <tr className="font-weight-bold">                                              
                            <td>Race</td>
                            <td>Level</td>
                            <td>Str</td>
                            <td>Int</td>
                            <td>Dex</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>                                              
                            <td>{this.state.currentItem.race_name}</td>
                            <td>{this.state.currentItem.level}</td>
                            <td>{this.state.currentItem.strength}</td>
                            <td>{this.state.currentItem.intelligence}</td>
                            <td>{this.state.currentItem.dexterity}</td>
                        </tr>
                    </tbody>
                </table>     

                <div>Abilities:
                    <ul>
                        {this.showAbilities()}
                    </ul>               
                </div>   

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
export default Monsters;