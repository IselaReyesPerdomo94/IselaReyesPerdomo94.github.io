import React from 'react';
import './App.css';
import Home from './views/Home/home';
import Projects from './views/Projects/projects';
import ContactView from './views/ContactView/contact';
import Paws from './Components/Paws/paws';
import Skills from './views/Skills/skills';

function App() {
  return (
    <div className="App">   
      <Paws/>  
      <Home/>   
      <Skills/>
      <Projects/>
      <ContactView/>
    </div>
  );
}

export default App;
