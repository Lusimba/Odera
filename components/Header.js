import Link from 'next/link'
import Image from 'next/image'
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <div className="text-center">
                <div className="">Call us on +254706722744</div>
            </div>
            <Navbar collapseOnSelect  expand="lg" bg="dark"  variant="dark">
            <Container>
            <Navbar.Brand href="/">
                <Image src="/static/logo/odera_logo.svg" width="60" height="60"/>
                <Image src="/static/logo/odera_assoc.svg" className="mx-2" width="200" height="50"/>
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
            </Container>
            </Navbar>
        </div>
    )
}

export default Header
