import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../providers/sidebarProvider';
import { ThemeContext } from "../providers/themeProvider";
import classNames from './nav.module.scss';
import { NavigationData } from './navData';

export default function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isExpanded, toggleSidebar} = useContext(SidebarContext);

  return (
    <div className={classNames.NavPositioning}>
      <div className={classNames.NavContent}>
        <div className={classNames.TopBarLeft}>
          <div style={{paddingRight:'10px', whiteSpace:'nowrap'}}><Link to={NavigationData[0].path} title={NavigationData[0].title}><h1>Ben Holmes</h1></Link></div>
        </div>
        <div className={classNames.TopBarRight}>
          { 
            NavigationData.map((item, index) => { 
              if (index !== 0){//remove home
                return (
                  <div style={{paddingRight:'10px'}} onClick={toggleSidebar}><Link to={item.path} title={item.title} ><div style={{fontSize:'30px'}}>{item.title}</div></Link></div>
                );
              }
            })
          }
          <div>
            <button onClick={toggleTheme}>
              <h1>{theme === "light" ? "dark" : "light"}</h1>
            </button>
          </div>
          
        </div>
        <div className={classNames.SideBarToggle}>
          <button onClick={toggleTheme}>
            <h1>{theme === "light" ? "dark" : "light"}</h1>
          </button>
          <button onClick={toggleSidebar}>
            <h1>=</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
