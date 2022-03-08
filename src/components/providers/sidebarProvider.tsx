import React, { useState } from "react";
import styles from "./sidebar.module.scss";

type SidebarContext = { isExpanded: boolean; toggleSidebar: () => void };

export const SidebarContext = React.createContext<SidebarContext>(
  {} as SidebarContext
);

export const SidebarProvider: React.FC = ({ children }) => {

    const [isExpanded, setSidebarState] = useState<boolean>(false);

    const toggleSidebar = () => {
        setSidebarState(isExpanded === true ? false : true);
    };

    return (
        <SidebarContext.Provider value={{ isExpanded, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
}
