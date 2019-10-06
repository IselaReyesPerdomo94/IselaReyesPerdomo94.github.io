import React, {Fragment} from 'react';
import './menuBurguer.css';

const MenuBurguer = (props) =>{
        const {display, closeMenu, handleClickMenuBurguer} = props;
        const menuDisplayed = `nav-menu-burguer ${display ? "open" :"close"}`
        return(
            <Fragment>
                <nav className={menuDisplayed}>
                    <span className={display ? "": "hidden ex"} onClick={handleClickMenuBurguer}>X</span>
                    <ul className={display ? "": "hidden"}>
                        <li className={display ? "": "hidden"}>Home</li>
                        <li className={display ? "": "hidden"}>About</li>
                        <li className={display ? "": "hidden"}>Skills</li>
                        <li className={display ? "": "hidden"}>Project</li>
                    </ul>
                </nav>
            </Fragment>
        )
}

export default MenuBurguer