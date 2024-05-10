import React from 'react'
import logo from './images/1.png'

const Footer = () => {
    return (
        <div className='p-5 bg-dark'>
            <div class="col-sm-6 d-flex align-items-center">
                <img src={logo} alt="" height="50px" className='logo-bw'/>
                <h5 class="d-inline m-2 text-white">SkyTech Computers</h5>
            </div>
        </div>
    )
}

export default Footer