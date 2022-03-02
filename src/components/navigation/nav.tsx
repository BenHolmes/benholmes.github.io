import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../providers/themeProvider";
import classNames from './nav.module.scss';

export default function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={classNames.TopBar}>
        <div className={classNames.TopBarLeftHomepage} style={{whiteSpace:'nowrap'}}><Link to={'/'} title={'Home'} ><h1>Ben Holmes</h1></Link></div>
        <div className={classNames.TopBarRight}>
            <div style={{padding:'10px'}}><Link to={'/projects'} title={'Projects'} ><h1>Projects</h1></Link></div>
            <div style={{padding:'10px'}}><Link to={'/about'} title={'About'}><h1>About</h1></Link></div>
            <h1 style={{padding:'10px'}}>
                <button style={{padding:'10px'}} onClick={toggleTheme}>
                  <h1>{theme === "light" ? "dark" : "light"}</h1>
                </button>
            </h1>
        </div>
    </div>
  );
}
