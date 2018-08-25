import React, { Component } from 'react';

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
                    Content of Resume
                </div>                                     
            </div>
        );
    }
}
export default Resume;