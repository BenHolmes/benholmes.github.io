import React from 'react';
import { Link } from 'react-router-dom';
import classNames from './footer.module.scss';
import { NavigationData } from './navData';

export default function Footer() {


  return (
    <div className={classNames.footerPosition}>
      <div className={classNames.footerContent}>
        <div className={classNames.TopBarLeft}>

        </div>
        <div className={classNames.TopBarRight}>
          { 
            NavigationData.map((item, index) => {  
              return (
                <div style={{padding:'10px'}}><Link to={item.path} title={item.title}>{item.title}</Link></div>
              ); 
            })
          }
        </div>
      </div>
    </div>
  );
}
