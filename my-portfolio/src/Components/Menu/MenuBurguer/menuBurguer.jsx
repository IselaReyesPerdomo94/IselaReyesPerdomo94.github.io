import React, {Fragment} from 'react';
import './menuBurguer.css';

const MenuBurguer = () =>{
        return(
            <Fragment>
                <nav className="nav-menu-burguer">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Project</li>
                    </ul>
                </nav>
            </Fragment>
        )
}

export default MenuBurguer