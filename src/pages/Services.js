import React from 'react'
import Footer from './Footer'

const Services = () => {
    return (
        <>
            <div className='p-3 p-lg-5'>
                <h1 className='text-center mb-3'>Our Services</h1>

                <div className='d-flex align-items-center justify-content-center row'>
                    <div className="col-sm-3 p-3">
                        <div class="card shadow service-card" style={{}}>
                            <div class="card-body p-4 pt-3">
                                <h5 class="card-title">Website Development</h5>
                                <p class="card-text service-card-text">Static Website | Dynamic Website | Responsive Website | Website Redesign | Ecommerce Website & more</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 p-3">
                        <div class="card shadow service-card" style={{}}>
                            <div class="card-body p-4">
                                <h5 class="card-title">Mobile App Development</h5>
                                <p class="card-text service-card-text">Android App | Hybrid Application | Responsive App & more</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 p-3">
                        <div class="card shadow service-card" style={{}}>
                            <div class="card-body p-4">
                                <h5 class="card-title">Digital Marketing</h5>
                                <p class="card-text service-card-text">Social Media Marketing | Search Engine Optimization (SEO) | Email Marketing & more</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center row'>
                    <div className="col-sm-3 p-3">
                        <div class="card shadow service-card" style={{}}>
                            <div class="card-body p-4">
                                <h5 class="card-title">Brand Promotion</h5>
                                <p class="card-text service-card-text">Social Media Management | Content Development and Marketing | Social Media Posts & more</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 p-3">
                        <div class="card shadow service-card" style={{}}>
                            <div class="card-body p-4">
                                <h5 class="card-title">CCTV Installation</h5>
                                <p class="card-text service-card-text">Maintenance of installed CCTV cameras | Setting up DVR / NVR System | Configuring Settings for Wireless IP Cameras & more</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Services