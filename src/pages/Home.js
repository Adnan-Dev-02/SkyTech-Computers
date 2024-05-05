import React from 'react'
import vector from './images/vector.gif'
import netflix from './images/netflix.png'
import newsindia from './images/newsindia.png'
import webdev from './images/webdev.jpg'
import mobileapp from './images/mobileapp.jpg'
import htmlimg from './images/html.png'
import cssimg from './images/css.png'
import reactimg from './images/react.png'
import jsimg from './images/js.jpg'
import node from './images/node.png'
import tattoostudio from './images/tattoostudio.png'
import mongo from './images/mongo.png'
import digitalm from './images/digitalm.jpg'
import mysql from './images/mysql.png'
import paradise from './images/paradise.png'
import seo from './images/seo.jpeg'
import '../App.css'
import { ReactTyped } from 'react-typed';

import promotion from './images/promotion.jpeg'

function Home() {
  return (

    <div className=' container-fluid m-0 row p-0'>


      <div className='col-sm-6 p-3 p-lg-5'>
        <h1>Welcome to SkyTech Computers</h1> 
        <ReactTyped
          strings={[
            'All-In-One Services',
            'Software Solutions',
            'Hardware Services'
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        >
          <h2 className='d-inline'></h2>
        </ReactTyped>
        <p className='mt-3'>SkyTech Computers is a dynamic technology company that provides a wide range of services to meet diverse digital needs. Their expertise spans various domains, ensuring comprehensive solutions for clients. From CCTV installation and website development to IT infrastructure services and bespoke software development, SkyTech Computers delivers tailored solutions with precision and excellence. Whether you are securing your premises or enhancing your online presence, SkyTech Computers is your trusted partner.</p>
      </div>
      <div className='col-sm-6 p-3 p-lg-5'>
        <img src={vector} alt="" width="100%" />
      </div>
      <div className='container-fluid m-0 p-0'>
        <hr className='mx-5' />
        <h2 className='text-center mb-4'>Technologies We Use</h2>
        <marquee behavior="" direction="right" scrollamount="10" style={{ height: "150px" }} className="">
          <img className='mx-5 language' src={htmlimg} alt="" height={"100px"} />
          <img className='mx-5 language' src={cssimg} alt="" height={"100px"} />
          <img className='mx-5 language' src={jsimg} alt="" height={"100px"} />
          <img className='mx-5 language' src={node} alt="" height={"100px"} />
          <img className='mx-5 language' src={reactimg} alt="" height={"100px"} />
          <img className='mx-5 language' src={mongo} alt="" height={"100px"} />
          <img className='mx-5 language' src={mysql} alt="" height={"100px"} />
        </marquee>
        <hr className='mx-5' />
      </div>
      <div className='p-lg-5 p-3'>
        <h2 className='mb-3'>Our Projects</h2>
        <div className="row container-fluid m-0 mb-3">
          <div className="col-sm-4">
            <div class="card">
              <img class="card-img-top" src={netflix} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Netflix Clone</h5>
                <p class="card-text">This is a clone of the front page of Netflix website.</p>
                <p>Technologies used - HTML, CSS</p>
                <a href="https://adnan-dev-02.github.io/Netflix-Clone/" class="btn btn-primary">Live Demo</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card">
              <img class="card-img-top" src={newsindia} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">News INDIA</h5>
                <p class="card-text">This is a responsive and dynamic News Portal website.</p>
                <p>Technologies used - HTML, CSS, Bootstrap, Python with Django  </p>
                <a href="" class="btn btn-primary">Live Demo</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card">
              <img class="card-img-top" src={newsindia} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Portfolio</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Live Demo</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card">
              <img class="card-img-top" src={paradise} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Paradise Computer Institute</h5>
                <p class="card-text">This is a website made for Paradise Computer Institute in Jaunpur</p>
                <p>Technologies Used - HTML CSS JavaScript Bootstrap JQuery</p>
                <a href="#" class="btn btn-primary">Live Demo</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card">
              <img class="card-img-top" src={tattoostudio} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Tattoo Studio</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className='me-5' />
      <div className="row p-lg-5 p-3">
        <h2 className='mb-3'>My Services</h2>
        <div className="row container-fluid m-0 justify-content-around">
          <div className='col-lg-2 col-md-4'>
            <div class="card">
              <img class="card-img-top" src={webdev} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Web Development</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4'>
            <div class="card">
              <img class="card-img-top" src={mobileapp} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Mobile App Development</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4'>
            <div class="card">
              <img class="card-img-top" src={digitalm} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Digital Marketing</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4'>
            <div class="card">
              <img class="card-img-top" src={seo} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">SEO</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4'>
            <div class="card">
              <img class="card-img-top" src={promotion} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Brand Promotion</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home