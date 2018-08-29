import React, { Component } from 'react';

class Books extends Component {
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
            <div>
                <h2>This is Books</h2>
                <div>
                    Content of Books
                </div> 
            </div>
                                                    
        );
    }
}
export default Books;