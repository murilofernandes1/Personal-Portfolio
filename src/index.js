import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import Header from './sections/Header';
import Stack from './sections/Stack'
import Projects from './sections/Projects'; 
import Contact from './sections/Contact';
import About from './sections/About';
import Footer from './sections/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Stack />
    <Projects/>
    <Contact/>
    <About/>
    <Footer/>
  </React.StrictMode>
);

