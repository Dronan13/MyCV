import React, { Component } from 'react';
import Header from './Resume/Header';
import Work from './Resume/Work';
import Education from './Resume/Education';

class Resume extends Component {
    render() {
        return (
            <div className="container"> 
                <h3 className="text-center">Resume</h3>
                <div>
                    <Header/>
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