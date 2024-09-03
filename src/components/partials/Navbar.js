import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarPage() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Easy Pays</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#home">Servicios</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Inciar sesión</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Registrarse
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;