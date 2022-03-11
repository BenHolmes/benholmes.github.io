import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../providers/themeProvider';
import classNames from './footer.module.scss';
import { NavigationData } from './navData';

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const color = theme === "dark" ? "#333" : "#FFF";
  const footerColor = theme === "light" ? "#333" : "#FFF";

  return (
    <div className={classNames.footerPosition} style={{backgroundColor:footerColor}}>
      <div className={classNames.footerContent}>
        <div className={classNames.TopBarLeft}>

        </div>
        <div className={classNames.TopBarRight}>
          { 
            NavigationData.map((item, index) => {  
              return (
                <div key={index} style={{padding:'10px'}}>
                  <Link to={item.path} title={item.title} style={{color:color}}>{item.title}</Link>
                </div>
              ); 
            })
          }
        </div>
      </div>
    </div>
  );
}
