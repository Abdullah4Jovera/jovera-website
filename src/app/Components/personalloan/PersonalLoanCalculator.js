"use client"
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container } from 'react-bootstrap';
import './personalLoan.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../mortgage/Mortgage.css'

const MortgageCalculator = () => {
    const [amount, setAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [tenureYears, setTenureYears] = useState('');
    const [tenureMonths, setTenureMonths] = useState('');

    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalInterestPayable, setTotalInterestPayable] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        const principal = parseFloat(amount) || 0;
        const rate = parseFloat(interestRate) / 100 / 12 || 0;
        const years = parseInt(tenureYears) || 0;
        const months = parseInt(tenureMonths) || 0;
        const tenure = (years * 12) + months;

        let monthlyPayment = 0;
        let totalPayment = 0;
        let totalInterest = 0;

        if (principal && tenure > 0) {
            if (rate === 0) {
                monthlyPayment = principal / tenure;
                totalPayment = principal;
                totalInterest = 0;
            } else {
                monthlyPayment = principal * (rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
                totalPayment = monthlyPayment * tenure;
                totalInterest = totalPayment - principal;
            }
        }

        setMonthlyPayment(monthlyPayment.toFixed(2));
        setTotalInterestPayable(totalInterest.toFixed(2));
        setTotalAmount(totalPayment.toFixed(2));
    }, [amount, interestRate, tenureYears, tenureMonths]);

    const handleTenureYearsChange = (e) => {
        const years = e.target.value;
        setTenureYears(years);
        setTenureMonths(0);  // Reset months when years are set
    };

    const handleTenureMonthsChange = (e) => {
        const months = e.target.value;
        const totalMonths = parseInt(tenureYears) * 12 + parseInt(months);
        const adjustedYears = Math.floor(totalMonths / 12);
        const adjustedMonths = totalMonths % 12;
        setTenureYears(adjustedYears);
        setTenureMonths(adjustedMonths);
    };

    return (
        <div className='mortgage_calculator_container'>
            <h1 className='h1_calculator_text' data-aos="fade-up">Calculator</h1>
            <div>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={3} className='calculator_column' data-aos="fade-up">
                            <Form.Label htmlFor="amount" className='form_label_text' data-aos="fade-up">Amount</Form.Label>
                            <Form.Control
                                type="text"
                                id="amount"
                                className='input_field_calculator'
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={3} className='calculator_column' data-aos="fade-up">
                            <Form.Label htmlFor="interestRate" className='form_label_text' data-aos="fade-up">Interest Rate</Form.Label>
                            <Form.Control
                                type="text"
                                id="interestRate"
                                step="0.01"
                                className='input_field_calculator'
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                            />
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={3} className='calculator_column' data-aos="fade-up">
                            <Form.Label htmlFor="tenureYears" className='form_label_text' data-aos="fade-up">Tenure Years</Form.Label>
                            <Form.Control
                                type="text"
                                id="tenureYears"
                                className='input_field_calculator'
                                value={tenureYears}
                                onChange={handleTenureYearsChange}
                            />
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={3} className='calculator_column' data-aos="fade-up">
                            <Form.Label htmlFor="tenureMonths" className='form_label_text' data-aos="fade-up">Tenure Months</Form.Label>
                            <Form.Control
                                type="text"
                                id="tenureMonths"
                                className='input_field_calculator'
                                value={tenureMonths}
                                onChange={handleTenureMonthsChange}
                            />
                        </Col>
                    </Row>

                    <Row className='mt-5 calculated_value'>
                        <Col xs={12} md={12} data-aos="fade-up">
                            <div>
                                <h5 className='mnthly_income_text mb-0' data-aos="fade-up">Monthly Payment</h5>
                                <div className='value_currency' data-aos="fade-up">
                                    <h5 className='value_text mb-0' data-aos="fade-up">{monthlyPayment}</h5>
                                    <h5 className='currency' data-aos="fade-up">AED</h5>
                                </div>
                            </div>
                            <hr style={{ border: '1px solid white', maxWidth: '520px' }} data-aos="fade-up" />
                        </Col>

                        <Col xs={12} md={12}>
                            <div>
                                <h5 className='mnthly_income_text mb-0' data-aos="fade-up">Total Interest Payable</h5>
                                <div className='value_currency' data-aos="fade-up">
                                    <h5 className='value_text mb-0' data-aos="fade-up">{totalInterestPayable}</h5>
                                    <h5 className='currency' data-aos="fade-up">AED</h5>
                                </div>
                            </div>
                            <hr style={{ border: '1px solid white', maxWidth: '520px' }} data-aos="fade-up" />
                        </Col>

                        <Col xs={12} md={12}>
                            <div>
                                <h5 className='mnthly_income_text mb-0' data-aos="fade-up">Total Amount</h5>
                                <div className='value_currency' data-aos="fade-up">
                                    <h5 className='value_text mb-0' data-aos="fade-up">{totalAmount}</h5>
                                    <h5 className='currency' data-aos="fade-up">AED</h5>
                                </div>
                            </div>
                            <hr style={{ border: '1px solid white', maxWidth: '520px' }} data-aos="fade-up" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default MortgageCalculator;
