import React from 'react'

const Reference = ({ companyLogo, title, text }) => {
    return (
        <div className="reference-item">
            <img src={companyLogo} alt="companylogo" />
            <div className="reference-text">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Reference
