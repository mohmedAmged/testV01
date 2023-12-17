import React from 'react'
import './faqSave.css'
import { Accordion } from 'react-bootstrap'
import offerImg from '../../assets/saveHomeImg/offerImg.jpg'
export default function FaqSave() {
    return (
        <div className='faqSave__handler'>
            <div className="container">
                <div className="saveDifferentOffer__heading">
                    <div className="row ">
                        <div className="col-lg-8 ">
                            <h3>
                                Frequently Asked Question.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0" className='faq__box'>
                                <Accordion.Header className='faq__question'>
                                    How can I maximize my savings using coupon websites?
                                </Accordion.Header>
                                <Accordion.Body className='faq__answer'>
                                    A coupon website is an online platform that aggregates and displays coupons, discounts, and deals from various retailers and brands. Users visit these websites to find and use digital or printable coupons to save money on their online or in-store purchases.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='faq__box'>
                                <Accordion.Header className='faq__question'>
                                    Can I use coupon codes from these websites ?
                                </Accordion.Header>
                                <Accordion.Body className='faq__answer'>
                                    A coupon website is an online platform that aggregates and displays coupons, discounts, and deals from various retailers and brands. Users visit these websites to find and use digital or printable coupons to save money on their online or in-store purchases.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='faq__box'>
                                <Accordion.Header className='faq__question'>
                                    Do I need to sign up or pay to use coupon websites?
                                </Accordion.Header>
                                <Accordion.Body className='faq__answer'>
                                    A coupon website is an online platform that aggregates and displays coupons, discounts, and deals from various retailers and brands. Users visit these websites to find and use digital or printable coupons to save money on their online or in-store purchases.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='faq__box'>
                                <Accordion.Header className='faq__question'>
                                    How do coupon websites work?
                                </Accordion.Header>
                                <Accordion.Body className='faq__answer'>
                                    A coupon website is an online platform that aggregates and displays coupons, discounts, and deals from various retailers and brands. Users visit these websites to find and use digital or printable coupons to save money on their online or in-store purchases.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='faq__box'>
                                <Accordion.Header className='faq__question'>
                                    What is a coupon website?
                                </Accordion.Header>
                                <Accordion.Body className='faq__answer'>
                                    A coupon website is an online platform that aggregates and displays coupons, discounts, and deals from various retailers and brands. Users visit these websites to find and use digital or printable coupons to save money on their online or in-store purchases.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 ">
                        <div className="faqSave__image__handler">
                            <div className="faqSave__image">
                                <img src={offerImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
