import React from 'react';
import { BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import useLocalStorage from 'use-local-storage'
import Nav from './navigation/nav';
import Footer from './navigation/footer';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import classNames from './App.module.scss';

export default function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <Router>
      <div className={classNames.App} data-theme={theme}>
        <Nav themeState={theme} themeChange={switchTheme} />
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
