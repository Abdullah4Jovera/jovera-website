'use client';
import React, { useState, useEffect } from 'react';
import './realestate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';

const RealEstateEligibility = () => {
    const [activeTab, setActiveTab] = useState('Eligibility'); // State to manage active tab

    useEffect(() => {
        AOS.init(); // Initialize AOS for animations
    }, []);

    const eligibilityData = [
        {
            id: 0,
            text: 'Valid trade licence'
        },
        {
            id: 1,
            text: 'Valid passport, EID, visa (for all signatories and shareholders)'
        },
        {
            id: 2,
            text: 'Bank statements, VAT filings'
        },
        {
            id: 3,
            text: 'Business documents, such as constitutional documents & Account mandates viz memorandums, Shareholders Resolution, etc.'
        },
        {
            id: 4,
            text: 'Company location document such as Ejari, lease agreement, etc. (as applicable)'
        },
        {
            id: 5,
            text: 'Banking or lending assessment information / documentation (if and as applicable)'
        },
        {
            id: 6,
            text: 'Capacity to meet the Bank’s lending criteria'
        },
    ]

    const feeDetails = [
        {
            heading: "Security Document",
            details: "Per security document ** of the settled principal amount",
        },
        {
            heading: "Processing Fees",
            subheading: "At the time of onboarding",
            details: "Processing fees (if any) will be quoted as a percentage of the loan amount (without exceeding 3% of the loan amount).",
        },
        {
            heading: "Late Payment Fees",
            subheading: "If EMI is not paid by the due date",
            details: [
                "1 EMI overdue - AED 315",
                "2 EMIs overdue - AED 420",
                "Over 2 EMIs overdue - AED 577.50",
            ],
        },
        {
            heading: "Disclaimer",
            details: "VAT at the current rate of 5% will be levied on the Bank's fees and charges, as applicable under UAE law.",
        },
        {
            heading: "More Details",
            details: "For more details about our Business Loan fees and charges, please refer to our Service and Price Guide.",
        },
    ];

    const loanConditions = [
        "An approval for the Loan once sanctioned is only valid for 30 days from the date of approval, and the Loan disbursal must be completed before that so as not to lose time, failing which re-approvals need to be sought internally.",
        "If you pay off the Loan prior to the due date, you will pay prepayment charges at the rates described below.",
        "If you are late in payment or fail to make a payment on the due date, you will pay a late payment fee at the rates described below.",
        "If you fail to make a payment or otherwise breach the Loan terms, this will be considered a default and the Bank will be entitled, among other things, to:",
        "  (a) Charge penal interest of 2% per annum for non-compliance to loan sanction terms.",
        "  (b) Cancel the Loan and demand full repayment immediately.",
        "  (c) Report the default to the appropriate regulatory authorities, including the UAE Central Bank and Al Etihad Credit Bureau, and credit rating agencies, which will affect your credit rating.",
        "  (d) Bring legal proceedings against you.",
        "Last EMI amount may vary depending on moratorium period, changes in floating rate indices, and repayment delays.",
        "Loan tenor may vary post sanction depending on EMI deferrals sought from the Bank, EMI date change requests, repayment delays, and pricing variation, if any.",
        "If you fail to make any payment due under the Loan or otherwise breach our terms, we reserve the right to repossess the asset, if applicable, and liquidate/sell the same to settle the outstanding amount.",
        "Not more than 2 deferrals of instalments are allowed in a year.",
        "The Bank may reject requests for Installment deferral if payments are irregular or if there are 4 cheque/direct debit system (DDS) returns in the last 12 months or if the request does not meet the Bank's internal risk policy requirements.",
        "It is mandatory to have a Current Account with the Bank, from where the installment/EMI will be serviced. Use of the current account will be governed by the Terms and Conditions Governing Business Accounts available on the website www.rakbank.ae.",
        "Pay all installments and other amounts due on the due dates without delay.",
        "Review this document and all other terms & conditions set out in the Facility Documents/application form in detail.",
        "Regularly check our website (www.rakbank.ae) for updates.",
        "Notify the Bank in writing if there is a change in your business income details, contact details, postal or location address, financial details, change in business activity or any other material information as declared in the facility documents/application form or otherwise conveyed to the Bank.",
        "Always safeguard sensitive banking details such as a/c number, cheque book, Debit Card, login ID, passwords, pin number etc.",
        "Notify the Bank in writing prior to making any changes to ownership or management of the Company as was declared during the application process and seek consent;",
        "Notify the Bank in writing if you wish to prepay your Loan prior to its maturity."
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
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case 'Fees':
                return (
                    <div data-aos="fade-up">
                        {feeDetails.map((item, index) => (
                            <div key={index}>
                                <h5 style={{ color: "#E3C086" }}>
                                    {item.heading}
                                </h5>
                                {item.subheading && (
                                    <h5>
                                        {item.subheading}
                                    </h5>
                                )}
                                {Array.isArray(item.details) ? (
                                    <ul style={{ paddingLeft: "20px" }}>
                                        {item.details.map((detail, idx) => (
                                            <li key={idx}>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className='mb-0' >{item.details}</p>
                                )}
                            </div>
                        ))}
                    </div>
                );
            case 'Terms & Conditions':
                return (
                    <div data-aos="fade-up">
                        <h5 style={{ color: ' #E3C086' }} >Terms & Conditions</h5>
                        <ul>
                            {loanConditions.map((condition, index) => (
                                <li key={index}>{condition}</li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='mt-3' >
            <Row>
                <Col>
                    <Nav variant="tabs" defaultActiveKey="Eligibility" className="mb-3" >
                        <Nav.Item data-aos="fade-right">
                            <Nav.Link
                                eventKey="Eligibility"
                                active={activeTab === 'Eligibility'}
                                onClick={() => setActiveTab('Eligibility')}
                                style={{
                                    color: activeTab === 'Eligibility' ? '#E3C086' : 'white',
                                    backgroundColor: activeTab === 'Eligibility' ? 'black' : 'transparent',
                                    border: activeTab === 'Eligibility' ? '1px solid #E3C086' : 'none'
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
                                    backgroundColor: activeTab === 'Fees' ? 'black' : 'transparent',
                                    border: activeTab === 'Fees' ? '1px solid #E3C086' : 'none'
                                }}

                            >
                                Fees
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item data-aos="fade-left">
                            <Nav.Link
                                eventKey="Terms & Conditions"
                                active={activeTab === 'Terms & Conditions'}
                                onClick={() => setActiveTab('Terms & Conditions')}
                                style={{
                                    color: activeTab === 'Terms & Conditions' ? '#E3C086' : 'white',
                                    backgroundColor: activeTab === 'Terms & Conditions' ? 'black' : 'transparent',
                                    border: activeTab === 'Terms & Conditions' ? '1px solid #E3C086' : 'none'
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
                    <Card className="p-3 custom-card" data-aos="fade-up" >
                        <Card.Body>
                            {renderTabContent()}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default RealEstateEligibility