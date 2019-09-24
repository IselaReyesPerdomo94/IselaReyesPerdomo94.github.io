import React, {Component, Fragment} from 'react';
import Logo from '../../Components/Logo/logo';
import MenuBars from '../../Components/Menu/Menu-bars/menuBars';
import './home.css';

class Home extends Component {
    render(){
        return(
            <Fragment>
                <header className="header">
                    <Logo/>
                    <MenuBars/>
                </header>
                <main>

                </main>
                <footer>

                </footer>
            </Fragment>
        )
    }
}

export default Home;