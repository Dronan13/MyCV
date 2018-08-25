import React, { Component } from 'react';
import About from './About';
import Contacts from './Contacts';
import Questions from './Questions';
import Projects from './Projects';



class Home extends Component {
     render() {
        
        return (
            <div>
                <div className="bgimg-1" id="#top">
                    <div className="caption-main">
                        <span className="border">SOME FANCY FRAZE</span>
                        <hr className="hr-light mt-5"/>
                        <h5 className="text-uppercase mb-5 white-text"><strong>Researcher and developer</strong></h5>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="btn btn-outline-light w100" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-light w100" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-light w100" href="#contacts">Contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-light w100" href="#questions">Questions</a>
                            </li>
                        </ul>
                         
                    </div>
                </div>

                <div id="about"></div>
                <About/>

                <div className="bgimg-5">
                <div className="caption">
                    <span className="border">ANOTHER SMART FRAZE</span>
                </div>
                </div>

                <div id="projects"></div>
                <Projects/>

                <div className="bgimg-2">
                <div className="caption">
                    <span className="border">ANOTHER SMART FRAZE</span>
                </div>
                </div>

                <div id="contacts"></div>
                <Contacts/>

                <div className="bgimg-3">
                <div className="caption">
                    <span className="border">ONE MORE MUCH MORE WISE FRAZE</span>
                </div>
                </div>

                <div id="questions"></div>
                <Questions/>

                <div className="bgimg-1 bgimg-4">
                <div className="caption">
                    <a href="#top"><span className="border">THANK YOU &#9651;</span></a>
                </div>
                </div>        
            </div>
        );
    }
}
export default Home;