'use client';
import React, { useEffect } from 'react';
import './businessfinance.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const BusinessLoanCards = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    const data = [
        {
            id: 0,
            name: 'Collateral-Free',
            text: 'Maximise your opportunities',
            btnName: 'Explore More',
        },
        {
            id: 1,
            name: 'Tailored Loans',
            text: 'That meet your business needs',
            btnName: 'Explore More',
        },
        {
            id: 2,
            name: 'Up to AED 3 Million',
            text: 'To make your plans happen',
            btnName: 'Explore More',
        },
        {
            id: 3,
            name: 'Flexible Payment',
            text: 'Up to 60 months',
            btnName: 'Explore More',
        },
        {
            id: 4,
            name: 'Loan Shield Protection',
            text: 'For your peace of mind',
            btnName: 'Explore More',
        },
    ];

    return (
        <div className="business-loan-cards">
            <Container>
                <Row className="justify-content-center">
                    {data.map((item) => (
                        <Col
                            key={item.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={4}
                            xxl={2}
                            className="mb-3"
                            data-aos="fade-up"
                        >
                            <Card className="shadow-sm business_cards" style={{ height: '200px', width: '100%' }} >
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="fw-bold" style={{ color: '#EBC758' }}>
                                        {item.name}
                                    </Card.Title>
                                    <Card.Text className="card_text_paragrapgh flex-grow-1" style={{ color: '#ffff' }}>
                                        {item.text}
                                    </Card.Text>
                                    <Button className="mt-auto explore_btn">
                                        {item.btnName}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default BusinessLoanCards;
