import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../providers/themeProvider";
import classNames from './nav.module.scss';

export default function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={classNames.TopBar}>
      <div className={classNames.TopBarLeft}>
        <div style={{paddingRight:'10px', whiteSpace:'nowrap'}}><Link to={'/'} title={'Home'} ><h1>Ben Holmes</h1></Link></div>
      </div>
      <div className={classNames.TopBarRight}>
        <div style={{paddingRight:'10px'}}><Link to={'/projects'} title={'Projects'} ><div style={{fontSize:'30px'}}>Projects</div></Link></div>
        <div style={{paddingRight:'10px'}}><Link to={'/about'} title={'About'}><div style={{fontSize:'30px'}}>About</div></Link></div>
        <div>
            <button onClick={toggleTheme}>
              <h1>{theme === "light" ? "dark" : "light"}</h1>
            </button>
        </div>
      </div>
    </div>
  );
}