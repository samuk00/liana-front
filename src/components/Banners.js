import React from 'react'
import Banner from './Banner'

const Banners = () => {
    return (
        <div className="row">
            <div className="banners">
                <Banner imgName="image1.png" text="Company"/>
                <Banner imgName="image2.png" text="Products" />
                <Banner imgName="image3.png" text="Contact us" />
            </div>
        </div>
    )
}

export default Banners
