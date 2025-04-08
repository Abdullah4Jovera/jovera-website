'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '../CommonComponents/navbar/Navbar'
import './businessfinance.css'
import joveralogo from '../../Assets/joveralogo.png'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Button } from 'react-bootstrap'
import logotwo from '../../Assets/logotwo.png'
import logoone from '../../Assets/logoone.png'
import logothree from '../../Assets/logothree.png'
import logofour from '../../Assets/logofour.png'
import businessfinancedes from '../../Assets/businessfinancedes.png'
import Footer from '../CommonComponents/footer/Footer'
import ContactDetail from '../CommonComponents/contactDetail/ContactDetail'
import BusinessFinanceForm from './BusinessFinanceForm'
import BusinessFinanceCarousal from './BusinessFinanceCarousal'
import BusinessLoanCards from './BusinessLoanCards'
import BusinessEligibility from './BusinessEligibility'

const BusinessLoan = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className="businessFinance_background_class">
                {/* Escaped single quote in JSX if needed */}
                {/* <Image src={joveralogo} alt="jovera_logo" className="jovera_logo_common" /> */}
                <div className="business_loan_text">
                    <h1 data-aos="fade-up">Business Loan</h1>
                </div>

                <h1 className="businessfinance_tag_h1" data-aos="fade-up">
                    Expand your business with a
                </h1>
                <h4 className="solutiondesigned" data-aos="fade-up">
                    flexible, collateral-free loan
                </h4>

                <div className="applynow_btn" data-aos="fade-up">
                    <Button>APPLY NOW</Button>
                </div>
            </div>

            <div className="business_finance_des">
                <Container>
                    <h1 className="loan_feature" data-aos="fade-up">Loan Features</h1>
                    <div className="paragraph_container">
                        <h1 className="businessfinance_tag" data-aos="fade-right">
                            Take your business to the next level
                        </h1>
                        <p className="paragraph_text" style={{ textAlign: 'center' }} data-aos="fade-up">
                            Looking to branch out your business or set up a new one? We&apos;re here to back you up with a Business Loan. Benefit from up to AED 3 million and flexible repayment terms to conveniently repay your loan. Also available under Islamic Banking.
                        </p>
                    </div>

                    <BusinessLoanCards />
                    <BusinessEligibility />
                </Container>
            </div>

            <BusinessFinanceForm />
            <ContactDetail />
            <Footer />
        </>
    );
};

export default BusinessLoan;
