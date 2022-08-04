import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import BirdseyeLogo from './app/asset/images/Yellow-jack-100.svg';



function App() {
    return (
        <div className='App'>
            <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand  href='/'>
                        <img src={BirdseyeLogo} alt='birdseye logo' className='m-0'/>
                    </NavbarBrand>
                </Container>
            </Navbar>
            I'm ready for workshop!
        </div>
    );
}



export default App;
