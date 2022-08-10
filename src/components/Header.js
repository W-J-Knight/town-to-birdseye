import { useState } from "react";
import {
    Container,
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import BirdseyeLogo from "../app/assets/images/Yellow-jack-100.svg";
// import UserLoginForm from '../features/user/UserLoginForm'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color="primary" sticky="top" expand="md">
            
                <NavbarBrand href="/">
                    <img
                        src={BirdseyeLogo}
                        alt="birdseye logo"
                        className="float-start"
                    />
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/">
                                <i className="fa fa-home fa-lg" /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/directory">
                                <i className="fa fa-list fa-lg" /> Events
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">
                                <i className="fa fa-info fa-lg" /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">
                                <i className="fa fa-address-card fa-lg" />{" "}
                                Town Council
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            
        </Navbar>
    );
};
export default Header;
