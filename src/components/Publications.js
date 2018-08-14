import React, { Component } from 'react';

class Publications extends Component {
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
                <h2>This is Publications</h2>
                <div>
                    Content of Publications
                </div>                                     
            </div>
        );
    }
}
export default Publications;