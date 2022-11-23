import React from 'react';
import Nav from './Nav';
import classes from "./Header.module.css"

const Header = () => {
    return (
        <header className={classes.header}>
            <h2 className={classes.h2}>Poke App</h2>
            <Nav/>
        </header>
    );
};

export default Header;