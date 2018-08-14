import React, { Component } from 'react';

class Education extends Component {
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
                <h2>This is Education</h2>
                <div>
                    Content of Education
                </div>                                     
            </div>
        );
    }
}
export default Education;