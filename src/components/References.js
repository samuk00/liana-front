import React from 'react'
import Reference from './Reference'

const References = () => {
    return (
        <div className="reference-container">
            <h1>References</h1>
            <div className="row">
                <div className="references">
                    <div className="reference-row">
                        <Reference
                            companyLogo="bosch.png"
                            title="Robert Bosch"
                            text="Bosch is a multinational engineering and electronics company."
                        />
                        <Reference
                            companyLogo="bodyshop.png"
                            title="The Body Shop"
                            text="The Body Shop is as global beauty brand and it has more than 3,000 stores in more than 60 countries."
                        />
                    </div>
                    <div className="reference-row">
                        <Reference
                            companyLogo="lapland.png"
                            title="Lapland Hotels"
                            text="Lapland Hotels is the largest and the most diverse hotel chain in Lapland."
                        />
                        <Reference
                            companyLogo="ikea.png"
                            title="IKEA"
                            text="IKEA is a multinational furniture store."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default References
