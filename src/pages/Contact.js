import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <div className='row container-fluid m-0 w-100 p-5'>
        <div className="col-sm-6 p-lg-5">
          <h2 className='mb-5'>Get in touch</h2>
          <div className='mb-2'>
            <i class="fa-solid fa-phone text-primary me-2"></i>
            <p className='d-inline'>+91 8176072903</p>
          </div>
          <div className='mb-4'>
            <i class="fa-solid fa-phone text-primary me-2"></i>
            <p className='d-inline'>+91 8805676919</p>
          </div>
          <div className='mb-2'>
            <i class="fa-solid fa-envelope me-2 text-danger"></i>
            <p className='d-inline'>adnan.na.2002@gmail.com</p>
          </div>
          <div className='mb-4'>
            <i class="fa-solid fa-envelope me-2 text-danger"></i>
            <p className='d-inline'>shubhamyadav09259@gmail.com </p>
          </div>
          <div className='mb-4'>
            <i class="fa-solid fa-location-dot me-2 text-success"></i>
            <p className='d-inline'>Jaunpur, UP</p>
          </div>



        </div>
        <div className="col-sm-6">
          <form action="" className='p-2 p-lg-5 shadow card'>
            <h3 className='mb-3 p-2'>Send Message</h3>
            <input type="text" name="" id="" placeholder='Name' className='p-2 rounded m-2 border border-2' />
            <input type="email" name="" id="" placeholder='Email' className='p-2 rounded m-2 border border-2' />
            <textarea name="message" id="" cols="30" rows="10" className='p-2 rounded m-2 border border-2' placeholder='Message'></textarea>
            <button className='btn btn-primary m-2'>Send</button>
          </form>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Contact