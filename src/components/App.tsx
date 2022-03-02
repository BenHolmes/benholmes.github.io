import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import Nav from './navigation/nav';
import Footer from './navigation/footer';
import { ThemeContext } from "./providers/themeProvider";
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import classNames from './App.module.scss';

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <Router>
      <div className={classNames.App} data-theme={theme}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>   
  );
}
