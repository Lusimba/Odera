import Link from 'next/link'
import Image from 'next/image'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
    return (
        <div className="row">
            <Navbar collapseOnSelect className="navpc"  expand="lg" bg="dark"  variant="dark">
                <div className=" container pt-3">
                    <Navbar.Brand href="/">
                        <Image src="/static/logo/odera_logo.svg" alt="odhiambo odera logo" width="45vh" height="60vh"/>
                        <Image src="/static/logo/odera_assoc.svg" alt="odhiambo odera logo" className="mx-1"  width="160vh" height="50vh"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="/">
                                Home
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="/about">
                                About Us
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#contact">
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header
