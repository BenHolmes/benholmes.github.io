import React, { useContext, useState } from "react";
import { SidebarContext } from "../providers/sidebarProvider";
import styles from "./sidebar.module.scss";

export default function SideBar() {
    const {isExpanded, toggleSidebar} = useContext(SidebarContext);

    return (
        <div className={styles.SideBar}>
            <button onClick={toggleSidebar}>hi</button>
        </div>
    );
}