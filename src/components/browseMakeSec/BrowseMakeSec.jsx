import React from 'react'
import './browseMake.css'
import browse1 from '../../assets/browserSec/browse1.png'
import browse2 from '../../assets/browserSec/browse2.png'
import browse3 from '../../assets/browserSec/browse3.png'
import browse4 from '../../assets/browserSec/browse4.png'
const browserItems = [
    {
        "browse-Logo": browse1,
        "browse-name": "Acura"
    },
    {
        "browse-Logo": browse2,
        "browse-name": "Bentely"
    },
    {
        "browse-Logo": browse3,
        "browse-name": "BMW"
    },
    {
        "browse-Logo": browse4,
        "browse-name": "Chevorlet"
    },
    {
        "browse-Logo": browse4,
        "browse-name": "Chevorlet"
    },
    {
        "browse-Logo": browse3,
        "browse-name": "BMW"
    },
    {
        "browse-Logo": browse2,
        "browse-name": "Bentely"
    },
    {
        "browse-Logo": browse1,
        "browse-name": "Acura"
    }
]
export default function BrowseMakeSec() {
  return (
    <div className='browser__make__sec'>
      <div className="container">
        <div className="browser__make__handler">
            <div className="row">
                <div className="col-lg-12">
                    <div className="browser__head">
                        <h1>Browse by <span>make</span></h1>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    browserItems.map((item)=>{
                        return( <div className="col-lg-3 col-md-6 col-sm-6 mb-3 mt-3 d-flex justify-content-center align-items-center">
                                    <div className="browser__box">
                                        <div className="browser__img">
                                            <img src={item['browse-Logo']} alt="" />
                                        </div>
                                        <div className="browser__text d-flex justify-content-center">
                                            <p>
                                                {item['browse-name']}
                                            </p>
                                        </div>
                        </div>
                    </div>)
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}
