import React from 'react';
import './Services.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const service = [
        {
            title: 'Web & Mobile design',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            image: service1
        },
        {
            title: 'Graphic design',
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            image: service2
        },
        {
            title: 'Web development',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            image: service3
        }
    ];

    return (
        <Container>
            <h2 className="text-center my-5">Provide awesome <span style={{color: '#7AB259'}}> services </span> </h2>
            <Row className="text-center mt-5">
            {
                service.map(AllService => <ServiceCard AllService={AllService}></ServiceCard>)
            }
            </Row>
        </Container>
    );
};

export default Services;