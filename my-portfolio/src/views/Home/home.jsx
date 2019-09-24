import React, {Component, Fragment} from 'react';
import Logo from '../../Components/Logo/logo';
import MenuBars from '../../Components/Menu/Menu-bars/menuBars';
import './home.css';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {openMenuBurguer: false}
        this.handleMenuBurger = this.handleMenuBurger.bind(this);
    }

    handleMenuBurger(e){
        this.setState((prevState)=> {
            console.log('Prevstate:',prevState)
            return{openMenuBurguer: !prevState.openMenuBurguer};
        })
    }

    render(){
        const {handleMenuBurger} = this.props;
        const {openMenuBurguer} =  this.state;
        console.log(openMenuBurguer)
        return(
            <Fragment>
                <header className="header">
                    <Logo/>
                    <MenuBars onClick={console.log('click')}/>
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