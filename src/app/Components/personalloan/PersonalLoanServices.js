"use client"
import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../Home/Joveraservices.css'
import Card from 'react-bootstrap/Card';
import logotwo from '../../Assets/logotwo.png'
import logothree from '../../Assets/logothree.png'
import logofour from '../../Assets/logofour.png'
import logoone from '../../Assets/logoone.png'
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
const PersonalLoanServices = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='personalloan_services_container' >
            <div className='first_card_container' >
                <Card className='card_image_one' data-aos="fade-up" >
                    <Card.Body>
                        <Card.Body>
                            <div>
                                <h1 className='real_estate_text' style={{ color: '#EBC758' }} data-aos="fade-up">Personal finance with extra benefits</h1>

                                <div style={{ display: 'flex', alignItems: 'start', gap: '12px', flexDirection: 'column' }} className='mt-4'>
                                    <ul style={{ color: 'white' }} >
                                        <li>Salary Transfer Required</li>
                                    </ul>

                                    <ul style={{ color: 'white' }} >
                                        <li>Choose Low-Interest Personal Loans in UAE</li>
                                    </ul>

                                    <ul style={{ color: 'white' }} >
                                        <li>Approval with in 7 days</li>
                                    </ul>

                                    <ul style={{ color: 'white' }} >
                                        <li>Minimum Salary Required AED 10,000</li>
                                    </ul>

                                    <ul style={{ color: 'white' }} >
                                        <li>Loan amount up to AED 5 M</li>
                                    </ul>

                                </div>

                            </div>

                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>

            <div className='second_card_container' >
                <Card className='card_image_one' data-aos="fade-up">
                    <Card.Body>
                        <Card.Body>
                            <div>
                                <h1 className='real_estate_text' data-aos="fade-up" style={{ color: '#EBC758' }}>Disclosure Policy</h1>

                                <div style={{ display: 'flex', alignItems: 'start', gap: '12px', flexDirection: 'column' }} className='mt-4'>
                                    <ul style={{ color: 'white' }} >
                                        <li>The minimum loan repayment tenure is 6 months and the maximum loan repayment tenure is 48 months.</li>
                                    </ul>

                                    <ul style={{ color: 'white' }} >
                                        <li>APR or Annual Percentage Rate of personal loan may range from 2.43% to 34% in the UAE.</li>
                                    </ul>

                                    <ul style={{ color: 'white' }} >
                                        <li>Processing Fee: 1% of the loan amount with a minimum of AED 500 and up to a maximum of AED 2,500</li>
                                    </ul>

                                    <ul style={{ color: 'white' }} >
                                        <li>Maximum loan amount: AED 5000000</li>
                                    </ul>

                                </div>

                            </div>

                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>

            <div className='first_card_container' >
                <Card className='card_image_one' data-aos="fade-up">
                    <Card.Body>
                        <Card.Body>
                            <div>
                                <h1 className='real_estate_text' data-aos="fade-up" style={{ color: '#EBC758' }}>Representative Illustration</h1>
                                <div style={{ display: 'flex', alignItems: 'start', gap: '12px', flexDirection: 'column' }} className='mt-3'>
                                    <p style={{ color: 'white' }}>For a AED 20,000 loan over 48 months at a 13.99% interest rate, the EMI would be AED 546. Total repayment: AED 26,230, with AED 6,230 in interest. Processing fee: 1% of loan amount (min. AED 500, max. AED 2,500). For details, use the Jovera Group Personal Loan Calculator.</p>
                                </div>

                            </div>
                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default PersonalLoanServices