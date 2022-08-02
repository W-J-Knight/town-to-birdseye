import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
            <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        <h1>Birdseye</h1>
                    </NavbarBrand>
                </Container>
            </Navbar>
            I'm ready for workshop!
    </div>
  );
}

export default App;
