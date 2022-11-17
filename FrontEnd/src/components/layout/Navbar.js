import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.css'

import Logo from '../img/logo.png'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (
        <Navbar className={styles.nav} expand="lg">
            <Container fluid>
                <img src={Logo} alt='Logo Nexos' />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/doacoes">DOACOES</Nav.Link>
                        <Nav.Link href="/encontrarEscola">ESCOLAS</Nav.Link>
                        <NavDropdown title="CADASTRAR" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/CadastroEscola">ESCOLA</NavDropdown.Item>
                            <NavDropdown.Item href="/CadastroDoador">
                                DOADOR
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Procurar Escola"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className="me-2" variant="success">PESQUISAR</Button>
                        <Button href="/login" variant="primary">ENTRAR</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;