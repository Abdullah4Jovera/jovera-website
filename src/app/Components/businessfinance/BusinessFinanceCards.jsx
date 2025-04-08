'use client';
import React, { useEffect, useState } from 'react';
import './businessfinance.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import businesscardimage from '../../Assets/businesscardimage.png';

const BusinessFinanceCards = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS for animations
    }, []);

    return (
        <Container>
            <Card data-aos="fade-up">
                <Card.Body>
                    <Row>

                        <Col lg={9} sm={12}>
                            <h5>Trade & Working Capital Finance</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer nec odio. Praesent libero. Sed cursus ante dapibus
                                diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                                Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                                augue semper porta. Mauris massa.
                            </p>
                            <Button variant="primary">Learn More</Button>
                        </Col>

                        <Col lg={3} sm={12} >
                            <Image src={businesscardimage} alt='Business Image'  />
                        </Col>

                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default BusinessFinanceCards;
