import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Order.css';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faUsers, faInbox } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Order = () => {
    document.title = 'Order';
    const [loginUser, setloginUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState({});
    
    const handleBlur = (e) => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(file);
    }

    const handleSubmit = () => {
        // e.preventDefault();
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

    return (
        <>
        <Container className="d-flex">
            <div style={{width: '100px'}}>
                <Link to="/"><img src={logo} alt="logo" className="my-3" style={{width: '120px'}}/></Link>
            </div>
            <div className="d-flex justify-content-between mt-3 w-100">
                <h4 className="ml-5 pl-5">Order</h4>
                <h4 className="text-primary">{loginUser.name}</h4>
            </div>
        </Container>
        <Container>
            <Row>
                <Col md={2}>
                    <div className="mt-5">
                        <Link to="/customer/order" className="d-flex w-100 text-decoration-none" style={{color: '#009444'}}><FontAwesomeIcon icon={faCartArrowDown} className="mt-2 mr-2" /><button className="btn btn-light w-100" style={{color: '#009444'}}>Order</button></Link> 
                    </div>
                    <div>
                        <Link to="/customer/service" className="d-flex w-100 text-decoration-none text-dark"><FontAwesomeIcon icon={faUsers} className="mt-2 mr-2" /><button className="btn btn-light w-100">Service list</button></Link> 
                    </div>
                    <div>
                        <Link to="/customer/review" className="d-flex w-100 text-decoration-none text-dark"><FontAwesomeIcon icon={faInbox} className="mt-2 mr-2" /><button className="btn btn-light w-100">Review</button></Link> 
                    </div>
                </Col>
                <Col md={10}>
                    <div className="mt-3 p-5 bg-light w-75">
                        <Form onSubmit={handleSubmit}> 
                        {/* action="http://localhost:8080/addServices" method="POST" */}
                            <Form.Group>
                                <Form.Control type="text" onBlur={handleBlur} name="name" placeholder="Your name / company’s name"  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="email" onBlur={handleBlur} name="email" placeholder="Your email address"  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" onBlur={handleBlur} name="title" placeholder="Graphic Design"  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control as="textarea" onBlur={handleBlur} name="masseage" rows={3} placeholder="Your message"  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" onBlur={handleBlur} name="price" placeholder="Price"  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control onChange={handleFileChange} type="file" name="file" className="w-25 btn btn-light" placeholder="Upload project file"  />
                            </Form.Group>
                            <button className="btn btn-dark px-5" type="submit">
                                Send
                            </button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Order;