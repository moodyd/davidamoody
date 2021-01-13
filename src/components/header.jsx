import React from 'react';
import './app/app.css';

const refreshPage = async (e) =>{
    window.location.reload();
    e.preventDefault();
}

const header = (<header>
    <div className="row align-items-centers">
        <div id="name" className="col">
            <a href="/" onClick={refreshPage}><h2 >David Armstrong Moody</h2></a>
        </div>
    </div>
</header>);



class Header extends React.Component {
    render() {
        return (header);
    }
}

export default Header
