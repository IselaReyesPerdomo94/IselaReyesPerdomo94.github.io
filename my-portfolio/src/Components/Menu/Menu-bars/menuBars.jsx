import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './menuBars.css';

const Menu = () => {
    return(
        <FontAwesomeIcon icon={faBars} className="menu-bars"/> 
    )
}

export default Menu;