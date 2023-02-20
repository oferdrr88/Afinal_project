import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <Header />
                    {/* <Home /> */}
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="home" element={<Home />} />
                        {/* <Route path="about" element={<Home />} /> */}
                    </Routes>
                    <Footer />
                </header>
            </div>
        </>
    );
}

export default App;
