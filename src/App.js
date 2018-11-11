import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <br/><br/>
            <Footer />
        </div>
    );
  }
}

export default App;
