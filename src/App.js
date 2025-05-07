import React, { useState, useEffect } from 'react';
import './App.css';
import { NavBar, Portfolio } from './Components';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import { FiArrowUp } from 'react-icons/fi';

function App() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        setShowScrollButton(window.scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="App amethysta-regular">
            <NavBar />

            <div id="home">
                <Home />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="portfolio">
                <Portfolio />
            </div>
            <div id="contact">
                <ContactUs />
            </div>

            <Footer />

            {showScrollButton && (
                <button className="scrollToTopButton bg-gradient-to-br from-[#943855] to-[#E16363]"
                        onClick={handleScrollToTop}>
                    <FiArrowUp className="hover:animate-bounce"/>
                </button>
            )}
        </div>
    );
}

export default App;
