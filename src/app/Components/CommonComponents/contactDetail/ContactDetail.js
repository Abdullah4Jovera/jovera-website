'use client'
import React, { useState, useEffect } from 'react'
import './ContactDetail.css'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Page = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='contactDetail_container' >
            <h1 className='detail_contact_h1_tag' data-aos="fade-up" >Need To Discuss Anything?</h1>
            <h5 className='getupdates' data-aos="fade-up" >Get updates on our all interest rate</h5>

            <div className='contact_us_container_btn'>

                <Link href="/Components/contact">
                    <button className="button_contact_details" data-aos="fade-up">Contact Us</button>
                </Link>
            </div>
        </div>
    )
}

export default Page
