import React, { useState } from 'react';
import Axios from 'axios';
import Footer from './Footer'

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:4000/insert', {
      userName: name,
      userEmail: email,
      userMessage: message
    });
  };


  return (
    <>
      <div className='row container-fluid m-0 w-100 p-5'>
        <div className="col-sm-6 p-lg-5">
          <h2 className='mb-4'>Get in touch</h2>
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

          <h2 className='mt-5 mb-4'>Lets get social</h2>
          <div className='mb-5'>
          <i class="me-4 fs-4 fa-brands fa-square-facebook text-primary"></i>
          <i class="me-4 fs-4 fa-brands fa-instagram text-danger"></i>
          <i class="me-4 fs-4 fa-brands fa-linkedin text-primary"></i>
          </div>
        </div>
        <div className="col-sm-6 p-0">
          <form action="" className='p-2 p-lg-5 shadow card' onSubmit={handleSubmit}>
            <h3 className='mb-3 p-2'>Send Message</h3>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} name="" value={name} id="" placeholder='Name' className='p-2 rounded m-2 border border-2' />
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="" id="" value={email} placeholder='Email' className='p-2 rounded m-2 border border-2' />
            <textarea name="message" onChange={(e)=>{setMessage(e.target.value)}} id="" cols="30" value={message} rows="10" className='p-2 rounded m-2 border border-2' placeholder='Message'></textarea>
            <button className='btn btn-primary m-2'>Send</button>
          </form>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Contact