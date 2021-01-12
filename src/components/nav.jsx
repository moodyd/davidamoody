import React from 'react';
import './app/app.css';

class Nav extends React.Component {
    render() {
        return (<nav>
            <div className="row align-items-center">
            <div className="col">
                <ul>
                    <li><a href="#work">Work</a></li> 
                    <li><a href="#personal">Personal</a></li>
                </ul>
            </div>
            <div className="col"></div>
            <div className="col">
                <ul>
                    <li><a href="#about">About</a></li> 
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            </div>
        </nav>);
    }
}
export default Nav