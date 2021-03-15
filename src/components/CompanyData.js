import React, { useEffect } from 'react'

const CompanyData = ({ imgName, text, data }) => {

    useEffect(() => {
        const obj = document.getElementById(text);
        animateValue(obj, 0, data, 5000)
    }, [text, data])

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }

    return (
        <div className="company-data">
            <img src={imgName} alt="business" style={{ color: 'green' }} />
            <div className="data">
                <h2 id={text}>{data}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CompanyData
