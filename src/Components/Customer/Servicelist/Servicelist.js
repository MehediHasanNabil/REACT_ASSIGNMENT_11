import React, { useContext, useEffect, useState } from 'react';
import './Servicelist.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faUsers, faInbox } from '@fortawesome/free-solid-svg-icons';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import { UserContext } from '../../../App';

const Servicelist = () => {
    const [loginUser, setloginUser] = useContext(UserContext);
    const [review, setreview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8080/allData')
        .then(response => response.json())
        .then(data =>{
            setreview(data);
        });
    },[]);
    console.log(review)
    document.title = 'service Lists';
    const serviceLists = [
        {
            name: 'Web & Mobile design',
            image: service1,
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        },
        {
            name: 'Graphic design',
            image: service2,
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'            
        }
    ];

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
                        <Link to="/customer/order" className="d-flex w-100 text-decoration-none text-dark"><FontAwesomeIcon icon={faCartArrowDown} className="mt-2 mr-2" /><button className="btn btn-light w-100">Order</button></Link> 
                    </div>
                    <div>
                        <Link to="/customer/service" className="d-flex w-100 text-decoration-none" style={{color: '#009444'}}><FontAwesomeIcon icon={faUsers} className="mt-2 mr-2" /><button className="btn btn-light w-100" style={{color: '#009444'}}>Service list</button></Link> 
                    </div>
                    <div>
                        <Link to="/customer/review" className="d-flex w-100 text-decoration-none text-dark"><FontAwesomeIcon icon={faInbox} className="mt-2 mr-2" /><button className="btn btn-light w-100">Review</button></Link> 
                    </div>
                </Col>
                <Col md={10} className="mt-3 bg-light p-5">
                    <Row>
                        { review.map(service => (service.name === undefined) ?
                        <></>:
                        <Col lg={6} className="my-2 serviceAnimation" key={service._id}>
                            <Card style={{minHeight: '250px'}}>
                                <div>
                                    <Card.Img variant="top" src={service1} style={{width: '100px'}} className="p-3" />
                                    <button className="float-right m-4 px-3 btn btn-light">Done</button>
                                </div>
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>{service.customerMsg}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Servicelist;