import React, {Fragment} from 'react';
import './menuBurguer.css';

const MenuBurguer = (props) =>{
        const {display, closeMenuBurguer,handleClickMenuBurguer} = props;
        const menuDisplayed = `nav-menu-burguer ${display ? "open" :"close"}`
        return(
            <Fragment>
                <nav className={menuDisplayed}>
                    <span className={display ? "": "hidden ex"} onClick={handleClickMenuBurguer}>X</span>
                    <ul className={display ? "": "hidden"}>
                        <li className={display ? "": "hidden"}>
                            <a href="#about" onClick={closeMenuBurguer}>About</a>
                        </li>
                        <li className={display ? "": "hidden"}>
                            <a href="#projects" onClick={closeMenuBurguer}>Projects</a>
                        </li>
                        <li className={display ? "": "hidden"}>Contact</li>
                    </ul>
                </nav>
            </Fragment>
        )
}

export default MenuBurguer