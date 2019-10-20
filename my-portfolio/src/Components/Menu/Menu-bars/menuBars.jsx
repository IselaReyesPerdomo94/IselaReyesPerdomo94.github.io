import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './menuBars.css';

const MenuBars = ({onClick}) => {
    return(
        <Fragment>
            <div className="colored-menu">
                <FontAwesomeIcon icon={faBars} className="menu-bars" onClick={onClick}/> 
            </div>
        </Fragment>
    )
}

export default MenuBars;