import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <div>
            <footer>
                <Container fluid>
                    <Row className="bg-primary text-white">
                        <Col>
                            Hello
                        </Col>
                        <Col>
                            Bye
                        </Col>
                    </Row>
                </Container>

            </footer>
        </div>
    );
}

export default Footer;