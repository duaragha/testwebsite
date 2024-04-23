import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () => {
    return (
        <div id="cardContainer" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Card style={{ width: '20rem' }}>
                <img
                    className="d-block "
                    src="https://via.placeholder.com/800x600"
                    alt="First slide"
                />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <img
                    className="d-block "
                    src="https://via.placeholder.com/800x600"
                    alt="First slide"
                />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <img
                    className="d-block "
                    src="https://via.placeholder.com/800x600"
                    alt="First slide"
                />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div >
    );
}

export default Cards;