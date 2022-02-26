import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import About from '../pages/about';


export default function Nav() {


  return (
    <div className="Nav">
        <ul>
            <Link to={'/'}><Home/></Link>
            <Link to={'/projects'}><Projects/></Link>
            <Link to={'/about'}><About/></Link>
        </ul>  
    </div>
  );
}
