import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/game">Game</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <NavLink to="/help">Help</NavLink>
        </div>
    );
};

export default Header;
