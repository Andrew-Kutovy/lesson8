import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import style from './useFetchPage.module.css'

const UseFetchPage = () => {
    return (
        <div>
            <div className={style.navy}>
                <NavLink to={'users'}>users</NavLink>
                <NavLink to={'comments'}>comments</NavLink>
                <NavLink to={'posts'}>posts</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export default UseFetchPage;