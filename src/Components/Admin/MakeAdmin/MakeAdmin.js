import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const MakeAdmin = () => {
    const [loginUser, setloginUser] = useContext(UserContext);
    document.title = 'Make admin';
    return (
        <>
        <Container className="d-flex">
            <div style={{width: '100px'}}>
                <Link to="/"><img src={logo} alt="logo" className="my-3" style={{width: '120px'}}/></Link>
            </div>
            <div className="d-flex justify-content-between mt-3 w-100">
                <h4 className="ml-5 pl-5">Make Admin</h4>
                <h4 className="text-primary">{loginUser.name}</h4>
            </div>
        </Container>
        <Container>
            <Row>
                <Col md={2}>
                    <div className="mt-5">
                        <Link to="/admin/serviceList" className="d-flex w-100 text-decoration-none text-dark"><FontAwesomeIcon icon={faCartArrowDown} className="mt-2 mr-2" /><button className="btn btn-light w-100">Service list</button></Link> 
                    </div>
                    <div>
                        <Link to="/admin/addService" className="d-flex w-100 text-decoration-none text-dark"><FontAwesomeIcon icon={faPlus} className="mt-2 mr-2" /><button className="btn btn-light w-100">Add Service</button></Link> 
                    </div>
                    <div>
                        <Link to="/admin/makeAdmin" className="d-flex w-100 text-decoration-none" style={{color: '#009444'}}><FontAwesomeIcon icon={faUserPlus} className="mt-2 mr-2" /><button className="btn btn-light w-100" style={{color: '#009444'}}>Make Admin</button></Link> 
                    </div>
                </Col>
                <Col md={10} className="mt-3 bg-light p-5">
                    <div style={{backgroundColor: '#fff', borderRadius: '20px'}} className="p-2">
                    <Form className="pb-5 p-3">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="jon@gamil.com" required />
                        </Form.Group>
                        <Button variant="danger px-5" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default MakeAdmin;