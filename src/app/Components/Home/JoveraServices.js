"use client";
import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Joveraservices.css";
import Card from "react-bootstrap/Card";
import logotwo from "../../Assets/logotwo.png";
import logothree from "../../Assets/logothree.png";
import logofour from "../../Assets/logofour.png";
import logoone from "../../Assets/logoone.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";

const ServicesSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const services = [
        {
            title: "Business Finance",
            data: [
                {
                    logo: logotwo,
                    label: "12,000 Customers",
                    text: "Private Clients and Real Estate Marketing Professionals.",
                },
                {
                    logo: logothree,
                    label: "5000+ Properties",
                    text: "Have Been Sold Rented and Leased.",
                },
                {
                    logo: logofour,
                    label: "250+ Agents",
                    text: "Who Specialize in Your Target Area.",
                },
                {
                    logo: logoone,
                    label: "Top Selling",
                    text: "Partner with UAE Developers.",
                },
            ],
        },
        {
            title: "Personal Loan",
            data: [
                {
                    logo: logotwo,
                    label: "12,000 Customers",
                    text: "Private Clients and Real Estate Marketing Professionals.",
                },
                {
                    logo: logothree,
                    label: "5000+ Properties",
                    text: "Have Been Sold Rented and Leased.",
                },
                {
                    logo: logofour,
                    label: "250+ Agents",
                    text: "Who Specialize in Your Target Area.",
                },
                {
                    logo: logoone,
                    label: "Top Selling",
                    text: "Partner with UAE Developers.",
                },
            ],
        },
        {
            title: "Real Estate",
            data: [
                {
                    logo: logotwo,
                    label: "12,000 Customers",
                    text: "Private Clients and Real Estate Marketing Professionals.",
                },
                {
                    logo: logothree,
                    label: "5000+ Properties",
                    text: "Have Been Sold Rented and Leased.",
                },
                {
                    logo: logofour,
                    label: "250+ Agents",
                    text: "Who Specialize in Your Target Area.",
                },
                {
                    logo: logoone,
                    label: "Top Selling",
                    text: "Partner with UAE Developers.",
                },
            ],
        },
        {
            title: "Mortgage",
            data: [
                {
                    logo: logotwo,
                    label: "12,000 Customers",
                    text: "Private Clients and Real Estate Marketing Professionals.",
                },
                {
                    logo: logothree,
                    label: "5000+ Properties",
                    text: "Have Been Sold Rented and Leased.",
                },
                {
                    logo: logofour,
                    label: "250+ Agents",
                    text: "Who Specialize in Your Target Area.",
                },
                {
                    logo: logoone,
                    label: "Top Selling",
                    text: "Partner with UAE Developers.",
                },
            ],
        },
    ];

    return (
        <div className='Jovera_services_container' >
            <Container>
                <Row className="g-4">
                    {services.map((service, index) => (
                        <Col sm={12} md={6} key={index}>
                            <Card className="card_image_one w-100" data-aos="fade-up">
                                <Card.Body>
                                    <h1 className="real_estate_text" data-aos="fade-up" style={{ color: '#EBC758' }}>
                                        {service.title}
                                    </h1>
                                    {service.data.map((item, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: "flex",
                                                alignItems: "start",
                                                gap: "12px",
                                            }}
                                            className="mt-4"
                                            data-aos="fade-up"
                                        >
                                            <Image
                                                src={item.logo}
                                                alt={item.label}
                                                className="logo_image_services"
                                                width={50}
                                                height={50}
                                            />
                                            <div>
                                                <h5
                                                    className="mb-0 service_text"
                                                    data-aos="fade-up"
                                                >
                                                    {item.label}
                                                </h5>
                                                <p data-aos="fade-up">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className='mt-2' data-aos="fade-up">
                                        <Button variant='warning' className='View_btn_of_cards' >View</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ServicesSection;
