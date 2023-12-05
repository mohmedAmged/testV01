import React from 'react'
import './discoverAdsLocation.css'
import uaeImg from '../../assets/discoverHomeImg/uae.jpg'
import saudiaImg from '../../assets/discoverHomeImg/riyadah.jpeg'
import egyptImg from '../../assets/discoverHomeImg/egypt.jpg'
import moracoImg from '../../assets/discoverHomeImg/moraco.jpg'
import jourdanImg from '../../assets/discoverHomeImg/jourdan.jpg'
import DiscoverLocationCard from '../discoverLocationCard/DiscoverLocationCard'
const locationAds = [
    {
        "imageSrc": uaeImg,
        "country": 'United Arab Emirates',
        "adsCount": 0,
        "colSize": 6
    },
    {
        "imageSrc": saudiaImg,
        "country": 'Saudi Arabia',
        "adsCount": 0,
        "colSize": 6
    },
    {
        "imageSrc": jourdanImg,
        "country": 'Jordan',
        "adsCount": 0,
        "colSize": 4
    },
    {
        "imageSrc": egyptImg,
        "country": 'Egypt',
        "adsCount": 0,
        "colSize": 4
    },
    {
        "imageSrc": moracoImg,
        "country": 'Morocco',
        "adsCount": 0,
        "colSize": 4
    }
]
export default function DiscoverAdsLocation() {
    return (
        <div className='discoverAdsLocation__handler'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-8 col-sm-12 text-center">
                        <h3>
                            Ads Locations
                        </h3>
                        <p>
                            ValuReach provided you an ads location section where you can add your desired locations
                            there is no limit for the locations so do it as you would like to.
                        </p>
                    </div>
                </div>
                <div className="ads__location__cards">
                    <div className="row">
                        {
                            locationAds.map((location, index)=>{
                                return(
                                    <DiscoverLocationCard key={index} 
                                    {...location} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
