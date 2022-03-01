import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import About from '../pages/about';
import classNames from './nav.module.scss';

interface NavSet {
  themeState: string;
  themeChange: () => void;
}

export default function Nav(props:NavSet) {


  return (
    <div className={classNames.TopBar}>
        <div className={classNames.TopBarLeftHomepage} style={{padding:'10px'}}><Link to={'/'} title={'Home'} ><h1>Ben Holmes</h1></Link></div>
        <div className={classNames.TopBarRight}>
            <div style={{padding:'10px'}}><Link to={'/projects'} title={'Projects'} ><h1>Projects</h1></Link></div>
            <div style={{padding:'10px'}}><Link to={'/about'} title={'About'}><h1>About</h1></Link></div>
            <button onClick={props.themeChange}>{props.themeState === 'light' ? 'Dark' : 'Light'}</button>
            {/* <ColorSchemeToggle /> */}
        </div>
    </div>
  );
}
