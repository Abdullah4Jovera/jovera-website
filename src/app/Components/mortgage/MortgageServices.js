"use client";
import React, { useEffect } from "react";
import "../Home/Joveraservices.css";
import "./Mortgage.css";
import { Card, Container, Row, Col, } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image'
import businesstwo from '../../Assets/businesstwo.png'

const MortgageServices = ({ businesscardimage }) => {
    console.log(businesscardimage.src, 'businesscardimage')
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const cardData = [
        {
            title: "Home in One",
            description: "Save interest on your home loan with Home in One",
            imageUrl: businesscardimage,
            features: [
                "Min monthly income of AED 15,000 (for salaried individuals)",
                "Import / Export financing",
                "Open for UAE Nationals and UAE Residents",
                "Flexible repayment",
            ],
        },
        {
            title: "Home Loan",
            description: "Stop paying rent and build equity",
            imageUrl: businesstwo,
            features: [
                "Higher eligibility basis Point of Sale & E-Commerce receivables",
                "Up to AED 3 million",
                "Minimum loan AED 100K",
                "Flexible repayment",
            ],
        },
    ];

    return (
        <Container>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    data-aos="fade-up"
                    className="mortgage-card mt-3"
                    style={{
                        width: "100%",
                        maxWidth: "1000px",
                        margin: "auto",
                        padding: "15px",
                        border: "1px solid #EBC758",
                        borderRadius: "15px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        cursor: "pointer",
                        backgroundColor: 'rgb(41,41,41)'
                    }}
                >
                    <Card.Body>
                        <Row>
                            <Col xs={12} sm={12} md={8} lg={6}>
                                <h1 className="mb-3 homeloan_text">{card.title}</h1>
                                <p style={{ color: "#EBC758", fontSize: "16px" }}>{card.description}</p>
                                <div className="mortgage-services-list">
                                    {card.features.map((feature, featureIndex) => (
                                        <h5 key={featureIndex} className="feature-item">
                                            {feature}
                                        </h5>
                                    ))}
                                </div>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={4}
                                lg={6}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <Image
                                    src={card.imageUrl}
                                    alt="businesscardimage"
                                    className="animated-image"
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};

export default MortgageServices;
