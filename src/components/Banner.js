import React from 'react'

const Banner = ({ imgName, text }) => {
    return (
        <div className="banner">
            <img src={imgName} alt="img1" className="banner-img" />
            <div className="banner-text">
                <a href="/">{text}</a>
            </div>
        </div>
    )
}

export default Banner
