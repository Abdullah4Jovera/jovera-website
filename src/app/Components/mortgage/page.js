'use client'
import React, { useState, useEffect, useRef } from 'react'
import './Mortgage.css'
import Navbar from '../CommonComponents/navbar/Navbar'
import joveralogo from '../../Assets/joveralogo.png'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Button } from 'react-bootstrap'
import MortgageServices from './MortgageServices'
import '../Home/home.css'
import mortgageimage from '../../Assets/mortgageimage.png'
import mortgageimagetwo from '../../Assets/mortgageimagetwo.png'
import ContactDetail from '../CommonComponents/contactDetail/ContactDetail'
import Footer from '../CommonComponents/footer/Footer'
import MortgageCalculator from './MortgageCalculator'
import MortgageForm from './MortgageForm'
import businesscardimage from "../../Assets/businesscardimage.png";

const Page = () => {
    const targetSectionRef = useRef(null);

    const handleScrollToSection = () => {
        if (targetSectionRef.current) {
            targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className='mortgage_bg_image'>
                <div className='mortgage_loan'>
                    <h1 data-aos="fade-up">Home Loan</h1>
                </div>
                <h1 className='businessfinance_tag_h1' data-aos="fade-up">Unlock your dream home with our</h1>
                <h4 className='solutiondesigned' data-aos="fade-up">competitive mortgage options</h4>
                <div className='applynow_btn' data-aos="fade-up">
                    <Button onClick={handleScrollToSection}>APPLY NOW</Button>
                </div>
            </div>

            <div className='business_finance_des'>
                <Container>
                    <h1 className='loan_feature' data-aos="fade-up">Home Loan</h1>
                    <div className='paragraph_container'>
                        <h1 className='businessfinance_tag' data-aos="fade-right">
                            Get on the property ladder
                        </h1>
                        <p className='paragraph_text' style={{ textAlign: 'center' }} data-aos="fade-up">
                            Unlock your SME&apos;s growth potential and expand your business by investing in machinery and other commercial assets. Benefit from a loan of up to AED 3 Million with a Machinery Finance tailored to suit your specific needs.
                        </p>
                    </div>
                </Container>
                <MortgageServices businesscardimage={businesscardimage} />
            </div>

            <div className='mortgage_decsription'>
                <Container>
                    <Row className='CEO_Row'>
                        <Col xs={12} sm={6} md={6} lg={6} data-aos="fade-up">
                            <h1 className='ceo_message' data-aos="fade-up">
                                Jovera Mortgage
                            </h1>
                            <p style={{ textAlign: 'justify' }} data-aos="fade-up">
                                We are an independent mortgage service provider in Abu Dhabi, licensed by the Abu Dhabi Economic Department and Real Estate Regulatory Authority, operating since 2013. With extensive market knowledge and strong bank relationships, we offer expert advice and top mortgage deals.
                            </p>
                            <p style={{ textAlign: 'justify' }} data-aos="fade-up">
                                Our team includes proactive professionals and seasoned bankers with regional experience. We also specialize as a Salesforce Consulting Partner for Financial Services, leveraging over 12 years of expertise to maximize your Salesforce investment.
                                For all your mortgage needs in the UAE, Jovera Group is here to help you plan and achieve your financial goals.
                            </p>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} data-aos="fade-up">
                            <Image src={mortgageimage} alt='mortgageimage' className='ceo_home_image' style={{borderRadius:'15px'}} />
                        </Col>
                    </Row>

                    <Row className='md_Row'>
                        <Col xs={12} md={6} data-aos="fade-up">
                            <Image src={mortgageimagetwo} alt='mortgageimagetwo' className='ceo_home_image' style={{borderRadius:'15px'}} />
                        </Col>
                        <Col xs={12} md={6}>
                            <h5 className='residential_mortgage' data-aos="fade-up">
                                Residential Mortgages
                            </h5>
                            <ul style={{ color: 'white' }} data-aos="fade-up">
                                <li> <p> We offer a variety of options for home buyers, including fixed-rate, adjustable-rate, and jumbo mortgages.</p></li>
                            </ul>
                            <h5 className='residential_mortgage' data-aos="fade-up">
                                Investment Properties
                            </h5>
                            <ul style={{ color: 'white' }} data-aos="fade-up">
                                <li> <p>Whether you&apos;re looking to buy or refinance a rental property, we can help. We can take the installment from the rent.</p> </li>
                            </ul>
                            <h5 className='residential_mortgage' data-aos="fade-up">
                                Mortgage under construction loans
                            </h5>
                            <ul style={{ color: 'white' }} data-aos="fade-up">
                                <li> <p>We can provide you a loan up to 100% of the construction cost, with a repayment period of up to 25 years.</p> </li>
                            </ul>
                            <h5 className='residential_mortgage' data-aos="fade-up">
                                Home Equity Loans
                            </h5>
                            <ul style={{ color: 'white' }} data-aos="fade-up">
                                <li> <p>These loans allow you to use the equity in your home as collateral for a loan.</p> </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <MortgageForm targetSectionRef={targetSectionRef} />
            <ContactDetail />
            <Footer />
        </>
    )
}

export default Page;
