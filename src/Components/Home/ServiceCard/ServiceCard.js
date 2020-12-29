import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({AllService}) => {
    return (
        <Col lg={4}>
            <Link to="/customer/order" className="text-decoration-none text-dark">
                <Card className="cardHover border-0 p-4 my-4">
                    <Card.Img variant="center" src={AllService.image} style={{width: '74px'}} className="mx-auto" />
                    <Card.Body>
                        <Card.Title>Web & Mobile design</Card.Title>
                        <Card.Text>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default ServiceCard;