import React, { useEffect, useState } from 'react';
import './Feedback.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';

const Feedbacks = () => {
    const [review, setreview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8080/allData')
        .then(response => response.json())
        .then(data =>{
            setreview(data);
        });
    },[]);
    const clientsFeedback = [
        {
            name: 'Nash Patrik',
            image: customer1,
            title: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, provident sunt. Dolores ratione natus possimus.'
        },
        {
            name: 'Miriam Barron',
            image: customer2,
            title: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, provident sunt. Dolores ratione natus possimus.'            
        },
        {
            name: 'Bria Malone',
            image: customer3,
            title: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, provident sunt. Dolores ratione natus possimus.'            
        }
    ];
    return (
        <Container>
            <h2 className="my-5 text-center">Clients <span style={{color: '#7AB259'}}> Feedback </span> </h2>
            <Row className="customMargin">
                {
                    review.map(feedback => (feedback.customerName === undefined) ?
                    <></>: <Col lg={4} className="my-3" key={feedback._id}>
                        <Card className="scaleEffect">
                            <div className="d-flex">
                                <Card.Img variant="top" style={{width: '100px', height: '100px'}} className="mr-3 p-3" src={customer1} />
                                <Card.Title className="py-2">
                                    <h5>{feedback.customerName}</h5>
                                    <h6>{feedback.title}</h6>
                                </Card.Title>
                            </div>
                            <Card.Body>
                                <Card.Text>{feedback.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
        
    );
};

export default Feedbacks;