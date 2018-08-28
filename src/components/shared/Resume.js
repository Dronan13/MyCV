import React, { Component } from 'react';
import Owner from './Resume/Owner';
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
                <h3 className="text-center">Resume</h3>
                <div>
                    <Owner/>
                    <br/>
                    <Work/>
                    <br/>
                    <Education/>
                </div>                                     
            </div>
        );
    }
}
export default Resume;