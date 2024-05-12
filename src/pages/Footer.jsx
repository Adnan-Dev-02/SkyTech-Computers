import React from 'react'
import logo from './images/1.png'

const Footer = () => {
    return (
        <div className='p-5 bg-dark'>
            <div class="d-flex align-items-center">
                <img src={logo} alt="" height="50px" className='logo-bw' />
                <h5 class="d-inline m-2 text-white">SkyTech Computers</h5>
            </div> 
            <div className='col-sm-4 mt-3'>
                <small className='text-secondary '>SkyTech Computers is a dynamic technology company that provides a wide range of services to meet diverse digital needs.</small>
            </div>
        </div>
    )
}

export default Footer