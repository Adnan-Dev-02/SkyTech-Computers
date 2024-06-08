import React from 'react'
import logo from './images/1.png'

const Footer = () => {
    return (
        <footer className='p-4 p-lg-5 bg-dark text-white row container-fluid w-100 m-0'>
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
                <a href='mailto:adnan.na.2002@gmail.com' className='text-decoration-none text-white'>adnan.na.2002@gmail.com</a>
                <p className='text-secondary mb-1 mt-3'>Phone</p>
                <a href="tel:+918176072903" className='mb-0 text-decoration-none text-white'>+91 81760 72903</a>
            </div>
            <div className="col-sm-4 p-3">
                <h5 className='mb-4'>Get Social</h5>

                <a href='https://www.facebook.com/profile.php?id=61558528687781&mibextid=kFxxJD'>
                    <i class="me-4 fs-4 fa-brands fa-square-facebook text-light"></i>
                </a>
                <a href='https://www.instagram.com/skytech__computers/'>
                    <i class="me-4 fs-4 fa-brands fa-instagram text-light"></i>
                </a>
                <a href='https://www.linkedin.com/company/102875725/admin/dashboard/'>
                    <i class="me-4 fs-4 fa-brands fa-linkedin text-light"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer