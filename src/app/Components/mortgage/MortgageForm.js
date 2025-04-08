import React, { useState, useEffect } from 'react';
import '../realestate/realestate.css';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import tick from '../../Assets/tick.png'

const MortgageForm = ({ targetSectionRef }) => {
    const [selectedProperty, setSelectedProperty] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedIncome, setSelectedIncome] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleSelectChange = (setter, field) => (e) => {
        setter(e.target.value);
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [field]: '',
        }));
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.name) errors.name = 'Name is required';
        if (!formData.phone) errors.phone = 'Phone is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!selectedProperty) errors.property = 'Property Type is required';
        if (!selectedLocation) errors.location = 'Property Location is required';
        if (!selectedIncome) errors.income = 'Monthly Income is required';
        if (!formData.message) errors.message = 'Message is required';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submitLead = async () => {
        const payload = {
            product: 'Mortgage',
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            details: `Property: ${selectedProperty}, Location: ${selectedLocation}, Monthly Income: ${selectedIncome}, Message: ${formData.message}`,
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
                console.log('Lead created successfully');
                // Clear the form after successful submission
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                });
                setSelectedProperty('');
                setSelectedLocation('');
                setSelectedIncome('');
                setSuccessModal(true)
            } else {
                console.error('Failed to create lead', await response.json());
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            submitLead();
        }
    };

    return (
        <div className='businessfinanceform' ref={targetSectionRef}>
            <h5 className='request_text'>Request</h5>
            <h1 className='callback_form'>callback</h1>
            <Container>
                <Form onSubmit={handleSubmit} data-aos="fade-up">
                    <Row>
                        <Col xs={12} md={4}>
                            <Form.Group className="mb-2 mt-3" controlId="formName">
                                <Form.Label style={{ color: '#E3C086' }}>Name</Form.Label>
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
                                <Form.Label style={{ color: '#E3C086' }}>Phone</Form.Label>
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
                                <Form.Label style={{ color: '#E3C086' }}>Email</Form.Label>
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
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Group className="mb-2 mt-3" controlId="formProperty">
                                <Form.Label style={{ color: '#E3C086' }}>Type of Property</Form.Label>
                                <Form.Select
                                    aria-label="Property Type"
                                    className='input_field'
                                    value={selectedProperty}
                                    onChange={handleSelectChange(setSelectedProperty, 'property')}
                                    isInvalid={!!formErrors.property}
                                    style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                >
                                    <option className="custom-option" value="">Select Property Type</option>
                                    <option className="custom-option" value="Villa">Villa</option>
                                    <option className="custom-option" value="Apartment">Apartment</option>
                                    <option className="custom-option" value="Commercial">Commercial</option>
                                    <option className="custom-option" value="Land">Land</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.property}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Group className="mb-2 mt-3" controlId="formLocation">
                                <Form.Label style={{ color: '#E3C086' }}>Property Location</Form.Label>
                                <Form.Select
                                    aria-label="Property Location"
                                    className='input_field'
                                    value={selectedLocation}
                                    onChange={handleSelectChange(setSelectedLocation, 'location')}
                                    isInvalid={!!formErrors.location}
                                    style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                >
                                    <option className="custom-option" value="">Select Property Location</option>
                                    <option className="custom-option" value="Abu Dhabi">Abu Dhabi</option>
                                    <option className="custom-option" value="Dubai">Dubai</option>
                                    <option className="custom-option" value="Sharjah">Sharjah</option>
                                    <option className="custom-option" value="Ajman">Ajman</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.location}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Group className="mb-2 mt-3" controlId="formIncome">
                                <Form.Label style={{ color: '#E3C086' }}>Monthly Income</Form.Label>
                                <Form.Select
                                    aria-label="Monthly Income"
                                    className='input_field'
                                    value={selectedIncome}
                                    onChange={handleSelectChange(setSelectedIncome, 'income')}
                                    isInvalid={!!formErrors.income}
                                    style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                >
                                    <option className="custom-option" value="">Select Monthly Income</option>
                                    <option className="custom-option" value="Less than 5000">Less than 5000 AED</option>
                                    <option className="custom-option" value="5000-10000">5000-10000 AED</option>
                                    <option className="custom-option" value="10000-20000">10000-20000 AED</option>
                                    <option className="custom-option" value="More than 20000">More than 20000 AED</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.income}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <Form.Group className="mb-2 mt-3" controlId="formMessage">
                                <Form.Label style={{ color: '#E3C086' }}>Message</Form.Label>
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

export default MortgageForm;
