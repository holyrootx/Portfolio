
import './App.css'
// import './index.css';

// src/App.jsx
import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Intro from './components/Intro';
import Profile from './components/Profile';
import Skills from './components/Skills'
import Archive from './components/Archive';
import Projects from './components/Projects';
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
    return (
    <>
      <Header/>
      <Intro/>
      <Profile/>
      <Skills/>
      <Archive/>
      <Projects/>
      <ScrollToTopButton />
    
    </>
    );
}

export default App;
