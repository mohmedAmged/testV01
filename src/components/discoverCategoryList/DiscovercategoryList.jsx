import React, { useEffect, useState } from 'react'
import './discoverCategoryList.css'
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AdsCard from '../adsCard/AdsCard';
import ReactSlider from "react-slider";
import { baseURL, currCountryCode } from '../../functions/BaseURL';
import { useLocation, useNavigate } from 'react-router-dom';

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
export default function DiscovercategoryList({ categoryFetched, discoversFetched, categoryName }) {
    console.log(categoryFetched);
    console.log(discoversFetched);
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location.search);
    // const [values, setValues] = useState([200, 3000]);

    // const handleSliderChange = (newValues) => {
    //     setValues(newValues);
    // };
    const [renderData, setRenderData] = useState(discoversFetched)
    const filterByDiscoverCategory = async ({ sub_id, sub_name }) => {
        const newFetchedData = await fetch(`${baseURL}/${currCountryCode}/discover-sub-categories/${sub_id}`)
        const response = await newFetchedData.json()
        navigate(`/${currCountryCode}/discover/${categoryName}?${sub_name}`)
        setRenderData(response.data)
    }
    useEffect(() => {
        if (location.search) {
            const serachArr = location.search.split('')
            serachArr.shift()
            let search = serachArr.join('')
            search = search.split('%20').join(' ')
            const filteredSubCategory = categoryFetched?.subCategories?.find((el) => el.sub_name === search)
            filterByDiscoverCategory(filteredSubCategory)
            // console.log(filteredSubCategory);
        }
    }, [])
    return (
        <div className='discoverCategoryList__handler mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-5">
                        <div className="search__part__handler">
                            <div className="search__title">Popular Filters</div>
                            <div className="discoverCategoryList__subCategories">
                                <ul>
                                    <li onClick={
                                        () => {
                                            setRenderData(discoversFetched)
                                            navigate(`/${currCountryCode}/discover/${categoryName}`)
                                        }
                                    }>
                                        <i className="bi bi-chevron-right"></i>
                                        All category
                                    </li>
                                    {
                                        categoryFetched?.subCategories?.map((el) => (
                                            <li key={el?.sub_id}
                                                onClick={() => filterByDiscoverCategory(el)}
                                            >
                                                <i className="bi bi-chevron-right"></i>
                                                {el?.sub_name}
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="discoverCategoryList__box">
                            <h3 className='mb-4 discoverCategoryList__tit'>
                                {categoryFetched?.discoversCount} most recomended {categoryName} in country
                            </h3>
                            <div className="ads__filter__cards">
                                <div className="row">
                                    {
                                        renderData?.discovers?.map((discoverEl, index) => {
                                            return (
                                                <AdsCard key={index} discoverData={discoverEl} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <div className="discoverCategoryList__quickBtns">
                            <ul>
                                {
                                    quickBtn.map((el, index) => {
                                        return (
                                            <li key={index} className="quickBtn">
                                                {el.btnName}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}
