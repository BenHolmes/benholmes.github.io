import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import Nav from './navigation/nav';
import Footer from './navigation/footer';
import { ThemeContext } from "./providers/themeProvider";
import {SidebarContext} from './providers/sidebarProvider';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import styles from './App.module.scss';
import SideBar from './navigation/sidebar';


export default function App() {
  const { theme } = useContext(ThemeContext);
  const { isExpanded } = useContext(SidebarContext);
  return (
    <Router>
       
      <div id="app" className={styles.App} data-theme={theme}>
        {isExpanded ? <SideBar />: <></>}
        <Nav />
        <div id='app-content' className={styles.Content}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </div>
        
        <Footer/>
        

      </div>
      
    </Router>   
  );
}