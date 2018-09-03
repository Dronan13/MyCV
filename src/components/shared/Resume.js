import React, { Component } from 'react';
import Header from './Resume/Header';
import Work from './Resume/Work';
import Education from './Resume/Education';
import Language from './Resume/Language';

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
                    <br/>
                    <Language/>
                </div>                                     
            </div>
        );
    }
}
export default Resume;