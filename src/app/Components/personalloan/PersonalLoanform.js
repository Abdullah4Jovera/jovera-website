'use client'
import React, { useState, useEffect } from 'react';
import '../realestate/realestate.css';
import { Col, Container, Row,Modal  } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import tick from '../../Assets/tick.png'

const PersonalLoanform = ({ targetSectionRef }) => {
    const [selectedService, setSelectedService] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedPurpose, setSelectedPurpose] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [hasLoan, setHasLoan] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        companyname: '',
        monthlysalary: '',
        loanamount: '',
        haveloan: '',
        message: '',
        loanDetails: '' // New field for loan details
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
        setSelectedService(event.target.value); // Save the selected nationality
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            service: ''
        }));
    };

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value); // Save the selected language
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            service: ''
        }));
    };

    const handleLoanChange = (event) => {
        const value = event.target.value;
        setHasLoan(value);
        setFormData({ ...formData, haveloan: value });

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            haveloan: ''
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        if (!formData.name) errors.name = "Name is required";
        if (!formData.phone) errors.phone = "Phone is required";
        if (!formData.email) errors.email = "Email is required";
        if (!formData.companyname) errors.companyname = "Company Name is required";
        if (!formData.monthlysalary) errors.monthlysalary = "Monthly Salary is required";
        if (!formData.haveloan) errors.haveloan = "Do You Have Any Loan";
        // if (!selectedService) errors.service = "Nationality is required";
        if (!formData.message) errors.message = "Message is required";

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            const payload = {
                product: 'Personal Loan',
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                // nationality: selectedService, // Sending nationality value
                // language: selectedLanguage,   // Sending language value
                details: `Nationality: ${selectedService}, Language: ${selectedLanguage}, Company Name: ${formData.companyname}, Monthly Salary: ${formData.monthlysalary}, Loan Amount: ${formData.loanamount}, Have Loan: ${formData.haveloan}, Loan Details: ${formData.loanDetails}`,
            };

            try {
                const response = await fetch('http://192.168.2.137:8000/api/lead/create-lead', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (response.ok) {
                    console.log('Form submitted successfully!', formData);
                    // Reset the form or show a success message
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        companyname: '',
                        monthlysalary: '',
                        loanamount: '',
                        haveloan: '',
                        message: '',
                        loanDetails: '',
                    });
                    setHasLoan('');
                    setSuccessModal(true)
                } else {
                    console.error('Error submitting form:', response);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };
    return (
        <div className='businessfinanceform' ref={targetSectionRef} >
            <h5 className='request_text' style={{ color: '#ebc758' }}>Request</h5>
            <h1 className='callback_form'>callback</h1>
            <Container>
                <Form onSubmit={handleSubmit} data-aos="fade-up">
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-2 mt-3" controlId="formName">
                                <Form.Label style={{ color: '#ebc758' }} >Name</Form.Label>
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
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-2 mt-3" controlId="formPhone">
                                <Form.Label style={{ color: '#ebc758' }} >Phone</Form.Label>
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
                    </Row>

                    {/* <Row>
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-2 mt-3" controlId="formNationality">
                                <Form.Label style={{ color: '#E3C086' }}>Nationality</Form.Label>
                                <Form.Select
                                    aria-label="Select Nationality"
                                    className='input_field'
                                    onChange={handleServiceChange}
                                    isInvalid={!!formErrors.service}
                                    style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                >
                                    <option className="custom-option">Select Nationality</option>
                                    <option className="custom-option" value="UAE Nationals">UAE Nationals</option>
                                    <option className="custom-option" value="Expatriates">Expatriates</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.service}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                            <Form.Group className="mb-2 mt-3" controlId="formLanguage">
                                <Form.Label style={{ color: '#E3C086' }}>Language</Form.Label>
                                <Form.Select
                                    aria-label="Select Language"
                                    className='input_field'
                                    onChange={handleLanguageChange}
                                    isInvalid={!!formErrors.service}
                                    style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                >
                                    <option className="custom-option">Select Language</option>
                                    <option className="custom-option" value="Arabic">Arabic</option>
                                    <option className="custom-option" value="English">English</option>
                                    <option className="custom-option" value="Other">Other</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.language}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row> */}


                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Label className="mb-2 mt-2" style={{ color: '#ebc758' }} >Email</Form.Label>
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
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Label className="mb-2 mt-2" style={{ color: '#ebc758' }} >Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Company Name"
                                className='input_field'
                                name="companyname"
                                value={formData.companyname}
                                onChange={handleChange}
                                isInvalid={!!formErrors.companyname}
                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.companyname}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Label className="mb-2 mt-2" style={{ color: '#ebc758' }} >Monthly Salary</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Monthly Salary"
                                className='input_field'
                                name="monthlysalary"
                                value={formData.monthlysalary}
                                onChange={handleChange}
                                isInvalid={!!formErrors.monthlysalary}
                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.monthlysalary}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Label className="mb-2 mt-2" style={{ color: '#ebc758' }} >Loan Amount</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Monthly Salary (Optional) "
                                className='input_field'
                                name="loanamount"
                                value={formData.loanamount}
                                onChange={handleChange}
                                isInvalid={!!formErrors.loanamount}
                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Label className="mb-2 mt-2" style={{ color: '#ebc758' }}>
                                Do You Have Any Loan
                            </Form.Label>
                            <Form.Select
                                aria-label="Do You Have Any Loan"
                                className='input_field'
                                name="haveloan"
                                value={formData.haveloan}
                                onChange={handleLoanChange}
                                isInvalid={!!formErrors.haveloan}
                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                            >
                                <option className="custom-option" value="">Select an option</option>
                                <option className="custom-option" value="Yes">Yes</option>
                                <option className="custom-option" value="No">No</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {formErrors.haveloan}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    {hasLoan === 'Yes' && (
                        <Row>
                            <Col xs={12} md={12}>
                                <Form.Group className="mb-2 mt-3" controlId="formLoanDetails">
                                    <Form.Label style={{ color: '#ebc758' }}>Loan Details</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Loan Details"
                                        className='input_field'
                                        name="loanDetails"
                                        value={formData.loanDetails}
                                        onChange={handleChange}
                                        isInvalid={!!formErrors.loanDetails}
                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formErrors.loanDetails}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                    )}



                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Group className="mb-2 mt-3" controlId="formMessage">
                                <Form.Label style={{ color: '#ebc758' }} >Message</Form.Label>
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
                        <Form.Check data-aos="fade-left"
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

export default PersonalLoanform;
