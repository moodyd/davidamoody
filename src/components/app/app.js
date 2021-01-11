import React from 'react';
import './app.css';
import Header from '../header'
import Nav from '../nav'
import Main from '../main'
import Footer from '../footer'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return ([
            <Header key="header"/>, 
            <Nav key="nav"/>,
            <Main key="main"/>,
            <Footer key="footer"/>
        ]);
    }
}

export default App

