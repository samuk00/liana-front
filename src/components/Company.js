import React from 'react'
import CompanyData from './CompanyData'

const Company = () => {

    return (
        <div className="row">
            <div className="company-numbers">
                <CompanyData imgName="business.png" text="Clients" data="3000" />
                <CompanyData imgName="face.png" text="Emloyees" data="180" />
                <CompanyData imgName="public.png" text="Daily users" data="10000" />
            </div>
        </div>
    )
}

export default Company
