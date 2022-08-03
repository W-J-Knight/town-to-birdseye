import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import Birdseye from './app/asset/images/Birdseye-2.svg';



function App() {
    return (
        <div className='App'>
            <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={Birdseye} alt='birdsye logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
            I'm ready for workshop!
        </div>
    );
}



export default App;
