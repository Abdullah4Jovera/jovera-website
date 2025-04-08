'use client'
import React, { useState, useEffect } from 'react';
import './realestate.css';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const RealEstateForm = ({ targetSectionRef }) => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      service: ''
    }));
  };

  const handlePurposeChange = (e) => {
    setSelectedPurpose(e.target.value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      purpose: ''
    }));
  };

  const handlePropertyTypeChange = (e) => {
    setSelectedPropertyType(e.target.value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      propertyType: ''
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
    if (!selectedService) errors.service = "Language is required";
    if (!selectedPurpose) errors.purpose = "Property purpose is required";
    if ((selectedPurpose === 'buy' || selectedPurpose === 'sale') && !selectedPropertyType) {
      errors.propertyType = "Property type is required";
    }
    if (!formData.message) errors.message = "Message is required";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const payload = {
        product: 'real estate',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        details: `Language: ${selectedService}, Location: ${selectedService}, Property Purpose: ${selectedPurpose}, Property Type: ${selectedPropertyType}, Message: ${formData.message}`,
      };

      try {
        const response = await axios.post('http://192.168.2.137:8000/api/lead/create-lead', payload);
        console.log('Form submitted successfully!', response.data);
        // Clear the form after successful submission
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
        setSelectedService('');
        setSelectedPurpose('');
        setSelectedPropertyType('');
        alert('Form submitted successfully!');
      } catch (error) {
        console.error('Error submitting the form:', error);
        alert('There was an error submitting the form. Please try again later.');
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
            <Col xs={12} md={6}>
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
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
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
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.phone}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
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
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-2 mt-3" controlId="formLanguage">
                <Form.Label style={{ color: '#E3C086' }}>Language</Form.Label>
                <Form.Select
                  aria-label="Select Language"
                  className='input_field'
                  value={selectedService}
                  onChange={handleServiceChange}
                  isInvalid={!!formErrors.service}
                >
                  <option style={{color:'#000'}} value="">Select Language</option>
                  <option style={{color:'#000'}} value="Arabic">Arabic</option>
                  <option style={{color:'#000'}} value="English">English</option>
                  <option style={{color:'#000'}} value="French">French</option>
                  <option style={{color:'#000'}} value="Others">Others</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formErrors.service}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <Form.Label className="mb-2 mt-2" style={{ color: '#E3C086' }}>Property Purpose</Form.Label>
              <Form.Select
                aria-label="Property Purpose"
                className='input_field'
                value={selectedPurpose}
                onChange={handlePurposeChange}
                isInvalid={!!formErrors.purpose}
              >
                <option style={{color:'#000'}} value="">Select Property Purpose</option>
                <option style={{color:'#000'}}  value="buy">Buy</option>
                <option style={{color:'#000'}} value="sale">Sale</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formErrors.purpose}
              </Form.Control.Feedback>
            </Col>

            {(selectedPurpose === 'buy' || selectedPurpose === 'sale') && (
              <Col xs={12} md={12} className="mt-3">
                <Form.Label className="mb-2" style={{ color: '#E3C086' }}>Property Type</Form.Label>
                <Form.Select
                  aria-label="Property type"
                  className='input_field'
                  value={selectedPropertyType}
                  onChange={handlePropertyTypeChange}
                  isInvalid={!!formErrors.propertyType}
                >
                  <option style={{ color: 'black' }} value="">Select Property Type</option>
                  <option style={{ color: 'black' }} value="apartment">Apartment</option>
                  <option style={{ color: 'black' }} value="villa">Villa</option>
                  <option style={{ color: 'black' }} value="other">Other</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formErrors.propertyType}
                </Form.Control.Feedback>
              </Col>
            )}
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
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <div className='submit_handler_container' data-aos="fade-up">
            <button type="submit" className="submit_btn">Submit</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default RealEstateForm;
