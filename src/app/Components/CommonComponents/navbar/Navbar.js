'use client'
import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Container, Modal, Button, Row, Col, Form } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { FaBars } from "react-icons/fa";
import Image from 'next/image';
import navbarlogo from '../../../Assets/navbarlogo.png'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa6";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

const Sidenav = () => {
    const [sidenavWidth, setSidenavWidth] = useState(0);
    const [showCalculator, setShowCalculator] = useState(false);

    const [amount, setAmount] = useState(100000); // Default value
    const [interestRate, setInterestRate] = useState(4.8); // Default value
    const [tenureYears, setTenureYears] = useState(2); // Default value
    const [tenureMonths, setTenureMonths] = useState(0); // Default value

    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalInterestPayable, setTotalInterestPayable] = useState(0);

    const [loanAmount, setLoanAmount] = useState(1000000);
    const [annualInterestRate, setAnnualInterestRate] = useState(4.8);
    const [loanTerm, setLoanTerm] = useState(25);
    const [loanTermMonths, setLoanTermMonths] = useState(0);
    const [emiAmount, setEmiAmount] = useState(5730);
    const [emiAnnualInterestRate, setEmiAnnualInterestRate] = useState(4.8);
    const [loanTermYears, setLoanTermYears] = useState(25);
    const [emiloanTermMonths, setEmiloanTermMonths] = useState(0);
    const [monthlyEMI, setMonthlyEMI] = useState(5730);
    const [totalInterest, setTotalInterest] = useState(718991);
    const [totalAmount, setTotalAmount] = useState(1718991);
    const [calculatedLoanAmount, setCalculatedLoanAmount] = useState(1000005.3);

    const calculateEMI = () => {
        const principal = parseFloat(loanAmount);
        const rate = parseFloat(annualInterestRate) / 100 / 12;
        const tenure = loanTerm * 12 + parseInt(loanTermMonths);

        if (rate === 0) {
            const emi = principal / tenure;
            setMonthlyEMI(emi.toFixed(2));
            setTotalInterest((emi * tenure - principal).toFixed(2));
            setTotalAmount((emi * tenure).toFixed(2));
            return;
        }

        const emi =
            (principal * rate * Math.pow(1 + rate, tenure)) /
            (Math.pow(1 + rate, tenure) - 1);

        setMonthlyEMI(emi.toFixed(2));
        setTotalInterest((emi * tenure - principal).toFixed(2));
        setTotalAmount((emi * tenure).toFixed(2));
    };

    const calculateLoanAmount = () => {
        const rate = parseFloat(emiAnnualInterestRate) / 100 / 12;
        const tenure = loanTermYears * 12 + parseInt(emiloanTermMonths);

        if (rate === 0) {
            setCalculatedLoanAmount((emiAmount * tenure).toFixed(2));
            return;
        }

        const loanAmt =
            (emiAmount * (Math.pow(1 + rate, tenure) - 1)) /
            (rate * Math.pow(1 + rate, tenure));

        setCalculatedLoanAmount(loanAmt.toFixed(2));
    };

    useEffect(() => {
        calculateEMI();
    }, [loanAmount, annualInterestRate, loanTerm, loanTermMonths]);

    useEffect(() => {
        calculateLoanAmount();
    }, [emiAmount, emiAnnualInterestRate, loanTermYears, emiloanTermMonths]);

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

    const openNav = () => {
        setSidenavWidth(250);
    };

    const closeNav = () => {
        setSidenavWidth(0);
    };

    const logoRef = useRef(null);

    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target;

        const rotateX = (offsetY - clientHeight / 2) / 20;
        const rotateY = (offsetX - clientWidth / 2) / 20;

        logoRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    };

    const handleMouseLeave = () => {
        logoRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    };

    // Doughnut chart data
    const chartData = {
        labels: ["Monthly Payment", "Total Interest", "Total Amount"],
        datasets: [
            {
                data: [monthlyPayment, totalInterestPayable, totalAmount],
                backgroundColor: ["#ebc758", "#f78c1f", "#2ec4b6"],
                hoverBackgroundColor: ["#d4a847", "#d5721d", "#27a29b"],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    color: "white",
                },
            },
        },
    };

    return (
        <>
            <Navbar expand="lg sticky-top" className='navbar_bg_color' >
                <Container fluid >
                    <Navbar.Brand href="#" style={{ color: 'white' }} className='responsivelogo' >Navbar</Navbar.Brand>
                    <Link href={'/'}>
                        <Image
                            src={navbarlogo}
                            alt='navbarlogo'
                            className='navbar_logo'
                            ref={logoRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        />
                    </Link>
                    <div className='navbar_link_tag' >
                        <Link href={'/'} className='navbar_text' >Home</Link>
                        <Link href={'/Components/businessfinance'} className='navbar_text' >Business Finance</Link>
                        <Link href={'/Components/mortgage'} className='navbar_text' >Mortgage Loan</Link>
                        <Link href={'/Components/personalloan'} className='navbar_text' >Personal Loan</Link>
                        <Link href={'/Components/about'} className='navbar_text' >About Us</Link>
                        <Link href="/Components/contact" className='navbar_text' >Contact Us</Link>
                        <FaCalculator onClick={() => setShowCalculator(true)} className='navbar_text cal_btn' style={{ fontSize: '30px', color: '#E3C086', cursor: 'pointer' }} />
                    </div>
                    <div className='navbar_bg_color' >
                        <div id="mySidenav" className="sidenav" style={{ width: sidenavWidth }}>

                            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
                                &times;
                            </a>

                            <div className='imagelogo' >
                                <Link href={'/'}>
                                    <Image src={navbarlogo} alt='navbarlogo' />
                                </Link>
                            </div>

                            <div className='link_tag_sidebar ' >
                                <Link href={'/'} className='sidebar_text' >Home</Link>
                                <Link href={'/Components/businessfinance'} className='sidebar_text' >Business Finance</Link>
                                <Link href={'/Components/personalloan'} className='sidebar_text' >Personal Loan</Link>
                                <Link href={'/Components/mortgage'} className='sidebar_text' >Mortgage Loan</Link>
                                <Link href={'/Components/about'} className='sidebar_text' >About Us</Link>
                                <Link href="/Components/contact" className='sidebar_text' >Contact Us</Link>
                                <Button onClick={() => setShowCalculator(true)} className='navbar_text cal_btn' style={{ marginLeft: '20px' }} >Calculator</Button>
                            </div>

                            <div className='sidebar_social_logo'>
                                <Link href={'https://www.facebook.com/joveragroup'} ><FaFacebook style={{ color: 'white', cursor: 'pointer' }} /></Link>
                                <Link href={'https://www.instagram.com/jovera.ae/'} ><FaInstagram style={{ color: 'white', cursor: 'pointer' }} /></Link>
                                <Link href={'https://www.youtube.com/@jovera8441'} ><FaYoutube style={{ color: 'white', cursor: 'pointer' }} /></Link>
                                <Link href={'https://www.linkedin.com/company/jovera/'} > <FaLinkedin style={{ color: 'white', cursor: 'pointer' }} /></Link>
                            </div>
                        </div>
                        <span
                            style={{ fontSize: '30px', cursor: 'pointer' }}
                            onClick={openNav}
                        >
                            <FaBars style={{ color: 'white' }} />
                        </span>
                    </div>
                </Container>
            </Navbar>

            <Modal show={showCalculator} onHide={() => setShowCalculator(false)} size="lg" centered>
                <Modal.Body
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        border: "1px solid #EBC758",
                        borderRadius: "10px",
                        padding:'25px'
                    }}
                >
                    <div>
                        <h2 className='mb-3' style={{ color: '#ebc758' }}>Loan Calculator</h2>
                    </div>
                    <div className="top">
                        <Form>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }} >
                                <Form.Group controlId="loanAmount">
                                    <Form.Label className="mutual_class_color mb-0">Amount</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(e.target.value)}
                                        className='input_field_input_field'
                                    />
                                </Form.Group>
                                <Form.Group controlId="annualInterestRate">
                                    <Form.Label className="mutual_class_color mb-0">Interest Rate (%)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={annualInterestRate}
                                        onChange={(e) => setAnnualInterestRate(e.target.value)}
                                        className='input_field_input_field'
                                    />
                                </Form.Group>
                                <Form.Group controlId="loanTerm">
                                    <Form.Label className="mutual_class_color mb-0">Tenure Years</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={loanTerm}
                                        onChange={(e) => setLoanTerm(e.target.value)}
                                        className='input_field_input_field'
                                    />
                                </Form.Group>
                                <Form.Group controlId="loanTermMonths">
                                    <Form.Label className="mutual_class_color mb-0">Tenure Months</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={loanTermMonths}
                                        onChange={(e) => setLoanTermMonths(e.target.value)}
                                        className='input_field_input_field'
                                    />
                                </Form.Group>
                            </div>
                        </Form>
                    </div>


                    <div className="result mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} >
                        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column', gap: '20px' }}>
                            <div className="loan-emi">
                                <h5 className="mutual_class_color">Monthly Payment</h5>
                                <div className="mutual_heading_class">
                                    <span style={{ fontSize: '16px' }}>
                                        {`${new Intl.NumberFormat('en-US').format(monthlyEMI)} AED`}
                                    </span>
                                </div>
                            </div>
                            <div className="total-interest">
                                <h5 className="mutual_class_color">Total Interest Payable</h5>
                                <div className="mutual_heading_class">
                                    <span style={{ fontSize: '16px' }}>
                                        {`${new Intl.NumberFormat('en-US').format(totalInterest)} AED`}
                                    </span>
                                </div>
                            </div>
                            <div className="total-amount">
                                <h5 className="mutual_class_color">Total Amount</h5>
                                <div className="mutual_heading_class">
                                    <span style={{ fontSize: '16px' }}>
                                        {`${new Intl.NumberFormat('en-US').format(totalAmount)} AED`}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Doughnut chart */}
                        <div style={{ width: '50%', height: '50%' }}>
                            <Doughnut data={chartData} options={chartOptions} style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>

                    <div className="top mt-2">
                        <Form>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }} >
                                <Form.Group controlId="emiAmount">
                                    <Form.Label className="mutual_class_color mb-0">Desired EMI</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={emiAmount}
                                        onChange={(e) => setEmiAmount(e.target.value)}
                                        className='input_field_input_field'
                                    />
                                </Form.Group>
                                <Form.Group controlId="emiAnnualInterestRate">
                                    <Form.Label className="mutual_class_color mb-0">Interest Rate (%)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={emiAnnualInterestRate}
                                        onChange={(e) => setEmiAnnualInterestRate(e.target.value)}
                                        className='input_field_input_field'
                                    />
                                </Form.Group>
                                <Form.Group controlId="loanTermYears">
                                    <Form.Label className="mutual_class_color mb-0">Tenure Years</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={loanTermYears}
                                        onChange={(e) => setLoanTermYears(e.target.value)}
                                        className='input_field_input_field'
                                    />
                                </Form.Group>
                                <Form.Group controlId="emiloanTermMonths">
                                    <Form.Label className="mutual_class_color mb-0">Tenure Months</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={emiloanTermMonths}
                                        onChange={(e) => setEmiloanTermMonths(e.target.value)}
                                        className='input_field_input_field'
                                    />
                                </Form.Group>
                            </div>
                        </Form>
                    </div>
                    <div className="result mt-2">
                        <div className="total-amount">
                            <h5 className="mutual_class_color">Desired Loan Amount Approx. (By EMI)</h5>
                            <div className="mutual_heading_class">
                                <span style={{ fontSize: '16px' }}>
                                    {`${new Intl.NumberFormat('en-US').format(calculatedLoanAmount)} AED`}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                        <Button variant="secondary" onClick={() => setShowCalculator(false)}>
                            Close
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Sidenav;