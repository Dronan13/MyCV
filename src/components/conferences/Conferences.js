import React, { Component } from 'react';

class Conferences extends Component {
    constructor() {
   
        super();
        this.state = 
        {
            'heroes_total': '',    
        };
      }

    componentDidMount() 
    {
    }

    render() {
        return (
            <div className="container"> 
                <h2>This is Conferences</h2>
                <div>
                    Content of Conferences
                </div>                                     
            </div>
        );
    }
}
export default Conferences;