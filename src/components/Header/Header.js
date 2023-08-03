import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.Header}>
            <NavLink to={'testUseMemo'}>testUseMemo</NavLink>
            <NavLink to={'useCallback'}>useCallback</NavLink>
            <NavLink to={'useArray'}>useArray</NavLink>
            <NavLink to={'useFetch'}>useFetch</NavLink>
            <NavLink to={'useToggle'}>useToggle</NavLink>
        </div>
    );
};

export default Header;