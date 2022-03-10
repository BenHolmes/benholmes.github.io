import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../providers/sidebarProvider";
import { ThemeContext } from "../providers/themeProvider";
import DarkModeToggle from "../standard/DarkModeToggle";
import StandardIcon from "../standard/StandardIcon";
import { NavigationData } from "./navData";
import styles from "./sidebar.module.scss";

export default function SideBar() {
    const {isExpanded, toggleSidebar} = useContext(SidebarContext);
    const {theme, toggleTheme} = useContext(ThemeContext);
    const color = theme === "light" ? "#333" : "#FFF";
    return (
        <div className={styles.SideBar}>
            <div className={styles.SideBarContent}>
                <div onClick={toggleSidebar}><StandardIcon id='cancel-menu-12345' size={'XL'}/></div>
                { 
                    NavigationData.map((item, index) => { 
                        if (index !== 0){//remove home
                            return (
                                <div style={{paddingRight:'10px'}} onClick={toggleSidebar}><Link to={item.path} title={item.title} style={{color}}><div style={{fontSize:'30px'}}>{item.title}</div></Link></div>
                            );
                        }
                    })
                }
                <div>
                    <DarkModeToggle iconSize={'XL'}/>
                </div>
            </div>
        </div>
    );
}