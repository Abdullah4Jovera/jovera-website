'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '../CommonComponents/navbar/Navbar'
import './about.css'
import Image from 'next/image'
import joveralogo from '../../Assets/joveralogo.png'
import chooseuslogo from '../../Assets/chooseuslogo.png'
import ContactDetail from '../CommonComponents/contactDetail/ContactDetail'
import Footer from '../CommonComponents/footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import JoveraTime from '../Home/JoveraTime'
const Page = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className='about_background_class' >
                <Image src={joveralogo} alt='joveralogo' className='jovera_logo_common' />
                <h1 className='welcome_tag_h1' data-aos="fade-up">Welcome to Jovera Group</h1>
            </div>

            <div className='about_text_container' >

                <div className='about_container_main'>
                    {/* who we are */}

                    <div>
                        <h1 className='whoweare' data-aos="fade-up" >who we are</h1>
                        <p style={{ textAlign: 'justify' }} data-aos="fade-up" >
                            Jovera Group, established in 2013 in the United Arab Emirates (UAE), has swiftly emerged as a prominent player in the real estate and financial
                            services sectors. With a focus on excellence and innovation, the company has grown to become a trusted name in providing tailored solutions to
                            its clients.
                        </p>

                        <p style={{ textAlign: 'justify' }} data-aos="fade-up" >
                            Since its inception, Jovera Group has dedicated itself to offering a comprehensive range of services that cater to the dynamic needs of the
                            UAE market. The company’s expertise spans both real estate and financial domains, allowing it to provide integrated solutions that encompass
                            real estate investments, property management, financial advisory services, and more.
                        </p>

                        <p style={{ textAlign: 'justify' }} data-aos="fade-up" >
                            Over the years, Jovera Group has forged strong relationships with clients and partners, guided by its commitment to integrity and client satisfaction. The company’s team of seasoned professionals brings a wealth of experience and knowledge, enabling them to navigate the complexities of both sectors and offer informed advice to clients.
                            With a customer-centric approach, Jovera Group remains dedicated to helping individuals and businesses achieve their real estate and financial goals. Its journey since 2013 is marked by growth, innovation, and a relentless pursuit of excellence, making it a prominent player in the UAE’s real estate and financial landscape.
                        </p>
                    </div>
                    {/* vision & Mission */}
                    <div className='vision_mission_container' >
                        <h1 className='whoweare' data-aos="fade-up"  >vision & Mission</h1>
                        <p style={{ textAlign: 'justify' }} data-aos="fade-up" >
                            Our Vision is to be the number One Trusted and leading Real Estate & Banking Services Company. We think in the best interest of our clients.
                            First, by providing solutions that are best suited to them. We ensure that we build long-term relationships with our customers through trust
                            and professionalism, and also to be a leading provider of financial services, known for our exceptional customer service and commitment to our
                            clients. We strive to build lasting relationships with our clients and provide them with the tools and resources they need to achieve their
                            financial goals.
                        </p>

                        <p style={{ textAlign: 'justify' }} data-aos="fade-up" >
                            Our Mission is to provide exceptional financial services to our clients and help them achieve their financial goals.
                            We believe that everyone deserves access to affordable and reliable financial services, and we’re committed to making that a reality for
                            our clients. We offer a range of services to meet the unique financial needs of our clients, including real estate, mortgage, business banking,
                            and personal loans.
                        </p>
                    </div>
                    {/* Why Choose Us */}
                    <div>
                        <h1 className='whoweare' data-aos="fade-up"  >Why Choose Us</h1>
                        <div className='chooseuscontainer' >
                            <Image src={chooseuslogo} alt='chooseuslogo' className='chooseuslogo_side' data-aos="fade-up" />
                            <div>
                                <h4 className='chooseus_text_points mb-0' data-aos="fade-up" >Experienced Professionals</h4>
                                <p data-aos="fade-up" >Our team of experienced professionals has the knowledge and expertise to help you achieve your financial goals.</p>
                            </div>
                        </div>

                        <div className='chooseuscontainer' data-aos="fade-up" >
                            <Image src={chooseuslogo} alt='chooseuslogo' className='chooseuslogo_side' data-aos="fade-up" />
                            <div>
                                <h4 className='chooseus_text_points mb-0' data-aos="fade-up"  >Range of Services</h4>
                                <p data-aos="fade-up" >We offer a range of services to meet the unique financial needs of our clients, including real estate, mortgage, business banking, and personal loans.</p>
                            </div>
                        </div>

                        <div className='chooseuscontainer' >
                            <Image src={chooseuslogo} alt='chooseuslogo' className='chooseuslogo_side' data-aos="fade-up" />
                            <div>
                                <h4 className='chooseus_text_points mb-0' data-aos="fade-up" >Exceptional Customer Service</h4>
                                <p data-aos="fade-up" >
                                    JOVERA Group is committed to providing exceptional customer service and building lasting relationships with our clients. We understand that every client has unique financial needs, and we’re dedicated to providing personalized service to meet those needs.
                                </p>
                            </div>
                        </div>

                        <div className='chooseuscontainer' >
                            <Image src={chooseuslogo} alt='chooseuslogo' className='chooseuslogo_side' data-aos="fade-up" />
                            <div>
                                <h4 className='chooseus_text_points mb-0' data-aos="fade-up" >Commitment to Our Clients</h4>
                                <p data-aos="fade-up" >
                                    We’re committed to helping our clients achieve their financial goals and building lasting relationships with them.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <ContactDetail />
            <Footer />
        </>
    )
}

export default Page
