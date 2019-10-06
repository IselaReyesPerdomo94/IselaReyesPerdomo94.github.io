import React, {Fragment, useState} from 'react';
import Logo from '../../Components/Logo/logo';
import MenuBars from '../../Components/Menu/Menu-bars/menuBars';
import MenuBurguer from '../../Components/Menu/MenuBurguer/menuBurguer';
import './home.css';
import name from '../../img/name.png';
import photoProfile from '../../img/photoProfile.JPG';

const Home = () => {
    const [menu, setMenu] = useState(false)

    const handleClickMenuBurguer = () => {
        setMenu(!menu);
    }
        return(
            <Fragment>
                <header className="header">
                    <Logo/>
                    <MenuBars onClick={handleClickMenuBurguer} display={menu}/>                    
                </header>
                <main className="main">
                <figure className="box-name">
                    <img src={name} className="name"/>
                </figure>
                <h1>Front End Developer</h1>
                <figure className="box-photo-profile">
                    <img src={photoProfile} className="photo-profile"/>
                </figure>
                        <MenuBurguer display={menu} handleClickMenuBurguer={handleClickMenuBurguer}/>

                </main>
                <footer>

                </footer>
            </Fragment>
        )
}

export default Home;