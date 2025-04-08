"use client"
import React, { useEffect, useRef } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Navbar from '../CommonComponents/navbar/Navbar'
import joveralogo from '../../Assets/joveralogo.png';
import Image from 'next/image'
import './personalLoan.css'
import '../businessfinance/businessfinance.css'
import PersonalLoanServices from './PersonalLoanServices';
import PersonalLoanCalculator from './PersonalLoanCalculator';
import Footer from '../CommonComponents/footer/Footer'
import ContactDetail from '../CommonComponents/contactDetail/ContactDetail'
import personalloandes from '../../Assets/personalloandes.png'
import PersonalLoanform from './PersonalLoanform';
import '../Home/home.css'
import PersonalEligibility from './PersonalEligibility';

const Page = () => {
    const targetSectionRef = useRef(null);

    const handleScrollToSection = () => {
        if (targetSectionRef.current) {
            targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
            <Navbar />
            <div className='personalloan_background_class'>
                {/* <Image src={joveralogo} alt='joveralogo' className='jovera_logo_common' /> */}
                <div className='personal_loan_text'>
                    <h1 data-aos="fade-up" >Personal Loan</h1>
                </div>
                <h1 className='businessfinance_tag_h1' data-aos="fade-up">make me happen with a low interest</h1>
                <h4 className='solutiondesigned' data-aos="fade-up" >payment and flexible repayments</h4>

                <div className='applynow_btn' data-aos="fade-up">
                    <Button onClick={handleScrollToSection}>APPLY NOW</Button>
                </div>
            </div>


            <div className='business_finance_des' >
                <Container>
                    <div className='paragraph_container' >
                        <h1 className='businessfinance_tag' data-aos="fade-right">Explore our great-value Personal Loans</h1>

                        <h1 className='flexible_low_cost' >Flexible and low-cost</h1>

                        <p className='paragraph_text' style={{ textAlign: 'center' }} data-aos="fade-up">
                            be it a wedding, a holiday, unexpected expenses or switching your loan from another bank, our Personal Loan provides high loan amounts at low interest rates, with flexible repayments of up to 48 months for expatriates.
                        </p>
                    </div>
                </Container>

                <PersonalEligibility />
            </div>

            <div>
                {/* <PersonalLoanServices /> */}
                {/* <PersonalLoanCalculator /> */}
                <PersonalLoanform targetSectionRef={targetSectionRef} />
                <ContactDetail />
                <Footer />
            </div>
        </div>
    )
}

export default Page