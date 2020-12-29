import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faUsers, faInbox } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Review = () => {
    const [loginUser, setloginUser] = useContext(UserContext);
    const [info, setInfo] = useState({});

    const handleBlur = (e) => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/addServices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    document.title = 'Review';
    return (
        <>
        <Container className="d-flex">
            <div style={{width: '100px'}}>
                <Link to="/"><img src={logo} alt="logo" className="my-3" style={{width: '120px'}}/></Link>
            </div>
            <div className="d-flex justify-content-between mt-3 w-100">
                <h4 className="ml-5 pl-5">Review</h4>
                <h4 className="text-primary">{loginUser.name}</h4>
            </div>
        </Container>
        <Container>
            <Row>
                <Col md={2}>
                    <div className="mt-5">
                        <Link to="/customer/order" className="d-flex w-100 text-decoration-none text-dark"><FontAwesomeIcon icon={faCartArrowDown} className="mt-2 mr-2" /><button className="btn btn-light w-100">Order</button></Link> 
                    </div>
                    <div>
                        <Link to="/customer/service" className="d-flex w-100 text-decoration-none text-dark"><FontAwesomeIcon icon={faUsers} className="mt-2 mr-2" /><button className="btn btn-light w-100">Service list</button></Link> 
                    </div>
                    <div>
                        <Link to="/customer/review" className="d-flex w-100 text-decoration-none" style={{color: '#009444'}}><FontAwesomeIcon icon={faInbox} className="mt-2 mr-2" /><button className="btn btn-light w-100" style={{color: '#009444'}}>Review</button></Link> 
                    </div>
                </Col>
                <Col md={10}>
                    <div className="mt-3 p-5 bg-light w-75">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control type="text" onBlur={handleBlur} name="customerName" placeholder="Your name" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" onBlur={handleBlur} name="title" placeholder="Company’s name, Designation" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control as="textarea" onBlur={handleBlur} name="description" rows={3} placeholder="Description" required />
                            </Form.Group>
                            <button className="btn btn-dark px-5" type="submit">
                                Submit
                            </button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Review;