"use client"
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './JoveraCustomers.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JoveraCustomers = () => {
  const [modalShow, setModalShow] = useState(false);
  const [clientReview, setClientReview] = useState('')
  const [clientName, setClientName] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Hide previous and next buttons
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchReviews = async () => {
    try {
      // Make the GET request to fetch reviews
      const response = await axios.get('http://192.168.2.137:8000/api/review');
      setReviews(response.data); // Update state with fetched reviews
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setError('Failed to fetch reviews. Please try again later.');
    } finally {
      setIsLoading(false); // Stop loading after the request completes
    }
  };

  useEffect(() => {
    fetchReviews(); // Call the fetchReviews function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handlePostReview = async () => {
    if (!clientName || !clientReview) {
      alert('Please fill in both fields before posting your review.');
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        name: clientName,
        review: clientReview,
      };

      const response = await axios.post('http://192.168.2.137:8000/api/review', payload);
      console.log('Review submitted successfully:', response.data);

      // Reset form fields
      setClientName('');
      setClientReview('');

      // Close the modal
      setModalShow(false);
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='joveracustomers_container' >

      <div className='review_customer_btn' >
        <h1 className='happy_customer' data-aos="fade-up">What do our<span style={{ color: '#E3C086' }} > Users</span> says?</h1>
        <button onClick={() => setModalShow(true)} className='write_review_btn'>
          Write a Review
        </button>

      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="custom-modal"
      >
        <Modal.Body className="custom-modal-body">
          <div className="modal_description_text">
            <Form>
              <Form.Group controlId="nameInput">
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="clientName"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="review_input_field"
                  style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                />
              </Form.Group>

              <Form.Group controlId="reviewTextarea">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write Your Review Here..."
                  name="clientReview"
                  value={clientReview}
                  onChange={(e) => setClientReview(e.target.value)}
                  className="review_input_field mt-3"
                  style={{ border: '1px solid rgba(235, 199, 88, 0.5)' }}
                />
              </Form.Group>
            </Form>
            <div className="modal_btn">
              <Button
                className="modal_button_review_cancel"
                onClick={() => setModalShow(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                className="modal_button_review"
                onClick={handlePostReview}
                disabled={isLoading}
              >
                {isLoading ? 'Posting...' : 'Post'}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <h5 className='customer_des mt-2' data-aos="fade-up" >Happy Customers, Happy Hearts! Join the Delighted Ranks of our Satisfied Customers and Experience Excellence like never before.</h5>

      <Container>
        <Slider {...settings} className="custom-slider">
          {reviews.map((review, index) => (
            <div className="slider-card-wrapper" key={index}>
              <Card className="card_details_customer" data-aos="fade-up">
                <Card.Body>
                  {/* Client Name */}
                  <Card.Title style={{ color: '#E3C086' }} data-aos="fade-up">
                    {review.name}
                  </Card.Title>

                  {/* Review Content */}
                  <h5 className="customer_description" data-aos="fade-up">
                    {review.review || 'No review content available.'}
                  </h5>

                  <p
                    data-aos="fade-up"
                    style={{ display: 'flex', justifyContent: 'flex-end', color: '#EBC758' }}
                  >
                    {review.createdAt
                      ? new Date(review.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric', // Include the day
                      })
                      : 'No Date Available'}
                  </p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  )
}

export default JoveraCustomers  