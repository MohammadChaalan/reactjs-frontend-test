import React from 'react';
import About from './components/About';
import Compare from './components/Compare';
import Discover from './components/Discover';
import Donate from './components/Donate';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Questions from './components/Questions';
import User from './components/User';
import Varda from './components/Varda';

function App() {
  return (
    <div>
     
     <Navbar />
     <Home />
     <Discover />
     <Compare />
     <Donate />
     <Questions />
     <User />
     <Varda />
     <About />
     

    </div>
  );
}

export default App;
