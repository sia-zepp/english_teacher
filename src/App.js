// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Lessons from './components/Lessons';
import Services from './components/Services';
import Questions from './components/Questions';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Lessons />
            <Services />
            <About />
            <Questions />
            <Reviews />
            <Footer />
        </div>
    );
}

export default App;
