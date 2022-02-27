import React from 'react';
import { BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import Nav from './navigation/nav';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import './App.module.scss';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </Router>   
  );
}
