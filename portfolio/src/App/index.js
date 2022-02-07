import React, {useState} from 'react';
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from "../Shared/Theme.js"
import Header from './Header';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () =>{
        theme==='light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <ThemeProvider theme={theme==='dark' ? darkTheme : lightTheme}>
            <Header theme={theme} toggleTheme={toggleTheme}/> 
            <div id="content">
                <Home/>
                <About/>
                <Portfolio />
                <Contact />
            </div>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;