import React from 'react'
import Modal from 'react-bootstrap/Modal';
export default function VoteModal({show, setShow, handleClose, discoversSubCategData, discoverSubCategName}) {
    return (
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
    )
}
