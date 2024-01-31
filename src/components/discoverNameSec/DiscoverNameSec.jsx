import React from 'react'
import './discoverNameSec.css'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function DiscoverNameSec({ discoverHome }) {
    const { discoverName } = useParams();
    const discoversFetched = discoverHome?.all_discovers?.find((el) => el.name === discoverName)

    const showModal = () => {
        Swal.fire({
            html: `
                    <div class="voteModal__hadnler">
                        <h2>
                            give your vote
                        </h2>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                            <label class="form-check-label" for="flexCheckChecked">
                                ${discoversFetched?.name}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                ${discoversFetched?.name}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                ${discoversFetched?.name}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                ${discoversFetched?.name}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                ${discoversFetched?.name}
                            </label>
                        </div>
                        <div class="vote__text__reminder">
                            <i class="bi bi-arrow-right"></i> 
                            <span>
                            give your vote for two more to get your coins for more future discount
                            </span>
                        </div>
                        <div class="form__vote__submit">
                            <button class='btn__vote__submit'>
                                submit your vote <i class="bi bi-hand-thumbs-up"></i>
                            </button>
                        </div>
                    </div>
            `,
            showCloseButton: true,
            showConfirmButton: false,
        });
    }
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
                        <div className="review__handler">
                            <h2 className='title'>
                                <span>{discoversFetched?.name}</span> Reviews
                            </h2>
                            <div className="review__rate">
                                <span className='rate__box'>4.5</span>
                                <span className='star__box'>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-half"></i>
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className='give__review' onClick={() => showModal()}>
                        <span className='vote__icon'>
                            <i class="bi bi-hand-thumbs-up"></i>
                        </span>
                        <span className='vote__text'>
                            give your vote
                        </span>
                    </div>
                    <div className="vote__text__reminder">
                        <i class="bi bi-arrow-right"></i> 
                        <span>
                        give your vote and get 10 coins for more future discount
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}
