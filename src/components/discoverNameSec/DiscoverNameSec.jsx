import React, { useState } from 'react'
import './discoverNameSec.css'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { baseURL, currCountryCode } from '../../functions/BaseURL';
import { useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import { RecommendUsSchema } from '../../validation/RecommendUsSchema';
export default function DiscoverNameSec({ discoverHome, token }) {
    const { discoverName } = useParams();
    const discoversFetched = discoverHome?.all_discovers?.find((el) => el.name === discoverName)
    const sub_categ_ID = discoversFetched?.sub_category_id
    const discoverSubCateg = useQuery({
        queryKey: ['discover-sub'],
        queryFn: async () => {
            const fetchData = await fetch(`${baseURL}/${currCountryCode}/discover-sub-categories/${sub_categ_ID}`);
            const response = await fetchData.json();
            return response.data;
        },
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showRecommend, setShowRecommend] = useState(false);
    const handleCloseRecommend = () => setShowRecommend(false);
    const handleShowRecommend = () => setShowRecommend(true);

    const discoverSubCategName = discoverSubCateg?.data?.name
    const discoversSubCategData = discoverSubCateg?.data?.discovers;

    const navigate = useNavigate();
    return (
        <div className='discoverNameSec__handler'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="discover__item__handler">
                            <div className="discover__img">
                                <img src={discoversFetched?.image} alt={discoversFetched?.name} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="discover__title__name">
                            <h2 className='title'>
                                <span>{discoversFetched?.name}</span> delivers to you
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est assumenda voluptatem veritatis earum, aut maiores numquam in repellendus sit!
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="discover__best__sell">
                            <h2 className='title'>
                                best seller
                            </h2>
                            <div className="row ">
                                {
                                    discoversFetched?.images?.map((el) => (
                                        <div className="col-lg-4 col-md-6 d-flex ">
                                            <div key={el?.id} className="best__sell__item">
                                                <img src={el?.img} alt={el?.id} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="voteAndRecommendHandler">
                            <div className="row align-items-center">
                                <div className="col-lg-2">
                                    <div className='vote__number'>
                                        33
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex justify-content-lg-start">
                                    <div className="review__handler">
                                        <h2 className='title'>
                                            <span>voted for {discoversFetched?.name}</span> Reviews
                                        </h2>
                                        <div class="vote__text__reminder">
                                            <i class="bi bi-patch-exclamation"></i>
                                            <span>
                                                give your vote for two more to get your coins for more future discount
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 marginTopInResponsive">
                                    {
                                        token ?
                                            <>
                                                <div className='give__review'
                                                    onClick={handleShow}>
                                                    <span className='vote__icon'>
                                                        <i class="bi bi-hand-thumbs-up"></i>
                                                    </span>
                                                    give your vote
                                                
                                                </div>
                                                <>
                                                    <Modal show={show} onHide={handleClose} animation={true} centered>
                                                        <>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>
                                                                    <h2>
                                                                        give your vote
                                                                    </h2>
                                                                </Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <h4>check your best {discoverSubCategName} places</h4>
                                                                <form >
                                                                    <div class="form-check form__check__handler" id="formCheck">
                                                                        {
                                                                            discoversSubCategData?.map((el) => (
                                                                                <div class="input__form__handler">
                                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                                                    <label class="form-check-label" htmlFor="flexCheckChecked">
                                                                                        {el?.discover_name}
                                                                                    </label>
                                                                                </div>
                                                                            ))
                                                                        }

                                                                    </div>
                                                                    <div class="form__vote__submit d-flex justify-content-center">
                                                                        <button onClick={handleClose} class='btn__vote__submit'>
                                                                            submit your vote <i class="bi bi-hand-thumbs-up"></i>
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </Modal.Body>
                                                        </>

                                                    </Modal>
                                                </>
                                                <div className='give__review recomend'
                                                    onClick={handleShowRecommend}>
                                                    <span className='vote__icon recomend'>
                                                        <i class="bi bi-bookmark-plus"></i>
                                                    </span>
                                                    recommend {discoversFetched?.sub_category_name} places
                                                    
                                                </div>
                                                <>
                                                <Modal show={showRecommend} onHide={handleCloseRecommend} animation={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>
                Recommend a {discoverSubCategName} place
            </h2>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div class="form__vote__submit">
                    <button class='btn__vote__submit'>
                        Submit your recommend
                        <i class="bi bi-hand-thumbs-up"></i>
                    </button>
                </div>
          </Form>
        </Modal.Body>
                                                </Modal>
                                                </>
                                        
                                            </> :
                                            <>
                                                <div className="remider__for__signUp__handler"
                                                    onClick={() => navigate(`/${currCountryCode}/register`)}>
                                                        <div className="remider__for__signUp__icon">
                                                        <i className="bi bi-exclamation-triangle-fill fs-1"></i>
                                                        </div>
                                                    <p className='d-flex align-items-center justify-content-center'>
                                                            sign up for voting to get more coins for future discount
                                                    </p>
                                                </div>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
