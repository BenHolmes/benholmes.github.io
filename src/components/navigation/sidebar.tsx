import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../providers/sidebarProvider";
import { ThemeContext } from "../providers/themeProvider";
import { NavigationData } from "./navData";
import styles from "./sidebar.module.scss";

export default function SideBar() {
    const {isExpanded, toggleSidebar} = useContext(SidebarContext);
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className={styles.SideBar}>
            <div className={styles.SideBarContent}>
                <button onClick={toggleSidebar}><h1>X</h1></button>
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
        </div>
    );
}