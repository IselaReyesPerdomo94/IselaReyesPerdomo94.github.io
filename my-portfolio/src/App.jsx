import React from 'react';
import './App.css';
import Home from './views/Home/home';
import Projects from './views/Projects/projects';
import ContactView from './views/ContactView/contact';

function App() {
  return (
    <div className="App">     
    <Home/>   
    <Projects/>
    <ContactView/>
    </div>
  );
}

export default App;
