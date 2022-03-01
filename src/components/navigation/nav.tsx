import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../providers/themeProvider";
import classNames from './nav.module.scss';

export default function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={classNames.TopBar}>
        <div className={classNames.TopBarLeftHomepage} style={{padding:'10px'}}><Link to={'/'} title={'Home'} ><h1>Ben Holmes</h1></Link></div>
        <div className={classNames.TopBarRight}>
            <div style={{padding:'10px'}}><Link to={'/projects'} title={'Projects'} ><h1>Projects</h1></Link></div>
            <div style={{padding:'10px'}}><Link to={'/about'} title={'About'}><h1>About</h1></Link></div>
            <div style={{padding:'10px'}}>
              {/* <button onClick={props.themeChange}>{props.themeState === 'light' ? 'Dark' : 'Light'}</button> */}
              <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "dark" : "light"} mode
              </button>
            </div>
            
            {/* <ColorSchemeToggle /> */}
        </div>
    </div>
  );
}
