import React from 'react'
import logo from './images/1.png'

const Footer = () => {
    return (
        <div className='p-5 bg-dark text-white row container-fluid w-100 m-0'>
            <div className="col-sm-4 p-3">
                <div className=' d-flex align-items-center'>
                    <img src={logo} alt="" height="50px"/>
                    <h5 className="d-inline m-2">SkyTech Computers</h5>
                </div>
                <div className='mt-3'>
                    <small className='text-secondary '>SkyTech Computers is a dynamic technology company that provides a wide range of services to meet diverse digital needs.</small>
                </div>
            </div>
            <div className="col-sm-4 p-3">
                <h5 className='mb-4'>Contact Us</h5>
                <p className='text-secondary mb-1'>Location</p>
                <p>Jaunpur, U.P. - 222001</p>
                <p className='text-secondary mb-1'>Email</p>
                <p>adnan.na.2002@gmail.com</p>
                <p className='text-secondary mb-1'>Phone</p>
                <p className='mb-0'>8176072903</p>
            </div>
            <div className="col-sm-4 p-3">
                <h5 className='mb-4'>Get Social</h5>
                <i class="me-4 fs-4 fa-brands fa-square-facebook"></i>
                <i class="me-4 fs-4 fa-brands fa-instagram"></i>
                <i class="me-4 fs-4 fa-brands fa-linkedin"></i>
            </div>
        </div>
    )
}

export default Footer