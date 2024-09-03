import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvatarApp from '../extras/Avatar';

function NavbarApp() {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="#home">Easy Pays</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#home">Cargar Tickets</Nav.Link>
            <Nav.Link href="#home">Crear Proyectos</Nav.Link>
            <Nav.Link href="#link">Historial y Reportes</Nav.Link>
            <AvatarApp></AvatarApp>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavbarApp;