import React, { Component } from 'react';
const $ = window.$;

class CreateHero extends Component {
    constructor() {
        super();
           /* Initialize the state. */
           this.state = {

              races:null,
              classes:null,
              weapons:null,

              str:null,
              int:null,
              dex:null,

              f_str:null,
              f_int:null,
              f_dex:null,

              newHero: {
                'firstname' : '',
                'lastname' : '',
                'race_id' : '',
                'class_id' : '',
                'weapon_id' : '',
                'strength' : '',
                'intelligence' : '',
                'dexterity' : '',
              }
            }
         
        //Boilerplate code for binding methods with `this`
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.onRoll = this.onRoll.bind(this);
      }

    componentDidMount() {
        this.getRaces();
        this.getClasses(1);
        this.getWeapons(1);
      }

    handleSubmit(e) {
        e.preventDefault();    
            this.state.newHero['firstname'] = $('[name="firstname"]').val();
            this.state.newHero['lastname'] = $('[name="lastname"]').val();

            this.state.newHero['race_id'] = $('[name="race_id"]').val();
            this.state.newHero['class_id'] = $('[name="class_id"]').val();
            this.state.newHero['weapon_id'] = $('[name="weapon_id"]').val();

            this.state.newHero['strength'] = $('[name="strength"]').val();
            this.state.newHero['intelligence'] = $('[name="intelligence"]').val();
            this.state.newHero['dexterity'] = $('[name="dexterity"]').val();
            
            
            fetch('api/heroes?firstname='+this.state.newHero['firstname']+
            '&lastname='+this.state.newHero['lastname']+
            '&race_id='+this.state.newHero['race_id']+
            '&class_id='+this.state.newHero['class_id']+
            '&weapon_id='+this.state.newHero['weapon_id']+
            '&strength='+this.state.newHero['strength']+
            '&intelligence='+this.state.newHero['intelligence']+
            '&dexterity='+this.state.newHero['dexterity'],{
            method: 'POST',
          })
          .catch(function (error) {

            console.log(error);
          });
    }

    /* This method dynamically accepts inputs and stores it in the state */
    handleInput(key, e) {
        
        /*Duplicating and updating the state */
        var state = Object.assign({}, this.state.newHero); 
        state[key] = e.target.value;
        if(key=='race_id')
        {
            this.getClasses(e.target.value) 
        }
        if(key=='class_id')
        {
            this.getWeapons(e.target.value) 
        }
        this.setState({newHero: state });
    }

    getRaces()
      {
        fetch('api/races')
            .then(results => results.json())
            .then(results => this.setState({'races' : results}))
            .catch(function (error) {
                console.log(error);
              });
      }

      getClasses($id)
      {
        fetch('api/classes/'+$id)
            .then(results => results.json())
            .then(results => this.setState({'classes' : results}))
            .catch(function (error) {
                console.log(error);
              });
      }

      getWeapons($id)
      {
        fetch('api/weapons/'+$id)
            .then(results => results.json())
            .then(results => this.setState({'weapons' : results}))
            .catch(function (error) {
                console.log(error);
              });
      }

      onRoll(key)
      {
        fetch('api/rollhstat')
            .then(results => results.json())
            .then(results => 
                {
                    if(key=='str')
                    {
                        this.setState({'str' : results})
                        this.setState({'f_str' : this.state.str[0]+this.state.str[1]+this.state.str[2]})
                    }
                    if(key=='int')
                    {
                        this.setState({'int' : results})
                        this.setState({'f_int' : this.state.int[0]+this.state.int[1]+this.state.int[2]})
                    }
                    if(key=='dex')
                    {
                        this.setState({'dex' : results})
                        this.setState({'f_dex' : this.state.dex[0]+this.state.dex[1]+this.state.dex[2]})
                    }                    
                })
            .catch(function (error) {
                console.log(error);
              });
      }

      showStr()
      {
          if(this.state.str)
          {                
              return (<table>
                        <tbody>
                            <tr>
                                <td>{this.state.str[0]}</td> 
                                <td>{this.state.str[1]}</td> 
                                <td>{this.state.str[2]}</td> 
                                <td>{this.state.str[3]}</td> 
                            </tr>
                        </tbody>
                    </table>);     
          }
          else {return ('')}         
      }

      showInt()
      {
          if(this.state.int)
          {                
              return (<table>
                        <tbody>
                            <tr>
                                <td>{this.state.int[0]}</td> 
                                <td>{this.state.int[1]}</td> 
                                <td>{this.state.int[2]}</td> 
                                <td>{this.state.int[3]}</td> 
                            </tr>
                        </tbody>
                    </table>);     
          }
          else {return ('')}         
      }

      showDex()
      {
          if(this.state.dex)
          {                
              return (<table>
                        <tbody>
                            <tr>
                                <td>{this.state.dex[0]}</td> 
                                <td>{this.state.dex[1]}</td> 
                                <td>{this.state.dex[2]}</td> 
                                <td>{this.state.dex[3]}</td> 
                            </tr>
                        </tbody>
                    </table>);     
          }
          else {return ('')}         
      }

      showRaces()
      {
          if(this.state.races)
          {
              return this.state.races.map(item =>  {
                  return (<option value={item.id} key={item.id}>{item.name}</option>);
              })
          }
          else {return (<option>Not loaded</option>);}    
      }

      showClasses()
      {
          if(this.state.classes)
          {
              return this.state.classes.map(item =>  {
                  return (<option value={item.id} key={item.id}>{item.name}</option>);
              })
          }
          else {return (<option>Not loaded</option>);}    
      }

      showWeapons()
      {
          if(this.state.weapons)
          {
              return this.state.weapons.map(item =>  {
                  return (<option value={item.id} key={item.id}>{item.name}</option>);
              })
          }
          else {return (<option>Not loaded</option>);}    
      }

    render() {
        return (
            <div className="container">
                    <h1>Create Hero</h1>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                        <div className="col-sm-2"><label> Firstname: </label></div>                   
                            <div className="col-sm-4">
                                <input type="text" className="form-control" name='firstname' onChange={(e)=>this.handleInput('firstname',e)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-2"><label> Lastname:</label></div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" name='lastname' onChange={(e)=>this.handleInput('lastname',e)} />
                            </div>   
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-2"><label> Race: </label></div>
                            <div className="col-sm-4">
                                <select className="form-control form-control-sm" name='race_id' onChange={(e)=>this.handleInput('race_id',e)}>
                                    {this.showRaces()}
                                </select>
                            </div>   
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-2"><label> Class: </label></div>
                            <div className="col-sm-4">
                                <select className="form-control form-control-sm" name='class_id' onChange={(e)=>this.handleInput('class_id',e)}>
                                    {this.showClasses()}
                                </select>
                            </div>            
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-2"><label> Weapon: </label></div>
                            <div className="col-sm-4">
                                <select className="form-control form-control-sm" name='weapon_id' onChange={(e)=>this.handleInput('weapon_id',e)}>
                                    {this.showWeapons()}
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-2"><label> Strength: </label> </div>
                            <button type="button" className="btn btn-info btn-sm" onClick={()=>this.onRoll('str')}>Roll</button>
                            <div className="col-sm-4">                                             
                                <input type="text" value={this.state.f_str} className="form-control" name='strength' onChange={(e)=>this.handleInput('strength',e)} readOnly/>  
                            </div>
                            <div id="str">{this.showStr()}</div>
                        </div>
                        <div className="form-group row">
                        <div className="col-sm-2"><label> Intelligence: </label></div>
                            <button type="button" className="btn btn-info btn-sm" onClick={()=>this.onRoll('int')}>Roll</button>
                            <div className="col-sm-4">
                                <input type="text" value={this.state.f_int} className="form-control" name='intelligence' onChange={(e)=>this.handleInput('intelligence',e)} readOnly/>
                            </div>
                            <div id="int">{this.showInt()}</div>
                        </div>
                        <div className="form-group row">
                        <div className="col-sm-2"><label> Dexterity: </label></div>
                            <button type="button" className="btn btn-info btn-sm" onClick={()=>this.onRoll('dex')}>Roll</button>
                            <div className="col-sm-4">                               
                                <input type="text" value={this.state.f_dex} className="form-control" name='dexterity' onChange={(e)=>this.handleInput('dexterity',e)} readOnly/> 
                            </div>
                            <div id="dex">{this.showDex()}</div>
                        </div>
                        <input type="submit" className="btn btn-primary btn-sm" value="Submit" />

                    </form>
            </div>
        );
    }
}
export default CreateHero;