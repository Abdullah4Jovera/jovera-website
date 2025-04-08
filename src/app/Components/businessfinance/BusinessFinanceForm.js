'use client'
import React, { useState, useEffect } from 'react';
import './businessfinance.css';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import tick from '../../Assets/tick.png'

const BusinessFinanceForm = ({ targetSectionRef }) => {
    const [selectedService, setSelectedService] = useState('');
    const [companyPos, setCompanyPos] = useState('');
    const [hasAutoFinance, setHasAutoFinance] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        companyName: '',
        companyTurnover: '',
        turnoverMonthly: '',
        emiPaid: '',
        lgsRequested: '',
        message: ''
    });
    const [isChecked, setIsChecked] = useState(false);
    const [successModal, setSuccessModal] = useState(false)


    useEffect(() => {
        if (successModal) {
            const timer = setTimeout(() => {
                setSuccessModal(false); // Close the modal after 3 seconds
            }, 2000); // 2000ms = 2 seconds

            // Clean up the timer when the component unmounts or modal is closed
            return () => clearTimeout(timer);
        }
    }, [successModal]);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
        if (event.target.value !== "2") {
            setHasAutoFinance('');
        }

        // Clear the service error when a value is selected
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            service: ''
        }));
    };

    const handleCompanyPosChange = (event) => {
        setCompanyPos(event.target.value);

        // Clear the companyPos error when a value is selected
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            companyPos: ''
        }));
    };

    const handleHasAutoFinanceChange = (event) => {
        setHasAutoFinance(event.target.value);

        // Clear the hasAutoFinance error when a value is selected
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            hasAutoFinance: ''
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear the error for the current field
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        // Validation logic
        if (!formData.name) errors.name = "Name is required";
        if (!formData.phone) errors.phone = "Phone is required";
        if (!formData.email) errors.email = "Email is required";
        if (!selectedService) errors.service = "Service is required";
        if (selectedService && !formData.companyName) errors.companyName = "Company Name is required";
        if (selectedService === "1" && !formData.companyTurnover) errors.companyTurnover = "Company Turnover is required";
        if (selectedService === "1" && !companyPos) errors.companyPos = "Company POS is required";
        if (selectedService === "1" && companyPos === '1' && !formData.turnoverMonthly) errors.turnoverMonthly = "Turnover Monthly is required";
        if (selectedService === "2" && !hasAutoFinance) errors.hasAutoFinance = "Auto Finance info is required";
        if (selectedService === "2" && hasAutoFinance === '1' && !formData.emiPaid) errors.emiPaid = "Total EMI Paid is required";
        if (selectedService === "3" && !formData.lgsRequested) errors.lgsRequested = "LGs Requested is required";
        if (!formData.message) errors.message = "Message is required";

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Create the details string dynamically
            let details = `Service: ${selectedService}, Company POS: ${companyPos}, Company Name: ${formData.companyName}, Message: ${formData.message}`;

            if (selectedService === "1") {
                details += `, Company Turnover: ${formData.companyTurnover}, Company Turnover Monthly: ${formData.turnoverMonthly}`;
            } else if (selectedService === "2") {
                details += `, Auto Finance: ${hasAutoFinance}, EMI Paid: ${formData.emiPaid}`;
            } else if (selectedService === "3") {
                details += `, LGs Requested: ${formData.lgsRequested}`;
            }

            // Create the payload
            const payload = {
                product: 'Business Loan',
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                details: details
            };

            try {
                // Send POST request to the API
                const response = await fetch('http://192.168.2.137:8000/api/lead/create-lead', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                const data = await response.json();

                if (response.ok) {
                    console.log('Form submitted successfully!', data);
                    setSuccessModal(true)
                } else {
                    console.log('Failed to submit form. Please try again later.');
                }
            } catch (err) {
                console.log('An error occurred. Please try again.');
            }
        }
    };


    return (
        <div className='businessfinanceform' ref={targetSectionRef} >
            <h5 className='request_text'>Request</h5>
            <h1 className='callback_form'>callback</h1>
            <Container>
                <Form onSubmit={handleSubmit} data-aos="fade-up">
                    <Row>
                        <Col xs={12} md={4}>
                            <Form.Group className="mb-2 mt-3" controlId="formName">
                                <Form.Label style={{ color: '#E3C086' }} >Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    className='input_field'
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    isInvalid={!!formErrors.name}
                                    style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group className="mb-2 mt-3" controlId="formPhone">
                                <Form.Label style={{ color: '#E3C086' }} >Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className='input_field'
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    isInvalid={!!formErrors.phone}
                                    style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col xs={12} md={4}>
                            <Form.Group className="mb-2 mt-3" controlId="formEmail">
                                <Form.Label style={{ color: '#E3C086' }} >Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    className='input_field'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    isInvalid={!!formErrors.email}
                                    style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col xs={12} md={12}>
                            <Form.Label className="mb-2 mt-2" style={{ color: '#E3C086' }} >Services</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                className='input_field'
                                onChange={handleServiceChange}
                                isInvalid={!!formErrors.service}
                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                            >
                                <option className="custom-option">Select Services</option>
                                <option className="custom-option" value="1">SME Business Loan</option>
                                <option className="custom-option" value="2">Fleet Finance (Auto Loans)</option>
                                <option className="custom-option" value="3">LGs / LCs</option>
                                <option className="custom-option" value="4">Account Opening</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {formErrors.service}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    {selectedService === "1" && (
                        <>
                            <Row>
                                <Col xs={12} md={12}>
                                    <Form.Group className="mb-2 mt-3" controlId="formCompanyName">
                                        <Form.Label style={{ color: '#E3C086' }} >Company Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Company Name"
                                            className='input_field'
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            isInvalid={!!formErrors.companyName}
                                            style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formErrors.companyName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={12}>
                                    <Form.Label className="mb-2 mt-3" style={{ color: '#E3C086' }} >Company TurnOver</Form.Label>
                                    <Form.Select
                                        aria-label="Company TurnOver"
                                        className='input_field'
                                        name="companyTurnover"
                                        value={formData.companyTurnover}
                                        onChange={handleChange}
                                        isInvalid={!!formErrors.companyTurnover}
                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                    >
                                        <option className="custom-option">Company TurnOver in Last Year</option>
                                        <option className="custom-option" value="1">100K to 500K AED</option>
                                        <option className="custom-option" value="2">500K to 2M AED</option>
                                        <option className="custom-option" value="3">2M to 10M AED</option>
                                        <option className="custom-option" value="4">10M+ AED</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {formErrors.companyTurnover}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={12}>
                                    <Form.Label className="mb-2 mt-3" style={{ color: '#E3C086' }} >Company POS</Form.Label>
                                    <Form.Select
                                        aria-label="Company POS"
                                        className='input_field'
                                        value={companyPos}
                                        onChange={handleCompanyPosChange}
                                        isInvalid={!!formErrors.companyPos}
                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                    >
                                        <option className="custom-option">POS monthly swipe sales</option>
                                        <option className="custom-option" value="1">Yes</option>
                                        <option className="custom-option" value="2">No</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {formErrors.companyPos}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>

                            {companyPos === '1' && (
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Form.Label className="mb-2 mt-3" style={{ color: '#E3C086' }} >Turnover Monthly (AED)</Form.Label>
                                        <Form.Select
                                            aria-label="Turnover Monthly"
                                            className='input_field'
                                            name="turnoverMonthly"
                                            value={formData.turnoverMonthly}
                                            onChange={handleChange}
                                            isInvalid={!!formErrors.turnoverMonthly}
                                            style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                        >
                                            <option className="custom-option">POS swipe sales in AED</option>
                                            <option className="custom-option" value="1">100K to 500K AED</option>
                                            <option className="custom-option" value="2">500K to 2M AED</option>
                                            <option className="custom-option" value="3">2M to 10M AED</option>
                                            <option className="custom-option" value="4">500K+ AED</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {formErrors.turnoverMonthly}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>
                            )}
                        </>
                    )}

                    {selectedService === "2" && (
                        <>
                            <Row>
                                <Col xs={12} md={12}>
                                    <Form.Label className="mb-2 mt-3" style={{ color: '#E3C086' }} >Has Auto Finance?</Form.Label>
                                    <Form.Select
                                        aria-label="Has Auto Finance"
                                        className='input_field'
                                        value={hasAutoFinance}
                                        onChange={handleHasAutoFinanceChange}
                                        isInvalid={!!formErrors.hasAutoFinance}
                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                    >
                                        <option className="custom-option" value="">Auto Finance</option>
                                        <option className="custom-option" value="1">Yes</option>
                                        <option className="custom-option" value="2">No</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {formErrors.hasAutoFinance}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>

                            {hasAutoFinance === '1' && (
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Form.Group className="mb-2 mt-3" controlId="formEMIPaid">
                                            <Form.Label style={{ color: '#E3C086' }} >Total EMI Paid (AED)</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter total EMI Paid"
                                                className='input_field'
                                                name="emiPaid"
                                                value={formData.emiPaid}
                                                onChange={handleChange}
                                                isInvalid={!!formErrors.emiPaid}
                                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {formErrors.emiPaid}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            )}
                        </>
                    )}

                    {selectedService === "3" && (
                        <>
                            <Row>
                                <Col xs={12} md={12}>
                                    <Form.Group className="mb-2 mt-3" controlId="formCompanyName">
                                        <Form.Label style={{ color: '#E3C086' }} >Company Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Company Name"
                                            className='input_field'
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            isInvalid={!!formErrors.companyName}
                                            style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formErrors.companyName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={12}>
                                    <Form.Group className="mb-2 mt-3" controlId="formLGS">
                                        <Form.Label style={{ color: '#E3C086' }} >LGs Requested (AED)</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter LGs Requested"
                                            className='input_field'
                                            name="lgsRequested"
                                            value={formData.lgsRequested}
                                            onChange={handleChange}
                                            isInvalid={!!formErrors.lgsRequested}
                                            style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formErrors.lgsRequested}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </>
                    )}

                    {selectedService === "4" && (
                        <Row>
                            <Col xs={12} md={12}>
                                <Form.Group className="mb-2 mt-3" controlId="formCompanyName">
                                    <Form.Label style={{ color: '#E3C086' }} >Company Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Company Name"
                                        className='input_field'
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        isInvalid={!!formErrors.companyName}
                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formErrors.companyName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                    )}

                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Group className="mb-2 mt-3" controlId="formMessage">
                                <Form.Label style={{ color: '#E3C086' }} >Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter your message"
                                    className='input_field'
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    isInvalid={!!formErrors.message}
                                    style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <div style={{ display: 'flex', gap: '10px', padding: '15px' }} >
                        <Form.Check aria-label="option 1"
                            data-aos="fade-left"
                            checked={isChecked}
                            onChange={handleCheckboxChange} />
                        <p data-aos="fade-right">I hereby give consent to Jovera Group to contact me & share my details with the UAE registered banks.</p>
                    </div>

                    <div className='submit_handler_container' data-aos="fade-up" >
                        <button disabled={!isChecked} className={`submit_btn ${!isChecked ? 'disabled_btn' : ''}`} type='submit' >Submit</button>
                    </div>
                </Form>

                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={successModal}
                    onHide={() => setSuccessModal(false)}
                >
                    <Modal.Header closeButton style={{ border: 'none', backgroundColor: '#000' }} ></Modal.Header>
                    <Modal.Body style={{ backgroundColor: 'black' }}  >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                            <Image src={tick} alt='tick' width={120} height={120} />
                            <h5 style={{ color: '#EBC758', textAlign: 'center' }} className='mt-4' > SuccessFully Submitted </h5>
                        </div>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
};

export default BusinessFinanceForm;
