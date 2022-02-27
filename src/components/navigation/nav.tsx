import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import About from '../pages/about';
import ClassNames from './nav.module.scss';


export default function Nav() {


  return (
    <div className={ClassNames.TopBar}>
        <div className={ClassNames.TopBarLeftHomeButton}><Link to={'/'}><Home/></Link></div>
        <div className={ClassNames.TopBarRight}>
            <Link to={'/projects'}><Projects/></Link>
            <Link to={'/about'}><About/></Link>
        </div>
    </div>
  );
}
