import React, { useState } from 'react'
import './homeMainHero.css'
const categoryOptions = [
    { value: 'save', label: 'Save' },
    { value: 'discover', label: 'Discover' },
    { value: 'buy', label: 'Buy' },
];

const subCategoryOptions = {
    save: [
        { value: 'cars', label: 'cars' },
        { value: 'fashion', label: 'fashion' },
        { value: 'food', label: 'food' },
    ],
    discover: [
        { value: 'cars', label: 'cars' },
        { value: 'fashion', label: 'fashion' },
        { value: 'food', label: 'food' },
    ],
    buy: [
        { value: 'cars', label: 'cars' },
        { value: 'fashion', label: 'fashion' },
        { value: 'food', label: 'food' },
    ],
};

const subSubCategoryOptions = {
    cars: [
        { value: 'BMW', label: 'BMW' },
        { value: 'ford', label: 'ford' },
        { value: 'nissan', label: 'nissan' },
        { value: 'kia', label: 'kia' },
    ],
    fashion: [
        { value: 'shirts', label: 'shirts' },
        { value: 'dress', label: 'dress' },
        { value: 'shoes', label: 'shoes' },
        { value: 'jacket', label: 'jacke' },
    ],
    food: [
        { value: 'burger', label: 'burger' },
        { value: 'shawerma', label: 'shawerma' },
        { value: 'seaFood', label: 'seaFood' },
        { value: 'soshi', label: 'soshi' },
    ],
};
export default function HomeMainHero({ title, description }) {
    const [mainCategory, setMainCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [subSubCategory, setSubSubCategory] = useState('');

    const handleMainCategoryChange = (event) => {
        setMainCategory(event.target.value);
        setSubCategory(''); // Reset subCategory when mainCategory changes
        setSubSubCategory(''); // Reset subSubCategory when mainCategory changes
    };

    const handleSubCategoryChange = (event) => {
        setSubCategory(event.target.value);
        setSubSubCategory(''); // Reset subSubCategory when subCategory changes
    };
    return (
        <div className='homeMainHero__handler'>
            <div className='dynamic__hero__handler'>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-sm-12 col-md-12 d-flex justify-content-center align-items-center">
                            <div className="discover__hero__box">
                                <div className="discover__hero__text">
                                    <h1>
                                        {title}
                                    </h1>
                                    <p>
                                        {description}
                                    </p>

                                </div>
                                <div className="discover__hero__form position-relative">
                                    <form action="">
                                        <div className="discover__form row">
                                            <div className="dicover__form__location col-lg-2 col-md-12 col-sm-12 px-1 d-flex align-items-center justify-content-center">
                                                <h3 className='want__title'>
                                                    I want to
                                                </h3>
                                            </div>
                                            <div className="dicover__form__category col-lg-3 col-md-12 col-sm-12 px-1">
                                                <select
                                                    className='discover__form__item'
                                                    name="mainCategory"
                                                    id="main-category"
                                                    value={mainCategory}
                                                    onChange={handleMainCategoryChange}
                                                >
                                                    <option value="" disabled>Select Main Category</option>
                                                    {categoryOptions.map((option) => (
                                                        <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="dicover__form__sub__category col-lg-3 col-md-12 col-sm-12 px-1">
                                                <select
                                                    className='discover__form__item'
                                                    name="subCategory"
                                                    id="sub-category"
                                                    value={subCategory}
                                                    onChange={handleSubCategoryChange}
                                                    disabled={!mainCategory}
                                                >
                                                    <option value="" disabled>Select Sub-Category</option>
                                                    {subCategoryOptions[mainCategory]?.map((option) => (
                                                        <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="dicover__form__sub__category col-lg-2 col-md-12 col-sm-12 px-1">
                                                <select
                                                    className='discover__form__item'
                                                    name="subSubCategory"
                                                    id="sub-sub-category"
                                                    value={subSubCategory}
                                                    onChange={(e) => setSubSubCategory(e.target.value)}
                                                    disabled={!subCategory}
                                                >
                                                    <option value="" disabled>Select Sub-sub-Category</option>
                                                    {subSubCategoryOptions[subCategory]?.map((option) => (
                                                        <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="discover__form__btn col-lg-2 col-md-12 col-sm-12 px-1">
                                                <button className='discover__form__item' type="submit" name="search" value="Search">Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
