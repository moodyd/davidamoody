import React from 'react';
import './app/app.css';

class Nav extends React.Component {
    render() {
        return (<nav>
            <div className="container-fluid">
                <div className="row align-items-start ">
                    <div id="left" className="col ">
                        <ul>
                            <li><a href="#work" className="topNav">Work</a></li> 
                            <li><a href="#personal" className="topNav">Personal</a></li>
                        </ul>
                    </div>
                    <div id="right" className="col">
                        <ul>
                            <li><a href="#about" className="topNav">About</a></li> 
                            <li><a href="#contact" className="topNav">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>);
    }
}
export default Nav