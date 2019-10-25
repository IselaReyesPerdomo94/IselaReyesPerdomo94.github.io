import React from 'react';
import './App.css';
import Home from './views/Home/home';
import Projects from './views/Projects/projects';
import ContactView from './views/ContactView/contact';
import Skills from './views/Skills/skills';

function App() {
  return (
    <div className="App">     
    <Home/>   
    <Skills/>
    <Projects/>
    <ContactView/>
    </div>
  );
}

export default App;
