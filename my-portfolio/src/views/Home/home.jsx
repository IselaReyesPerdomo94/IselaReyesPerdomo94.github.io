import React, {Fragment, useState} from 'react';
import name from '../../img/name.png';
import Logo from '../../Components/Logo/logo';
import photoProfile from '../../img/photoProfile.JPG';
import MenuBars from '../../Components/Menu/Menu-bars/menuBars';
import MenuBurguer from '../../Components/Menu/MenuBurguer/menuBurguer';
import './home.css';

const Home = () => {
    const [menu, setMenu] = useState(false)

    const handleClickMenuBurguer = () => setMenu(!menu)

    const closeMenuBurguer = () => setMenu(false)
        return(
            <Fragment>
                <header className="header">
                    <Logo/>
                    <MenuBars onClick={handleClickMenuBurguer} display={menu}/>                    
                </header>
                <main className="main">
                    <figure className="box-name">
                        <img src={name} className="name" alt="Isela Reyes Perdomo"/>
                    </figure>
                    <h1>Front End Developer</h1>
                    <section className="hero" id="about">
                        <figure className="box-photo-profile">
                            <img src={photoProfile} className="photo-profile" alt="Isela, foto de perfil"/>
                        </figure>
                        <p className="about-me">
                            Hi! I am a Front Developer who also has a bachelor degree in Communication.  
                            Currently living in Mexico City and I’m looking for a remote job or something in between. 
                            My passion for code keep growing and I’m so excited to contribute and work with a team 
                            to create amazing things together.
                        </p>
                    </section>
                    <MenuBurguer 
                        display={menu} 
                        handleClickMenuBurguer={handleClickMenuBurguer} 
                        closeMenuBurguer={closeMenuBurguer}
                    />
                </main>
            </Fragment>
        )
}

export default Home;