import "../estilos/Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg" sticky="top" >
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Home" className="nav-link">Inicio</Nav.Link>
            <Nav.Link href="#Quienes-somos" className="nav-link">Quienes somos</Nav.Link>
            <Nav.Link href="#Productos-y-servicios" className="nav-link">Productos y servicios</Nav.Link>
            <Nav.Link href="#Contacto" className="nav-link">Contacto</Nav.Link>
            <Nav.Link href="#" disabled >Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;