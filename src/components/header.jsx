import React from 'react';
import './app/app.css';


const header = (<header>
    <div className="row align-items-centers">
        <div className="col">
            <h2>David Armstrong Moody</h2>
        </div>
    </div>
</header>);

class Header extends React.Component {
    render() {
        return (header);
    }
}

export default Header
