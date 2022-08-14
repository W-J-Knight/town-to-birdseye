import { Container,Row,Col } from "reactstrap";
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2' >
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/directory'>Events</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Town Council</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                    <h5>Social</h5>

                            <a
                                className='btn btn-social-icon btn-facebook'
                                href='http://www.facebook.com/'
                            >
                                <i className='fa fa-facebook' />
                            </a>

                    </Col>
                    <Col sm='4' className='text-center'>
                    <a
                                role='button'
                                className='btn btn-link'
                                href='tel:+12065551234'
                            >
                                <i className='fa fa-phone' /> 1-812-389-2419
                            </a>
                            <br />
                            <a
                                role='button'
                                className='btn btn-link'
                                href='mailto:notreal@notreal.co'
                            >
                                <i className='fa fa-envelope-o' /> tobirdseye@pscinet
                            </a>
                            
                            <i className="fa-solid fa-mailbox"></i>
                            <p>Birdseye Municipal Building</p>
                            <p>103 W. State Road 64</p>
                            <p>Birdseye, IN 47513</p>
                            <p>United States</p>
                            
                    </Col>
                </Row>
            </Container>
            </footer>
    )
}

export default Footer;