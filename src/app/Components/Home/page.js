"use client"
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './home.css'
import Image from 'next/image';
import ceoImage from '../../Assets/ceoImage.png'
import mdimage from '../../Assets/mdimage.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import JoveraManager from './JoveraManager'
import JoveraDescription from './JoveraDescription';
import JoveraServices from './JoveraServices';
import JoveraCustomers from './JoveraCustomers';
import Footer from '../CommonComponents/footer/Footer';
import JoveraTime from './JoveraTime';
import homejoveralogo from '../../Assets/homejoveralogo.png'

const Page = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        setShowOverlay(true);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <div className="heroSectionSlider">
                <div className="videoContainer">
                    <ReactPlayer
                        url='https://res.cloudinary.com/dn1oz4vt9/video/upload/v1723199422/intro_vc76vf.mp4'
                        controls={false}
                        playing={true}
                        muted={true}
                        loop={true}
                        playsinline={true}
                        width="100%"
                        height="100%"
                    />
                    <Image src={homejoveralogo} alt='homejoveralogo' className='homejoveralogo_image' />
                </div>
            </div>
            <div className='ceo_md_container' >
                <Container>
                    <Row className='CEO_Row' >
                        <Col xs={12} md={6} >
                            <h1 className='ceo_message' data-aos="fade-up" >
                                CEO’S MESSAGE
                            </h1>

                            <p style={{ textAlign: 'justify' }} data-aos="fade-up">
                                As the CEO of Jovera Group, I am excited to lead our journey in real estate and finance in the UAE. Our success is deeply connected to the success of our clients and partners. We are dedicated to excellence, reliability, and innovation, providing tailored solutions with integrity and expertise.
                            </p>

                            <p style={{ textAlign: 'justify' }} data-aos="fade-up">
                                Looking ahead, we’re eager to expand our services, strengthen relationships, and achieve new milestones together. Thank you for your trust and support; it drives us to continually set new standards of excellence. Here’s to a future of growth and shared success.
                            </p>
                        </Col>
                        <Col xs={12} md={6} data-aos="fade-up">
                            <Image src={ceoImage} alt='ceoImage' className='ceo_home_image' />
                        </Col>
                    </Row>

                    <Row className='md_Row' >

                        <Col xs={12} md={6} data-aos="fade-up">
                            <Image src={mdimage} alt='mdimage' className='ceo_home_image' />
                        </Col>
                        <Col xs={12} md={6} >
                            <h1 className='ceo_message' data-aos="fade-up">
                                MD’S MESSAGE
                            </h1>

                            <p style={{ textAlign: 'justify' }} data-aos="fade-up">
                                As Managing Director of Jovera Group, I am honoured to lead a team committed to excellence in real estate and financial services. Our dedication to integrity, innovation, and client satisfaction drives us to constantly evolve and push boundaries. We are more than a team; we are a family united by a shared vision and a commitment to delivering exceptional value. Thank you for your trust and support. Here’s to a future of growth and continued success.
                            </p>

                        </Col>
                    </Row>
                </Container>
            </div>

            <JoveraDescription />
            <JoveraManager />
            <JoveraServices />
            <JoveraCustomers />
            <JoveraTime />
            <Footer />
        </>
    )
}

export default Page