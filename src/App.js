import React from 'react';
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const brandName = process.env.REACT_APP_BRAND_NAME;
    const pageTitle = process.env.REACT_APP_PAGE_TITLE;
    const tagline = process.env.REACT_APP_TAGLINE;

    return (
        <React.Fragment>
            <div className="App">

                {/* Barre de navigation */}
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">{brandName}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Accueil</Nav.Link>
                                <Nav.Link href="#about">À propos</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* En-tête */}
                <header className="text-center my-5">
                    <h1>{pageTitle}</h1>
                    <p className="text-muted">{tagline}</p>
                </header>

                {/* 3 cartes */}
                <Container className="mb-5">
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Carte 1</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Sous-titre
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Contenu de la première carte. Remplace ce texte par ce
                                        que tu veux afficher.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Carte 2</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Sous-titre
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Contenu de la deuxième carte.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Carte 3</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Sous-titre
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Contenu de la troisième carte.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        </React.Fragment>
    );
}

export default App;