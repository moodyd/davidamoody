import React from 'react';
import './app.css';
import Header from '../header'
import Nav from '../nav'
import Main from '../main'
import Footer from '../footer'

const page = [
    <Header key="header"/>, 
    <Nav key="nav"/>,
    <Main key="main"/>,
    <Footer key="footer"/>
]
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (page);
    }
}

export default App

