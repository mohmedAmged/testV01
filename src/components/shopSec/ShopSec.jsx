import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./shopSec.css";
import { InputGroup } from "react-bootstrap";
import Slider from 'react-slider';
import ProductCard from "../productCard/ProductCard";
import ListCardItems from "../listCardItems/ListCardItems";
import ReactSlider from "react-slider";

export default function ShopSec({ cars }) {
    const [activeView, setActiveView] = useState('grid');

    const handleIconClick = (view) => {
        setActiveView(view);
    };


    const [values, setValues] = useState([1000, 30000]);

    const handleSliderChange = (newValues) => {
        setValues(newValues);
      };

    return (
        <div className="shopSec__handler">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-5">
                        <div className="search__part__handler">
                            <div className="search__title">Advanced search</div>
                            <div className="search__form__handler">
                                <form action="">
                                    <div className="select__item">
                                        <Form.Select>
                                            <option selected>Condition</option>
                                            <option>new</option>
                                        </Form.Select>
                                    </div>
                                    <div className="select__item">
                                        <Form.Select>
                                            <option selected>Make</option>
                                            <option>BMW</option>
                                        </Form.Select>
                                    </div>
                                    <div className="select__item">
                                        <Form.Select>
                                            <option selected>Model</option>
                                            <option>3 series</option>
                                        </Form.Select>
                                    </div>
                                    <div className="select__item">
                                        <Form.Select>
                                            <option selected>Interest</option>
                                            <option>compact</option>
                                        </Form.Select>
                                    </div>
                                    <div className="select__item">
                                        <Form.Select>
                                            <option selected>transmission</option>
                                            <option>compact</option>
                                        </Form.Select>
                                    </div>
                                    <div className="form__actions d-flex justify-content-end align-items-center">
                                        <button type="submit" className="form__reset__btn">
                                            <i className="bi bi-arrow-counterclockwise fs-5"></i>
                                            reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="price__search__part">
                            <div className="price__search__title">
                                Select Price
                            </div>
                            <div className="price__Sec">
                                <div className="range__item">
                                    {/* <Form.Range /> */}
                                    <ReactSlider
                                        className="range-slider"
                                        value={values}
                                        withBars
                                        min={1000}
                                        max={30000}
                                        step={500}
                                        pearling
                                        onChange={handleSliderChange}
                                    />
                                </div>
                                <div className="input__price">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="input__item">
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        placeholder="min price"
                                                        aria-label="min price"
                                                        value={`${values[0]}$`}
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input__item">
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        placeholder="max price"
                                                        aria-label="max price"
                                                        value={`${values[1]}$`}
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="shop__part">
                            <div className="shop__part__main__tit d-flex justify-content-between">
                                <h3>
                                    cars for sale
                                </h3>
                                <div className="filter__icons d-flex align-items-center">
                                    <div className={`icon__box grid__icon fs-5 
                                    ${activeView === 'grid' ? 'active' : ''}`}
                                        onClick={() => handleIconClick('grid')}
                                    >
                                        <i className="bi bi-grid"></i>
                                    </div>
                                    <div className={`icon__box list__icon fs-5 
                                    ${activeView === 'list' ? 'active' : ''}`}
                                        onClick={() => handleIconClick('list')}
                                    >
                                        <i className="bi bi-list-ul fs-5"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="shop__list">
                                <div className="shop__list__heading">
                                    <div className="heading__text">
                                        Featured Classified
                                    </div>
                                </div>
                                <div
                                    className={`shop__grid__items ${activeView === 'grid' ? 'active' : ''}`}
                                >
                                    <div className="row">
                                        {
                                            cars?.map(car => {
                                                return (
                                                    <ProductCard key={car?.id} carInfo={car} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div
                                    className={`shop__list__items ${activeView === 'list' ? 'active' : ''}`}
                                >
                                    <div className="row">
                                        {
                                            cars?.map(car => {
                                                return (
                                                    <ListCardItems key={car?.id} carInfo={car} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
