import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./shopSec.css";
import { InputGroup } from "react-bootstrap";
import ProductCard from "../productCard/ProductCard";
import ListCardItems from "../listCardItems/ListCardItems";
import ReactSlider from "react-slider";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from '../../functions/BaseURL';

export default function ShopSec({ cars, makes, bodies, priceQuery }) {
    const [activeView, setActiveView] = useState('grid');
    const [currentCars, setCurrentCars]= useState(cars);
    const [filters, setFilters] = useState({});

    const uniqueModels = [...new Set(cars?.map(car => car.model))];
    const uniqueTransmissons = [...new Set(cars?.map(car => car.transmission))];
    const uniqueConditions = [...new Set(cars?.map(car => car.condition))];

    const minPrice = Number(priceQuery.data?.min);
    const maxPrice = Number(priceQuery.data?.max);
    const [values, setValues] = useState([minPrice, maxPrice]);

    const handleSliderChange = (newValues) => {
        setValues(newValues);
    };

    const handleIconClick = (view) => {
        setActiveView(view);
    };

    // condition: '',
    // make: '',
    // body: '',
    // model: '',
    // transmission: '',
    // price_from: 0,
    // price_to: 0,

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    const {data, isLoading} = useQuery({
        queryKey: ['cars', filters],
        queryFn: async () => {
            const filterParams = new URLSearchParams(filters);
            const filterURL = `${baseURL}/cars-search?${filterParams.toString()}`;
            const fetchData = await fetch(filterURL);
            const response = await fetchData.json();
            return response.data;
        },
    });

    useEffect(()=>{
        console.log(data)
        if(data){
            setCurrentCars(data.cars);
        }
    },[data]);

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
                                        <Form.Select
                                        defaultValue="condition"
                                        onChange={(e) => {
                                            handleFilterChange('condition', e.target.value.toLowerCase());
                                        }}
                                        >
                                            <option value="condition" disabled>Condition</option>
                                            {uniqueConditions.map(condition => (
                                                <option key={condition} value={condition}>
                                                    {condition}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </div>
                                    <div className="select__item">
                                        <Form.Select defaultValue="make" onChange={(e) => handleFilterChange('make', e.target.value.toLowerCase())}>
                                            <option value="make" disabled>Make</option>
                                            {
                                                makes.map((make) => (
                                                    <option key={make.id} value={make?.name}>{make.name}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </div>
                                    <div className="select__item">
                                        <Form.Select defaultValue="body" onChange={(e) => handleFilterChange('body', e.target.value.toLowerCase())}>
                                            <option value="body" disabled>body</option>
                                            {
                                                bodies.map((body) => (
                                                    <option key={body.id} value={body?.name}>
                                                        {body.name}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </div>
                                    <div className="select__item">
                                        <Form.Select defaultValue="model" onChange={(e) => handleFilterChange('model', e.target.value.toLowerCase())}>
                                            <option value="model" disabled>Model</option>
                                            {uniqueModels.map(model => (
                                                <option key={model} value={model}>
                                                    {model}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </div>
                                    <div className="select__item">
                                        <Form.Select defaultValue="transmission" onChange={(e) => handleFilterChange('transmission', e.target.value.toLowerCase())}>
                                            <option value="transmission">transmission</option>
                                            {uniqueTransmissons.map(transmission => (
                                                <option key={transmission} value={transmission}>
                                                    {transmission}
                                                </option>
                                            ))}
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
                                    <ReactSlider
                                        className="range-slider"
                                        value={values}
                                        withBars
                                        min={minPrice}
                                        max={maxPrice}
                                        step={10}
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
                                                        onChange={(e)=>{
                                                            handleFilterChange("price_from" , e.target.value)
                                                        }}
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
                                                        onChange={(e)=>{
                                                            handleFilterChange("price_to" , e.target.value)
                                                        }}
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
                                            currentCars?.map(car => {
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
                                            currentCars?.map(car => {
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
