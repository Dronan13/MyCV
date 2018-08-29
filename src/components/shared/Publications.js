import React, { Component } from 'react';
import Books from './Publications/Books';
import Chapters from './Publications/Chapters';
import Conferences from './Publications/Conferences';
import Papers from './Publications/Papers';

class Publications extends Component {
    render() {
        return (
            <div className="container"> 
                <h2 className="text-center">Publications</h2>  
                <Papers/>
                <Conferences/>
                <Books/>
                <Chapters/>                                  
            </div>
        );
    }
}
export default Publications;