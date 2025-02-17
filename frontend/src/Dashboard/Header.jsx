import React from "react";
import { BsFillBellFill, BsFillEnvelopeFill, BsJustify, BsPersonCircle, BsSearch } from 'react-icons/bs';

function Header({ openSideBar }) {
    return (
        <header className="header">
            <div className="menu-icon">
                <BsJustify className="ion" onClick={openSideBar} />
            </div>
            <div className="header-left">
                <BsSearch className="icon" />
            </div>
            <div className="header-right">
                <BsFillBellFill className="icon" />
                <BsFillEnvelopeFill className="icon" />
                <BsPersonCircle className="icon" />
            </div>
        </header>
    );
}
export default Header;
