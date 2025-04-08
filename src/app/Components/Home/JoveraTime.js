"use client"
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './JoveraCustomers.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const JoveraTime = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='joveratime_container' >
            <Container>
                <Row>
                    <h5 className='wearetext' data-aos="fade-up">We are</h5>
                    <h5 className='weareOpentext' data-aos="fade-up">Open</h5>

                    <div className='scheduled_time' >

                        <div>
                            <p className='mb-0' style={{ color: '#E3C086', textAlign: 'center' }} data-aos="fade-up" >Mon - Fri</p>
                            <h5 style={{ textAlign: 'center' }} data-aos="fade-up">10:00AM - 6:30PM</h5>
                        </div>


                        <div>
                            <p className='mb-0' style={{ color: '#E3C086', textAlign: 'center' }} data-aos="fade-up">Saturday</p>
                            <h5 style={{ textAlign: 'center' }} data-aos="fade-up">10:00AM - 4:00PM</h5>
                        </div>

                        <div>
                            <p className='mb-0' style={{ color: '#E3C086', textAlign: 'center' }} data-aos="fade-up">Sunday</p>
                            <h5 style={{ textAlign: 'center' }} data-aos="fade-up">Close</h5>
                        </div>

                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default JoveraTime