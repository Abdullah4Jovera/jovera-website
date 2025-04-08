"use client";
import React, { useEffect, useState } from "react";
import "./Contactus.css";
import Navbar from "../CommonComponents/navbar/Navbar";
import Footer from "../CommonComponents/footer/Footer";
import { Col, Container, Row, Form, Alert, Modal } from "react-bootstrap";
import Image from "next/image";
import getintouch from "../../Assets/getintouch.png";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import tick from '../../Assets/tick.png'
const Page = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        loanType: "",
        companyName: "",
        businessLoanOption: "",
        companyTurnover: "",
        fleetFinanceTurnover: "",
        monthlySalary: "",
        loanAmount: "",
        doYouHaveAnyLoan: "", // New state for the question
        existingLoanAmount: "", // New state for the existing loan amount
        mortgageLoanAmount: '',
        projectType: '',
        companyTurnoverLgsLcs: '',
        totalEMIPaid: '',
        fleetFinanceTurnover: '',
        hasPOS: '',
        companyTurnover: '',
        mortgageLoanAmount: '',
        existingLoanAmount: '',
        doYouHaveAnyLoan: '',
        loanAmount: '',
        monthlySalary: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [showBusinessLoanFields, setShowBusinessLoanFields] = useState(false);
    const [showFleetFinanceFields, setShowFleetFinanceFields] = useState(false);
    const [showLgsLcsFields, setShowLgsLcsFields] = useState(false);
    const [showAccountOpeningFields, setShowAccountOpeningFields] = useState(false);
    const [showEMIPaidField, setShowEMIPaidField] = useState(false);
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

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" }); // Clear error on input change
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = "Full Name is Required.";
        if (!formData.email) newErrors.email = "Email is Required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Enter a valid email address.";
        if (!formData.phone) newErrors.phone = "Phone Number is Required.";
        if (!formData.message) newErrors.message = "Message is Required.";
        if (!formData.loanType) newErrors.loanType = "Service is Required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const {
            message,
            companyName,
            businessLoanOption,
            companyTurnover,
            fleetFinanceTurnover,
            monthlySalary,
            loanAmount,
            doYouHaveAnyLoan,
            existingLoanAmount,
            mortgageLoanAmount,
            projectType,
            companyTurnoverLgsLcs,
            totalEMIPaid,
            hasPOS,
        } = formData;

        // Build the details string dynamically
        const details = `
    Company Name: ${companyName || 'N/A'},
    Business Loan Option: ${businessLoanOption || 'N/A'},
    Company Turnover: ${companyTurnover || 'N/A'},
    Fleet Finance Turnover: ${fleetFinanceTurnover || 'N/A'},
    Monthly Salary: ${monthlySalary || 'N/A'},
    Loan Amount: ${loanAmount || 'N/A'},
    Do You Have Any Loan: ${doYouHaveAnyLoan || 'N/A'},
    Existing Loan Amount: ${existingLoanAmount || 'N/A'},
    Mortgage Loan Amount: ${mortgageLoanAmount || 'N/A'},
    Project Type: ${projectType || 'N/A'},
    Company Turnover (Lgs Lcs): ${companyTurnoverLgsLcs || 'N/A'},
    Total EMI Paid: ${totalEMIPaid || 'N/A'},
    Has POS: ${hasPOS || 'N/A'},
    Message: ${message || 'N/A'}
    businessLoan : ${showBusinessLoanFields || 'N/A'}
    businessFinance : ${showFleetFinanceFields || 'N/A'}
    businessLgs/Lcs : ${showLgsLcsFields || 'N/A'}
`.trim();

        const payload = {
            product: formData.loanType, // Map loanType to product
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            details,
        };

        try {
            const response = await axios.post("http://192.168.2.137:8000/api/lead/create-lead", payload);
            if (response.status === 200) {
                setSuccessModal(true)
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    loanType: "",
                    companyName: "",
                    businessLoanOption: "",
                    companyTurnover: "",
                    fleetFinanceTurnover: "",
                    monthlySalary: "",
                    loanAmount: "",
                    doYouHaveAnyLoan: "", // New state for the question
                    existingLoanAmount: "", // New state for the existing loan amount
                    mortgageLoanAmount: '',
                    projectType: '',
                    companyTurnoverLgsLcs: '',
                    totalEMIPaid: '',
                    fleetFinanceTurnover: '',
                    hasPOS: '',
                    companyTurnover: '',
                    mortgageLoanAmount: '',
                    existingLoanAmount: '',
                    doYouHaveAnyLoan: '',
                    loanAmount: '',
                    monthlySalary: ''
                });
               
                setErrors({}); // Clear errors after successful submission
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="contact_us_comp">
                <h4 className="get_in_touch" data-aos="fade-down">
                    Get in
                </h4>
                <h1 className="contact_h1_text" data-aos="fade-right">
                    Touch
                </h1>

                <div className="mt-5">
                    <Link href={"/"} className="contact_tags" data-aos="fade-left">
                        Home
                    </Link>
                    /
                    <Link
                        href="/Components/contact"
                        className="contact_tags"
                        data-aos="fade-right"
                    >
                        Contact
                    </Link>
                </div>
            </div>

            <div className="contact_foam_details">
                <Container>
                    <div className="nested_foam_container">
                        <Row>
                            <Col xs={12} md={12} lg={6}>
                                <div className="foam_container">
                                    <h1 className="connect_text" data-aos="fade-right">
                                        Let’s connect
                                    </h1>
                                    {/* {successMessage && (
                                        <Alert variant="success" className="mt-3">
                                            {successMessage}
                                        </Alert>
                                    )} */}
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col xs={12} data-aos="fade-right">
                                                <Form.Group className="mb-3" controlId="formBasicName">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Full Name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="input_field w-100"
                                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                    />
                                                    {errors.name && (
                                                        <div className="error-text">{errors.name}</div>
                                                    )}
                                                </Form.Group>
                                            </Col>

                                            <Col xs={12} data-aos="fade-up">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Enter email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="input_field"
                                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                    />
                                                    {errors.email && (
                                                        <div className="error-text">{errors.email}</div>
                                                    )}
                                                </Form.Group>
                                            </Col>

                                            <Col xs={12} data-aos="fade-up">
                                                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Phone Number"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="input_field"
                                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                    />
                                                    {errors.phone && (
                                                        <div className="error-text">{errors.phone}</div>
                                                    )}
                                                </Form.Group>
                                            </Col>

                                            {/* New Select Field for Loan Type */}
                                            <Col xs={12} data-aos="fade-up">
                                                <Form.Group className="mb-3" controlId="formBasicLoanType">
                                                    <Form.Select
                                                        name="loanType"
                                                        value={formData.loanType}
                                                        onChange={handleInputChange}
                                                        className="input_field"
                                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                    >
                                                        <option className="custom-option" value="">
                                                            Service
                                                        </option>
                                                        <option className="custom-option" value="Business Banking">
                                                            Business Banking
                                                        </option>
                                                        <option className="custom-option" value="Personal Loan">
                                                            Personal Loan
                                                        </option>
                                                        <option className="custom-option" value="Mortgage Loan">
                                                            Mortgage Loan
                                                        </option>
                                                        {/* <option className="custom-option" value="Real Estate Loan">
                                                            Real Estate
                                                        </option> */}
                                                    </Form.Select>
                                                    {errors.loanType && <div className="error-text">{errors.loanType}</div>}
                                                </Form.Group>

                                                {/* Conditional fields for "Business Loan" */}
                                                {formData.loanType === "Business Banking" && (
                                                    <>
                                                        {/* Company Name */}
                                                        <Form.Group className="mb-3" controlId="formCompanyName">
                                                            <Form.Control
                                                                type="text"
                                                                name="companyName"
                                                                value={formData.companyName || ""}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter company name"
                                                                className="input_field"
                                                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                            />
                                                            {errors.companyName && <div className="error-text">{errors.companyName}</div>}
                                                        </Form.Group>

                                                        {/* Business Loan Selection */}
                                                        <Form.Group className="mb-3" controlId="formLoanOptions">
                                                            <Form.Select
                                                                onChange={(e) => {
                                                                    handleInputChange(e);
                                                                    const selectedOption = e.target.value;
                                                                    setShowBusinessLoanFields(selectedOption === "Business Loan");
                                                                    setShowFleetFinanceFields(selectedOption === "Fleet Finance (Auto Loans)");
                                                                    setShowLgsLcsFields(selectedOption === "LGs/LCs");
                                                                    setShowAccountOpeningFields('Account Opening')
                                                                }}
                                                                className="input_field"
                                                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                            >
                                                                <option className="custom-option" value="">
                                                                    Select
                                                                </option>
                                                                <option className="custom-option" value="Business Loan">
                                                                    Business Loan
                                                                </option>
                                                                <option className="custom-option" value="Fleet Finance (Auto Loans)">
                                                                    Fleet Finance (Auto Loans)
                                                                </option>
                                                                <option className="custom-option" value="LGs/LCs">
                                                                    LGs/LCs
                                                                </option>
                                                                <option className="custom-option" value="Account Opening">
                                                                    Account Opening
                                                                </option>
                                                            </Form.Select>
                                                            {errors.businessLoanOption && (
                                                                <div className="error-text">{errors.businessLoanOption}</div>
                                                            )}
                                                        </Form.Group>

                                                        {/* Conditional Field for Company Turnover */}
                                                        {showBusinessLoanFields && (
                                                            <>
                                                                <Form.Group className="mb-3" controlId="formCompanyTurnover">
                                                                    <Form.Control
                                                                        type="text"
                                                                        name="companyTurnover"
                                                                        value={formData.companyTurnover || ""}
                                                                        onChange={handleInputChange}
                                                                        placeholder="Enter Company Turnover in Last Year"
                                                                        className="input_field"
                                                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                                    />
                                                                    {errors.companyTurnover && (
                                                                        <div className="error-text">{errors.companyTurnover}</div>
                                                                    )}
                                                                </Form.Group>

                                                                {/* POS Selection */}
                                                                <Form.Group className="mb-3" controlId="formHasPOS">
                                                                    <Form.Select
                                                                        name="hasPOS"
                                                                        value={formData.hasPOS || ""}
                                                                        onChange={handleInputChange}
                                                                        className="input_field"
                                                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                                    >
                                                                        <option className="custom-option" value="">
                                                                            Company Have POS
                                                                        </option>
                                                                        <option className="custom-option" value="Yes">
                                                                            Yes
                                                                        </option>
                                                                        <option className="custom-option" value="No">
                                                                            No
                                                                        </option>
                                                                    </Form.Select>
                                                                    {errors.hasPOS && <div className="error-text">{errors.hasPOS}</div>}
                                                                </Form.Group>

                                                                {/* Conditional Field for POS Turnover */}
                                                                {formData.hasPOS === "Yes" && (
                                                                    <Form.Group className="mb-3" controlId="formPOSTurnover">
                                                                        <Form.Control
                                                                            type="text"
                                                                            name="posTurnover"
                                                                            value={formData.posTurnover || ""}
                                                                            onChange={handleInputChange}
                                                                            placeholder="POS Turnover Monthly (Approx)"
                                                                            className="input_field"
                                                                            style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                                        />
                                                                        {errors.posTurnover && (
                                                                            <div className="error-text">{errors.posTurnover}</div>
                                                                        )}
                                                                    </Form.Group>
                                                                )}
                                                            </>
                                                        )}

                                                        {/* Fleet */}
                                                        {showFleetFinanceFields && (
                                                            <>
                                                                {/* Fleet Finance Turnover Field */}
                                                                <Form.Group className="mb-3" controlId="formFleetFinanceTurnover">
                                                                    <Form.Control
                                                                        type="text"
                                                                        name="fleetFinanceTurnover"
                                                                        value={formData.fleetFinanceTurnover || ""}
                                                                        onChange={handleInputChange}
                                                                        placeholder="Company Turnover in Last Year"
                                                                        className="input_field"
                                                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                                    />
                                                                    {errors.fleetFinanceTurnover && (
                                                                        <div className="error-text">{errors.fleetFinanceTurnover}</div>
                                                                    )}
                                                                </Form.Group>

                                                                {/* Select Option for Auto Finance */}
                                                                <Form.Group className="mb-3" controlId="formHasAutoFinance">
                                                                    <Form.Select
                                                                        name="hasAutoFinance"
                                                                        value={formData.hasAutoFinance || ""}
                                                                        onChange={(e) => {
                                                                            handleInputChange(e);
                                                                            const selectedOption = e.target.value;
                                                                            setShowEMIPaidField(selectedOption === "Yes");
                                                                        }}
                                                                        className="input_field"
                                                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                                    >
                                                                        <option className="custom-option" value="">
                                                                            Company Have Auto Finance
                                                                        </option>
                                                                        <option className="custom-option" value="Yes">
                                                                            Yes
                                                                        </option>
                                                                        <option className="custom-option" value="No">
                                                                            No
                                                                        </option>
                                                                    </Form.Select>
                                                                    {errors.hasAutoFinance && (
                                                                        <div className="error-text">{errors.hasAutoFinance}</div>
                                                                    )}
                                                                </Form.Group>

                                                                {/* Conditional Field for Total EMI Paid Monthly */}
                                                                {formData.hasAutoFinance === "Yes" && (
                                                                    <Form.Group className="mb-3" controlId="formTotalEMIPaid">
                                                                        <Form.Control
                                                                            type="text"
                                                                            name="totalEMIPaid"
                                                                            value={formData.totalEMIPaid || ""}
                                                                            onChange={handleInputChange}
                                                                            placeholder="Total EMI Paid Monthly"
                                                                            className="input_field"
                                                                            style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                                        />
                                                                        {errors.totalEMIPaid && (
                                                                            <div className="error-text">{errors.totalEMIPaid}</div>
                                                                        )}
                                                                    </Form.Group>
                                                                )}
                                                            </>
                                                        )}

                                                        {/* Lgs/Lcs */}
                                                        {
                                                            showLgsLcsFields && (
                                                                <>
                                                                    {/* Company Turnover Last Year Input Field */}
                                                                    <Form.Group className="mb-3" controlId="formCompanyTurnover">
                                                                        <Form.Control
                                                                            type="text"
                                                                            name="companyTurnoverLgsLcs"
                                                                            value={formData.companyTurnoverLgsLcs || ""}
                                                                            onChange={handleInputChange}
                                                                            placeholder="Company Turnover in Last Year"
                                                                            className="input_field"
                                                                            style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                                        />
                                                                        {errors.companyTurnoverLgsLcs && (
                                                                            <div className="error-text">{errors.companyTurnoverLgsLcs}</div>
                                                                        )}
                                                                    </Form.Group>

                                                                    {/* Select Option for Project Type */}
                                                                    <Form.Group className="mb-3" controlId="formProjectType">
                                                                        <Form.Select
                                                                            name="projectType"
                                                                            value={formData.projectType || ""}
                                                                            onChange={handleInputChange}
                                                                            className="input_field"
                                                                            style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                                        >
                                                                            <option className="custom-option" value="">
                                                                                LG Requested For
                                                                            </option>
                                                                            <option className="custom-option" value="Govt Project">
                                                                                Govt. Project
                                                                            </option>
                                                                            <option className="custom-option" value="Semi Govt Project">
                                                                                Semi Govt. Project
                                                                            </option>
                                                                            <option className="custom-option" value="  Private Project">
                                                                                Private Project
                                                                            </option>
                                                                            <option className="custom-option" value=" National Housing Loan (NHL)">
                                                                                National Housing Loan (NHL)
                                                                            </option>
                                                                        </Form.Select>
                                                                        {errors.projectType && (
                                                                            <div className="error-text">{errors.projectType}</div>
                                                                        )}
                                                                    </Form.Group>
                                                                </>
                                                            )
                                                        }
                                                    </>
                                                )}

                                                {formData.loanType === 'Personal Loan' && (
                                                    <div className="personal-loan-fields">
                                                        <Form.Group controlId="companyName">
                                                            <Form.Control
                                                                type="text"
                                                                name="companyName"
                                                                value={formData.companyName}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter your company name"
                                                                className="input_field"
                                                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                            />
                                                        </Form.Group>

                                                        <Form.Group controlId="monthlySalary">
                                                            <Form.Control
                                                                type="text"
                                                                name="monthlySalary"
                                                                value={formData.monthlySalary}
                                                                onChange={handleInputChange}
                                                                placeholder="Monthly Salary (AED)"
                                                                className="input_field mt-3"
                                                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                            />
                                                        </Form.Group>

                                                        <Form.Group controlId="loanAmount">
                                                            <Form.Control
                                                                type="text"
                                                                name="loanAmount"
                                                                value={formData.loanAmount}
                                                                onChange={handleInputChange}
                                                                placeholder="Loan Amount (AED)"
                                                                className="input_field mt-3"
                                                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                            />
                                                        </Form.Group>

                                                        <Form.Group controlId="doYouHaveAnyLoan">
                                                            <Form.Select
                                                                name="doYouHaveAnyLoan"
                                                                value={formData.doYouHaveAnyLoan}
                                                                onChange={handleInputChange}
                                                                className="input_field mt-3"
                                                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                            >
                                                                <option value="">Do you have any loan?</option>
                                                                <option value="Yes">Yes</option>
                                                                <option value="No">No</option>
                                                            </Form.Select>
                                                        </Form.Group>

                                                        {/* Conditional rendering for existing loan amount */}
                                                        {formData.doYouHaveAnyLoan === 'Yes' && (
                                                            <Form.Group controlId="existingLoanAmount">
                                                                <Form.Control
                                                                    type="text"
                                                                    name="existingLoanAmount"
                                                                    value={formData.existingLoanAmount}
                                                                    onChange={handleInputChange}
                                                                    placeholder="Enter existing loan amount"
                                                                    className="input_field mb-3"
                                                                    style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                                />
                                                            </Form.Group>
                                                        )}
                                                    </div>
                                                )}

                                                {formData.loanType === 'Mortgage Loan' && (
                                                    <div className="mortgage-loan-fields">
                                                        {/* Add Mortgage Loan input field */}
                                                        <Form.Group controlId="mortgageLoanAmount">
                                                            <Form.Control
                                                                type="text"
                                                                name="mortgageLoanAmount"
                                                                value={formData.mortgageLoanAmount}
                                                                onChange={handleInputChange}
                                                                placeholder="Enter mortgage loan amount"
                                                                className="input_field mb-3"
                                                                style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                )}
                                                {formData.loanType === 'Real Estate Loan' && (
                                                    <div className="real-estate-loan-fields">
                                                        <h3>Real Estate Loan Fields</h3>
                                                        {/* Add your real estate loan form fields here */}
                                                    </div>
                                                )}
                                            </Col>

                                            <Col xs={12} data-aos="fade-up">
                                                <Form.Group className="mb-0" controlId="formBasicMessage">
                                                    <Form.Control
                                                        as="textarea"
                                                        placeholder="Message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        className="input_field"
                                                        style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                                                    />
                                                    {errors.message && (
                                                        <div className="error-text">{errors.message}</div>
                                                    )}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <div data-aos="fade-up">
                                            <button
                                                type="submit"
                                                className="button_contact_send_message"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </Col>

                            <Col xs={12} md={12} lg={6}>
                                <div
                                    className="responsive-image-container"
                                    data-aos="fade-up"
                                >
                                    <Image
                                        src={getintouch}
                                        alt="getintouch"
                                        fluid
                                        className="getintouchimage"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>


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
                                <h5 style={{ color: '#EBC758', textAlign: 'center' }} className='mt-4' > Message sent successfully!</h5>
                            </div>
                        </Modal.Body>
                    </Modal>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
