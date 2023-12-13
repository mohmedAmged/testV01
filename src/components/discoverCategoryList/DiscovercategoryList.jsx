import React, { useState } from 'react'
import './discoverCategoryList.css'
import { InputGroup } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import food3 from '../../assets/discoverHomeImg/food3.jpg'
import food2 from '../../assets/discoverHomeImg/food2.jpg'
import food1 from '../../assets/discoverHomeImg/food1.jpg'
import food4 from '../../assets/discoverHomeImg/food4.jpg'
import health1 from '../../assets/discoverHomeImg/health1.jpg'
import health2 from '../../assets/discoverHomeImg/health2.jpg'
import food5 from '../../assets/discoverHomeImg/food5.jpg'
import resturant from '../../assets/discoverHomeImg/restaurant.jpg'
import resturant2 from '../../assets/discoverHomeImg/resturant2.jpg'
import AdsCard from '../adsCard/AdsCard';
import ReactSlider from "react-slider";
const restaurantDataArr = [
    {
        "name": 'Jordan Restaurant',
        "special": 'Special',
        "category": "latest",
        "votes": '1,358',
        "menu": 'open',
        "image": resturant,
        "imageSources": [resturant2, resturant],
    },
    {
        "name": 'goucy Restaurant',
        "special": '',
        "category": "food",
        "votes": '1,158',
        "menu": 'Menu',
        "image": resturant,
        "imageSources": [food3, food2, food1],
    },
    {
        "name": 'Food Hub',
        "special": 'sponsered',
        "category": "food",
        "votes": '1,158',
        "menu": 'Menu',
        "image": resturant,
        "imageSources": [food5, food4],
    },
    {
        "name": 'Fitness',
        "special": '',
        "category": "health",
        "votes": '1,158',
        "menu": 'time',
        "image": resturant,
        "imageSources": [health2, health1],
    }
]
const quickBtn = [
    {
        "btnName": "burgers",
    },
    {
        "btnName": "pizza",
    },
    {
        "btnName": "falafel",
    },
    {
        "btnName": "sushi",
    },
    {
        "btnName": "indian",
    },
    {
        "btnName": "chinies",
    },
    {
        "btnName": "itlian",
    },
    {
        "btnName": "sea food",
    },
    {
        "btnName": "nodles",
    },
]
export default function DiscovercategoryList() {
    const [values, setValues] = useState([200, 3000]);

    const handleSliderChange = (newValues) => {
        setValues(newValues);
    };
    return (
        <div className='discoverCategoryList__handler mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="search__part__handler">
                            <div className="search__title">Popular Filters</div>
                            <div className="discoverCategoryList__subCategories">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        sub category (0)
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        sub category (0)
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        sub category (0)
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        sub category (0)
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        sub category (0)
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="price__search__part">
                            <div className="price__search__title">
                                Select Votes
                            </div>
                            <div className="price__Sec">
                                <div className="range__item">
                                    {/* <Form.Range /> */}
                                    <ReactSlider
                                        className="range-slider"
                                        value={values}
                                        withBars
                                        min={200}
                                        max={3000}
                                        step={100}
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
                                                        value={`${values[0]}`}
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
                                                        value={`${values[1]}`}
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
                        <div className="discoverCategoryList__box">
                            <h3 className='mb-4 discoverCategoryList__tit'>
                                4 most recomended place in country
                            </h3>
                            <div className="ads__filter__cards">
                                <div className="row">
                                    {
                                        restaurantDataArr.map((restaurantDataArr) => {
                                            return (
                                                <AdsCard restaurantData={restaurantDataArr} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="discoverCategoryList__quickBtns">
                            <ul>
                                {
                                    quickBtn.map((el)=>{
                                        return(
                                            <li className="quickBtn">
                                                {el.btnName}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
