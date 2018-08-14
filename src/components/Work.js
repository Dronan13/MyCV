import React, { Component } from 'react';

class Work extends Component {
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
                <h2>This is Work</h2>
                <div>
                    Content of Work
                </div>                                     
            </div>
        );
    }
}
export default Work;