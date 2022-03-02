import React from 'react';
import { Link } from 'react-router-dom';
import classNames from './footer.module.scss';

export default function Footer() {


  return (
    <div className={classNames.footer}>
        <div style={{padding:'10px'}}><Link to={'/'}>home</Link></div>
        <div style={{padding:'10px'}}><Link to={'/projects'}>projects</Link></div>
        <div style={{padding:'10px'}}><Link to={'/about'}>about</Link></div>
    </div>
  );
}
