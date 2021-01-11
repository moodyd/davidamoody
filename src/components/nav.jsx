import React from 'react';
import './app/app.css';

class Nav extends React.Component {
    render() {
        return (<nav>
            <div class="row align-items-center">
            <div class="col">
                <ul>
                <li><a href="#work">Work</a></li> 
                <li><a href="#personal">Personal</a></li>
                </ul>
            </div>
            <div class="col"></div>
            <div class="col">
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