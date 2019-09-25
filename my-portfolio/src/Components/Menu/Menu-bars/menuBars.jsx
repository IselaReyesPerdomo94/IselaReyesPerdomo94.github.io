import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './menuBars.css';

const MenuBars = ({onClick, menu}) => {
    const colorClass = `${menu ? "colored-menu" : "not-colored-menu"}`
    return(
        <Fragment>
            <div className={colorClass}>
                <FontAwesomeIcon icon={faBars} className="menu-bars" onClick={onClick}/> 
            </div>
        </Fragment>
    )
}

export default MenuBars;