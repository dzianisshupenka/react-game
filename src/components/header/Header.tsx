import React from 'react';

import { NavLink } from 'react-router-dom';

const Header:React.FC = () => {
    return (
        <div className="main-header">
            <NavLink className="main-header-link" to="/">MAIN</NavLink>
            <NavLink className="main-header-link" to="/game">GAME</NavLink>
            <NavLink className="main-header-link" to="/settings">SETTINGS</NavLink>
            <NavLink className="main-header-link" to="/help">HELP</NavLink>
        </div>
    );
};

export default Header;
