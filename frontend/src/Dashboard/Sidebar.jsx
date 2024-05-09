// Sidebar.jsx

import React from "react";
import {
    BsCart3, BsFillArchiveFill, BsFillGearFill, BsFillGrid3X3GapFill
} from "react-icons/bs";
import './App.css';

function Sidebar({openSidebarToggle, openSidebar}) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":""}>
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <BsCart3 className="icon_header" />SHOP
                </div>
                <span className="icon close_icon" onClick={openSidebar}></span>
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillArchiveFill className="icon" />Dashboard
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillGearFill className="icon" />List of Users
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillGrid3X3GapFill className="icon" />Course
                    </a>
                </li>
                
            </ul>
        </aside>
    )
}

export default Sidebar;
