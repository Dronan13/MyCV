import React, { Component } from 'react';
import Work from './Resume/Work';
import Education from './Resume/Education';

class Resume extends Component {
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
                <h2>This is Resume</h2>
                <div>
                    <Work/>
                    <br/>
                    <Education/>
                </div>                                     
            </div>
        );
    }
}
export default Resume;