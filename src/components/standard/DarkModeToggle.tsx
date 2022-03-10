import React, { useContext } from "react";
import { ThemeContext } from "../providers/themeProvider";
import { SimpleSizeOrNumber } from "../utilities/simpleSize";
import StandardIcon from "./StandardIcon";

interface DarkModeToggleParamSet {
    iconSize?: SimpleSizeOrNumber;
}

export default function DarkModeToggle(props:DarkModeToggleParamSet)  {
    
    const { theme, toggleTheme } = useContext(ThemeContext);

    const iconSize:SimpleSizeOrNumber = props.iconSize ?? 'M';

    return (
        <div onClick={toggleTheme} style={{padding:'10px'}}>
            {theme === 'light' ? <StandardIcon id={'moon-solid-1234'} size={iconSize} /> : <StandardIcon id={'sun-regular-12345'} size={iconSize}/>}
        </div>
    );
}