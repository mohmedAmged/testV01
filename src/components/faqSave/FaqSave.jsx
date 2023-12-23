import React from 'react'
import './faqSave.css'
import { Accordion } from 'react-bootstrap'
import offerImg from '../../assets/saveHomeImg/offerImg.jpg'
import AccordionFaqSave from '../accordionFaqSave/AccordionFaqSave'
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
                        <AccordionFaqSave />
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
