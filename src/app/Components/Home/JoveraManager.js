"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css'
import { Row, Container, Col } from 'react-bootstrap';
import Image from 'next/image';
import managerone from '../../Assets/managerone.jpg'
import managertwo from '../../Assets/managertwo.jpg'
import managerthree from '../../Assets/managerthree.jpg'
import managerfour from '../../Assets/managerfour.png'
import managerfive from '../../Assets/managerfive.png'
const JoveraManager = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='JoveraManager_container' >
            <h1 className='meet_our_text' data-aos="fade-up">Meet Our</h1>
            <h1 className='manager_text' data-aos="fade-up">Managers</h1>

            <Container>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }} className='mt-2'>

                    <Col xs={12} sm={6} md={4} lg={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div data-aos="fade-up">
                            <Image src={managerone} alt='managerone' className='managers_all_videos' data-aos="fade-up" />
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                <p className='mb-0 jooveramanager_title' data-aos="fade-up" style={{ color: '#EBC758' }}>Mr.Mohamed Kamal</p>
                                <p className='mb-0 jooveramanager_title' data-aos="fade-up">IT Manager</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div data-aos="fade-up">
                            <div>
                                <Image src={managerfour} alt='managerfour' className='managers_all_videos' data-aos="fade-up" />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                <p className='mb-0 jooveramanager_title' data-aos="fade-up" style={{ color: '#EBC758' }} >Mr.Shady Abosaada</p>
                                <p className='mb-0 jooveramanager_title' data-aos="fade-up" >Head Of Business Banking</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div data-aos="fade-up">
                            <Image src={managerfive} alt='managerfive' className='managers_all_videos' data-aos="fade-up" />
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                <p className='mb-0 jooveramanager_title' data-aos="fade-up" style={{ color: '#EBC758' }}>Mr.Mohamed Gamal</p>
                                <p className='mb-0 jooveramanager_title' data-aos="fade-up" >Head Of HR</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div data-aos="fade-up">
                            <Image src={managerthree} alt='managerthree' className='managers_all_videos' data-aos="fade-up" />
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                <p className='mb-0 jooveramanager_title' data-aos="fade-up" style={{ color: '#EBC758' }}>Mr.Hossam</p>
                                <p className='mb-0 jooveramanager_title' data-aos="fade-up">Head Of Travel & Tourism</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div data-aos="fade-up">
                            <Image src={managertwo} alt='managertwo' className='managers_all_videos' data-aos="fade-up" />
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                <p className='mb-0 jooveramanager_title' data-aos="fade-up" style={{ color: '#EBC758' }}>Mr.Abnoub</p>
                                <p className='mb-0 jooveramanager_title' data-aos="fade-up">Head of Marketing</p>
                            </div>
                        </div>
                    </Col>

                    {/* <Col xs={12} sm={6} md={4} lg={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div data-aos="fade-up">
                            <div>
                                <Image src={managerfour} alt='managerfour' className='managers_all_videos' data-aos="fade-up" />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                <p className='mb-0 jooveramanager_title' data-aos="fade-up" style={{ color: '#EBC758' }} >Mr.Shady Abosaada</p>
                                <p className='mb-0 jooveramanager_title' data-aos="fade-up" >Head Of Business Banking</p>
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default JoveraManager