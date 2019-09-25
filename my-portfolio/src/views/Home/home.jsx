import React, {Fragment, useState} from 'react';
import Logo from '../../Components/Logo/logo';
import MenuBars from '../../Components/Menu/Menu-bars/menuBars';
import MenuBurguer from '../../Components/Menu/MenuBurguer/menuBurguer';
import './home.css';

const Home = () => {
    const [menu, setMenu] = useState(false)

    const handleClickMenuBurguer = () => {
        setMenu(!menu);
    }
        return(
            <Fragment>
                <header className="header">
                    <Logo/>
                    <MenuBars onClick={handleClickMenuBurguer} menu={menu}/>
                    
                </header>
                <main>
                    {
                        menu &&
                        <MenuBurguer/>
                    }

                </main>
                <footer>

                </footer>
            </Fragment>
        )
}

export default Home;