import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../providers/sidebarProvider';
import { ThemeContext } from "../providers/themeProvider";
import DarkModeToggle from '../standard/DarkModeToggle';
import  StandardIcon  from '../standard/StandardIcon';
import classNames from './nav.module.scss';
import { NavigationData } from './navData';

export default function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { toggleSidebar} = useContext(SidebarContext);

  const color = theme === "light" ? "#333" : "#FFF";

  return (
    <div className={classNames.NavPositioning}>
      <div className={classNames.NavContent}>
        <div className={classNames.TopBarLeft}>
          <div style={{paddingRight:'10px', whiteSpace:'nowrap'}}>
            <Link to={NavigationData[0].path} title={NavigationData[0].title} style={{color}}><h1>{NavigationData[0].icon}Ben Holmes</h1></Link>
          </div>
        </div>
        <div className={classNames.TopBarRight}>
          { 
            NavigationData.map((item, index) => { 
              if (index !== 0){//remove home
                return (
                  <div style={{paddingRight:'10px'}}>
                    <Link to={item.path} title={item.title}><div style={{fontSize:'30px', color:color}}>{item.title}</div></Link>
                  </div>
                );
              }
            })
          }
          <div>
            <DarkModeToggle iconSize={'XL'}/>
          </div>
          
        </div>
        <div className={classNames.SideBarToggle}>
          <DarkModeToggle iconSize={'XL'}/>
          <div onClick={toggleSidebar}>
            <StandardIcon id='hamburger-menu-12345' size={"XXL"}/>
          </div>
        </div>
      </div>
    </div>
  );
}
