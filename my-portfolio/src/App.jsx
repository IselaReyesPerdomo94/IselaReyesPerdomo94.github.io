import React from 'react';
import './App.css';
import Home from './views/Home/home';
import Projects from './views/Projects/projects';
import Contact from './Components/Contact/contact';

function App() {
  return (
    <div className="App">     
    <Home/>   
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
