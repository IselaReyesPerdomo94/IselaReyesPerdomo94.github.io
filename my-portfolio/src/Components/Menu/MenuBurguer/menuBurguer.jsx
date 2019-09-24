import React, {Component, Fragment} from 'react';
import './menuBurguer.css';

class MenuBurguer extends Component {
    render(){
        const {displayMenu} = this.props;
        const classesNav = `nav-menu-burguer ${displayMenu ? "open-menu-burguer" : "close-menu-burguer"}`
        return(
            <Fragment>
                <nav className={classesNav}>
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
}

export default MenuBurguer