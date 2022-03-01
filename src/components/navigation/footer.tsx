import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import About from '../pages/about';
import classNames from './footer.module.scss';

export default function Nav() {


  return (
    <div className={classNames.footer}>
        <div  style={{padding:'10px'}}><Link to={'/'}><Home/></Link></div>
        
            <div style={{padding:'10px'}}><Link to={'/projects'}><Projects/></Link></div>
            <div style={{padding:'10px'}}><Link to={'/about'}><About/></Link></div>
        
    </div>
  );
}
