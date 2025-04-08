"use client"
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css'
import Card from 'react-bootstrap/Card';
import carddesone from '../../Assets/carddesone.png'
import carddestwo from '../../Assets/carddestwo.png'
import carddesthree from '../../Assets/carddesthree.png'
import carddesfour from '../../Assets/carddesfour.png'
import Image from 'next/image';
const JoveraDescription = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='jovera_description' >
            <Container fluid >
                <Row>
                    <Col xs={12} sm={6} md={6} lg={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='mt-4' >
                        <Card style={{ width: '100%' }} className='card_one_image' >
                            <Card.Body>
                                <div>
                                    <Image src={carddesone} alt='carddesone'data-aos="fade-up" />
                                    <h5 className='mt-2'data-aos="fade-up" style={{color:'#EBC758'}} >Experience</h5>
                                    <p data-aos="fade-up">With 12 years of real estate experience, delivering exceptional results and driving market growth.</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='mt-4'>
                        <Card style={{ width: '100%' }} className='card_two_image' >
                            <Card.Body>
                                <div>
                                    <Image src={carddestwo} alt='carddestwo' data-aos="fade-up"/>
                                    <h5 className='mt-2' data-aos="fade-up" style={{color:'#EBC758'}}>Experts</h5>
                                    <p data-aos="fade-up">With decades of expertise, industry experts deliver exceptional insights and drive innovation.</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='mt-4'>
                        <Card style={{ width: '100%' }} className='card_three_image' >
                            <Card.Body>
                                <div>
                                    <Image src={carddesfour} alt='carddesfour' data-aos="fade-up"/>
                                    <h5 className='mt-2' data-aos="fade-up" style={{color:'#EBC758'}}>Solutions</h5>
                                    <p data-aos="fade-up">Experience rapid and effective solutions tailored to meet your needs with precision and speed.</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='mt-4'>
                        <Card style={{ width: '100%' }} className='card_four_image'>
                            <Card.Body>
                                <div>
                                    <Image src={carddesthree} alt='carddesthree' data-aos="fade-up" />
                                    <h5 className='mt-2' data-aos="fade-up" style={{color:'#EBC758'}}>Price</h5>
                                    <p data-aos="fade-up">Experience adaptive pricing tailored to your needs with precision and agility for optimal value.</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default JoveraDescription