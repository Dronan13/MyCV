import React, { Component } from 'react';
const $ = window.$;
class Dashboard extends Component {
    constructor() {
   
        super();
        this.state = 
        {
            'heroes_total': '',

            'hraces_stats': [],
            'hraces_popular': '',
            'hraces_total': '',

            'weapons_total': '',
            'weapons_stats': [],
            'weapons_popular': '',

            'classes_total': '',
            'classes_stats': [],
            'classes_popular': '',

            'monsters_total': '',

            'mraces_total': '',
            'mraces_stats': [],
            'mraces_popular': '',
            
            'abilities_total': '',
            'abilities_stats': [],
            'abilities_popular': '',
        };
      }

      componentDidMount() {
        this.getHeroesRaces();
        this.getHeroesClasses();
        this.getHeroesWeapons();
        this.getHeroesTotal();
        this.getMonstersTotal();
        this.getMonstersRaces();
        this.getMonstersAbilities();
      }

      getHeroesTotal()
      {
        fetch('api/heroes_count')
            .then(results => results.json())
            .then(results => this.setState(
                {
                    'heroes_total' : results
                }
            ))
            .catch(function (error) {
                console.log(error);
              });
      }

      getMonstersTotal()
      {
        fetch('api/monster_count')
            .then(results => results.json())
            .then(results => this.setState(
                {
                    'monsters_total' : results
                }
            ))
            .catch(function (error) {
                console.log(error);
              });
      }

      getHeroesRaces()
      {
        fetch('api/heroes_race')
            .then(results => results.json())
            .then(results => this.setState(
                {
                    'hraces_stats' : results.stats,
                    'hraces_popular' : results.popular,
                    'hraces_total' : results.total,
                }
            ))
            .catch(function (error) {
                console.log(error);
              });
      }

      getHeroesClasses()
      {
        fetch('api/heroes_classes')
            .then(results => results.json())
            .then(results => this.setState(
                {
                    'classes_stats' : results.stats,
                    'classes_popular' : results.popular,
                    'classes_total' : results.total,
                }
            ))
            .catch(function (error) {
                console.log(error);
              });
      }

      getHeroesWeapons()
      {
        fetch('api/heroes_weapons')
            .then(results => results.json())
            .then(results => this.setState(
                {
                    'weapons_stats' : results.stats,
                    'weapons_popular' : results.popular,
                    'weapons_total' : results.total,
                }
            ))
            .catch(function (error) {
                console.log(error);
              });
      }

      getMonstersRaces()
      {
        fetch('api/monster_race')
            .then(results => results.json())
            .then(results => this.setState(
                {
                    'mraces_stats' : results.stats,
                    'mraces_popular' : results.popular,
                    'mraces_total' : results.total,
                }
            ))
            .catch(function (error) {
                console.log(error);
              });
      }

      getMonstersAbilities()
      {
        fetch('api/monster_abilities')
            .then(results => results.json())
            .then(results => this.setState(
                {
                    'abilities_stats' : results.stats,
                    'abilities_popular' : results.popular,
                    'abilities_total' : results.total,
                }
            ))
            .catch(function (error) {
                console.log(error);
              });
      }

      renderHRacesBody() {
        return this.state.hraces_stats.map(item =>  {
            return (
                <tr key={ item.id }>
                    <td>{ item.id }</td>
                    <td >{ item.iname }</td>
                    <td>{ item.count }</td>                   
                </tr>                 
            );
        })
      }
      
      renderHRacesTable() {
        return (
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Heroes Races</h5>
                <h6 className="card-subtitle mb-2 text-muted">Most popular: {this.state.hraces_popular.iname}</h6>    
                <h6 className="card-subtitle mb-2 text-muted">Total races: {this.state.hraces_total}</h6>              
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <td>ID</td>
                            <td>Race</td>
                            <td>Count</td>                                                       
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderHRacesBody() }  
                    </tbody>
                </table>     
            </div>
            </div>               
        );

      }

      renderMRacesBody() {
        return this.state.mraces_stats.map(item =>  {
            return (
                <tr key={ item.id }>
                    <td>{ item.id }</td>
                    <td >{ item.iname }</td>
                    <td>{ item.count }</td>                   
                </tr>                 
            );
        })
      }
      
      renderMRacesTable() {
        return (
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Monsters Races</h5>
                <h6 className="card-subtitle mb-2 text-muted">Most popular: {this.state.mraces_popular.iname}</h6>    
                <h6 className="card-subtitle mb-2 text-muted">Total races: {this.state.mraces_total}</h6>              
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <td>ID</td>
                            <td>Race</td>
                            <td>Count</td>                                                       
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderMRacesBody() }  
                    </tbody>
                </table>     
            </div>
            </div>               
        );

      }

      renderAbilitiesBody() {
        return this.state.abilities_stats.map(item =>  {
            return (
                <tr key={ item.id }>
                    <td>{ item.id }</td>
                    <td >{ item.iname }</td>
                    <td>{ item.count }</td>                   
                </tr>                 
            );
        })
      }
      
      renderAbilitiesTable() {
        return (
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Monsters abilities</h5>
                <h6 className="card-subtitle mb-2 text-muted">Most popular: {this.state.abilities_popular.iname}</h6>    
                <h6 className="card-subtitle mb-2 text-muted">Total abilities: {this.state.abilities_total}</h6>              
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <td>ID</td>
                            <td>Ability</td>
                            <td>Count</td>                                                       
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderAbilitiesBody() }  
                    </tbody>
                </table>     
            </div>
            </div>               
        );

      }

      renderClassesBody() {
        return this.state.classes_stats.map(item =>  {
            return (
                <tr key={ item.id }>
                    <td>{ item.id }</td>
                    <td >{ item.iname }</td>
                    <td>{ item.count }</td>                   
                </tr>                 
            );
        })
      }
      
      renderClassesTable() {
        return (
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Heroes Classes</h5>
                <h6 className="card-subtitle mb-2 text-muted">Most popular: {this.state.classes_popular.iname}</h6>    
                <h6 className="card-subtitle mb-2 text-muted">Total classes: {this.state.classes_total}</h6>              
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <td>ID</td>
                            <td>Class</td>
                            <td>Count</td>                                                       
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderClassesBody() }  
                    </tbody>
                </table>     
            </div>
            </div>               
        );
      }

      renderWeaponsBody() {
        return this.state.weapons_stats.map(item =>  {
            return (
                <tr key={ item.id }>
                    <td>{ item.id }</td>
                    <td >{ item.iname }</td>
                    <td>{ item.count }</td>                   
                </tr>                 
            );
        })
      }
      
      renderWeaponsTable() {
        return (
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Heroes Weapons</h5>
                <h6 className="card-subtitle mb-2 text-muted">Most popular: {this.state.weapons_popular.iname}</h6>    
                <h6 className="card-subtitle mb-2 text-muted">Total weapons: {this.state.weapons_total}</h6>              
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <td>ID</td>
                            <td>Weapon</td>
                            <td>Count</td>                                                       
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderWeaponsBody() }  
                    </tbody>
                </table>     
            </div>
            </div>               
        );
      }


    render() {
        return (
            <div className="container"> 
                <h2>Dashboard</h2>
                <div>Total Heroes in database: {this.state.heroes_total}</div>
                <div>Total Monsters in database: {this.state.monsters_total}</div>
                <div className="row">
                    <div className="col-sm">
                        { this.renderHRacesTable() }   
                    </div>
                    <div className="col-sm">
                        { this.renderClassesTable() }   
                    </div>
                    <div className="col-sm">
                        { this.renderWeaponsTable() }   
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        { this.renderMRacesTable() }   
                    </div>
                    <div className="col-sm">
                        { this.renderAbilitiesTable() }   
                    </div>
                    <div className="col-sm">
 
                    </div>
                </div>
                                
            </div>
        );
    }
}
export default Dashboard;