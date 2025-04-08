'use client';
import React, { useState, useEffect } from 'react';
import './personalLoan.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';

const PersonalEligibility = () => {
    const [activeTab, setActiveTab] = useState('Eligibility'); // State to manage active tab

    useEffect(() => {
        AOS.init(); // Initialize AOS for animations
    }, []);

    const eligibilityData = [
        {
            id: 0,
            text: 'Age',
            des: '21 years or older'
        },
        {
            id: 1,
            text: 'Residency',
            des: 'Salaried expatriate, residing and living in the UAE'
        },
        {
            id: 2,
            text: 'Other Requirements:',
            des: 'Salaried expatriate, residing and living in the UAE'
        },
        {
            id: 3,
            text: 'Residency',
            desOne: 'End-of-service benefits and salary transfer to RAKBANK is required until the repayment of your Personal Loan is completed',
            desTwo: 'End-of-service benefits and salary transfer to RAKBANK is required until the repayment of your Personal Loan is completed',
            desThree: 'Minimum Al Etihad Credit Bureau (AECB) score of 541',
            desFour: 'Customer must be employed with a RAKBANK-approved employer',
        },
    ]

    const processingFeeData = [
        {
            id: 0,
            text: 'Processing Fee',
            description: '1% of loan amount, minimum AED 500, maximum AED 2,500'
        },
        {
            id: 1,
            description: 'minimum AED 500, maximum AED 2,500'
        },
        {
            id: 2,
            description: 'For more details about our Personal Loan fees and charges, please refer to our Service and Price Guide.'
        }
    ];

    const warnings = [
        "If you pay off the Loan prior to the due date, you will be subject to prepayment charges as per the described rates in the Service and Price Guide.",
        "If you are late in payment or fail to make a payment on the due date, you will pay default interest at the rates described in the Service and Price Guide.",
        "If you fail to make a payment or otherwise breach the Loan terms, this will be a default and the Bank will be entitled, among other things, to:",
        "(a) Cancel the Loan and demand full repayment immediately;",
        "(b) Report the default to the appropriate regulatory authorities and credit rating agencies, which will affect your credit rating;",
        "(c) Bring legal proceedings against you."
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Eligibility':
                return (
                    <div data-aos="fade-up">
                        <h5 style={{ color: "#E3C086" }} >Document Requirements:</h5>
                        <ul>
                            {eligibilityData.map((item) => (
                                <li key={item.id}>
                                    <strong>{item.text}:</strong>
                                    <ul>
                                        {item.des && <li>{item.des}</li>}
                                        {item.desOne && <li>{item.desOne}</li>}
                                        {item.desTwo && <li>{item.desTwo}</li>}
                                        {item.desThree && <li>{item.desThree}</li>}
                                        {item.desFour && <li>{item.desFour}</li>}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case 'Fees':
                return (
                    <div data-aos="fade-up">
                        <ul>
                            {processingFeeData.map((item) => (
                                <li key={item.id}>
                                    <strong>{item.text}</strong>
                                    {item.description && <li>{item.description}</li>}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case 'Terms & Conditions':
                return (
                    <div>
                        <p>Warnings:</p>
                        <ul>
                            {warnings.map((warning, index) => (
                                <li key={index}>{warning}</li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Nav variant="tabs" defaultActiveKey="Eligibility" className="mb-3" >
                        <Nav.Item data-aos="fade-up">
                            <Nav.Link
                                eventKey="Eligibility"
                                active={activeTab === 'Eligibility'}
                                onClick={() => setActiveTab('Eligibility')}
                                style={{
                                    color: activeTab === 'Eligibility' ? '#E3C086' : 'white',
                                    backgroundColor: activeTab === 'Eligibility' ? '#292929' : 'transparent',
                                    border: activeTab === 'Eligibility' ? '1px solid #E3C086' : 'none',
                                    fontSize: '14px'
                                }}

                            >
                                Eligibility
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item data-aos="fade-up">
                            <Nav.Link
                                eventKey="Fees"
                                active={activeTab === 'Fees'}
                                onClick={() => setActiveTab('Fees')}
                                style={{
                                    color: activeTab === 'Fees' ? '#E3C086' : 'white',
                                    backgroundColor: activeTab === 'Fees' ? '#292929' : 'transparent',
                                    border: activeTab === 'Fees' ? '1px solid #E3C086' : 'none',
                                    fontSize: '14px'
                                }}

                            >
                                Fees
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item data-aos="fade-up">
                            <Nav.Link
                                eventKey="Terms & Conditions"
                                active={activeTab === 'Terms & Conditions'}
                                onClick={() => setActiveTab('Terms & Conditions')}
                                style={{
                                    color: activeTab === 'Terms & Conditions' ? '#E3C086' : 'white',
                                    backgroundColor: activeTab === 'Terms & Conditions' ? '#292929' : 'transparent',
                                    border: activeTab === 'Terms & Conditions' ? '1px solid #E3C086' : 'none',
                                    fontSize: '14px'
                                }}

                            >
                                Terms & Conditions
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Col>
            </Row>

            <Row>
                <Col>
                    <Card className="p-3 custom-card" data-aos="fade-up"  >
                        <Card.Body>
                            {renderTabContent()}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PersonalEligibility