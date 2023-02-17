import React from 'react';
import logo from './logo.svg';

import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './page/Home';

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="home" element={<Home />} />
                        {/* <Route path="about" element={<Home />} /> */}
                    </Routes>
                    <Footer />
                    {/* <Home /> */}
                </header>
            </div>
        </>
    );
}

export default App;
