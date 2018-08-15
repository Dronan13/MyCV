import React, { Component } from 'react';

class Papers extends Component {
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
                <h2>This is Papers</h2>
                <div>
                    Content of Papers
                </div>                                     
            </div>
        );
    }
}
export default Papers;