'use client'
import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../CommonComponents/navbar/Navbar'
import './realestate.css'
import joveralogo from '../../Assets/joveralogo.png';
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Button } from 'react-bootstrap'
import logotwo from '../../Assets/logotwo.png'
import logoone from '../../Assets/logoone.png'
import logothree from '../../Assets/logothree.png'
import logofour from '../../Assets/logofour.png'
import RealEstateForm from './RealEstateForm'
import ContactDetail from '../CommonComponents/contactDetail/ContactDetail'
import Footer from '../CommonComponents/footer/Footer'
import partnerone from '../../Assets/partnerone.png'
import partnertwo from '../../Assets/partnertwo.png'
import partnerthree from '../../Assets/partnerthree.png'
import partnerfour from '../../Assets/partnerfour.png'
import partnerfive from '../../Assets/partnerfive.png'
import partnersix from '../../Assets/partnersix.png'
import partnerseven from '../../Assets/partnerseven.png'
import partnereight from '../../Assets/partnereight.png'
import partnernine from '../../Assets/partnernine.png'
import RealEstateEligibility from './RealEstateEligibility';
const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const partners = [
        partnerone, partnertwo, partnerthree,
        partnerfour, partnerfive, partnersix,
        partnerseven, partnereight, partnernine
    ]

    const targetSectionRef = useRef(null);

    const handleScrollToSection = () => {
        if (targetSectionRef.current) {
            targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Navbar />
            <div className='realestate_background_class' >
                {/* <Image src={joveralogo} alt='joveralogo' className='jovera_logo_common' /> */}
                <div className='real_estate_text'>
                    <h1 data-aos="fade-up" >Real Estate Finance</h1>
                </div>
                <h1 className='businessfinance_tag_h1' data-aos="fade-up">Time to buy or finance</h1>
                <h4 className='solutiondesigned' data-aos="fade-up" >your own property</h4>

                <div className='applynow_btn' data-aos="fade-up">
                    <Button onClick={handleScrollToSection}>APPLY NOW</Button>
                </div>
            </div>

            <div className='business_finance_tailored'>
                <Container>
                    <div className='business_finance_des' >
                        <Container>
                            <h1 className='loan_feature' data-aos="fade-up">Loan Features</h1>
                            <div className='paragraph_container' >
                                <h1 className='businessfinance_tag' data-aos="fade-right">
                                    Expand, grow, excel
                                </h1>
                                <p className='paragraph_text' style={{ textAlign: 'center' }} data-aos="fade-up">
                                    Business entities operating in the UAE and looking to acquire a loan to purchase ready-to-use property, construct property for commercial purposes, take over commercial real estate loans from other banks, or require additional finance for working capital, can now apply for our Real Estate Loan.
                                </p>
                            </div>
                        </Container>
                    </div>

                    <RealEstateEligibility />
                </Container>
            </div>


            <RealEstateForm targetSectionRef={targetSectionRef} />
            <div className='partner_container' >
                <Container>
                    <h1 className='ourPartner_tag' data-aos="fade-up">Our <span style={{ color: '#EBC758' }} data-aos="fade-up"> Partners</span> </h1>
                    <Row>
                        {partners.map((partner, index) => (
                            <Col xs={12} sm={6} md={6} lg={4} key={index} className="text-center">
                                <Image src={partner} alt={`partner-${index + 1}`} className="img_fluid" data-aos="fade-up" />
                            </Col>
                        ))}
                    </Row>

                </Container>

            </div>
            <ContactDetail />
            <Footer />
        </div>
    )
}

export default Page