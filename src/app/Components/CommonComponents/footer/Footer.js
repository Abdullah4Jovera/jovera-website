'use Client'
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from 'next/image';
import footerlogo from '../../../Assets/footerlogo.png'
import { FaLinkedin } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='footer_main_container' >
            <Container>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >

                    <Col xs={12} md={6} lg={4} className='location_tag_col'>
                        <div className='footer_div_paragraph' >
                            <h2 className='location_tag' data-aos="fade-right" >Our Location</h2>
                            <p data-aos="fade-right">
                                8th Floor, Al Jazira Club Tower A , Al Muroor St , Abu Dhabi, UAE
                            </p>

                            <p>
                                MM2 - Al Faisal Building, Hafiz Ibrahim Street, Nuaimeya 1 - Ajman
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            src={footerlogo}
                            alt='footerlogo'
                            style={{ cursor: 'pointer' }}
                            onClick={scrollToTop}
                            className='logofooter_image_jovera'
                            data-aos="fade-up"
                        />
                    </Col>

                    <Col xs={12} md={6} lg={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='social_media_links_footer' >
                            <Link href={'https://www.facebook.com/joveragroup'}  ><FaFacebook style={{ color: 'white', cursor: 'pointer' }} /></Link>
                            <Link href={'https://www.instagram.com/jovera.ae/'} ><FaInstagram style={{ color: 'white', cursor: 'pointer' }} /></Link>
                            <Link href={'https://www.youtube.com/@jovera8441'} ><FaYoutube style={{ color: 'white', cursor: 'pointer' }} /></Link>
                            <Link href={'https://www.linkedin.com/company/jovera/'} > <FaLinkedin style={{ color: 'white', cursor: 'pointer' }} /></Link>
                            <Link href={'https://www.tiktok.com/@jovera.ae'} > <FaTiktok style={{ color: 'white', cursor: 'pointer' }} /></Link>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Page
