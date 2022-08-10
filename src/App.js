import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { Container, Navbar, NavbarBrand } from 'reactstrap';
// import BirdseyeLogo from "./app/assets/images/Yellow-jack-100.svg";
import Footer from "./components/Footer";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="contact" element={<ContactPage />} />
            </Routes> 
            I'm ready for workshop!
            <Footer />
        </div>
    );
}

export default App;
