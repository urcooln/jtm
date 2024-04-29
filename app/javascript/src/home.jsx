// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './home.scss'
import backgroundImage from './images/groupphoto1.jpeg'
import logo from './images/logo'
import flyerimg from './images/flyerimg'
import { Facebook, SignTurnRightFill, EnvelopeDashFill } from 'react-bootstrap-icons';


const Home = () => (
  <Layout>
<div id='home'>
  <img src={backgroundImage} alt="Background" className="img-fluid w-100" />
  <div className="hero-row position-absolute top-50 start-50 translate-middle text-center w-100">
    <div className="row" >
      <div className="col-lg-12">
        <h1 className='fs-1 hero-text text-white'>J.Torres Tae Kwon Do Academy. Since 2011 </h1>
        <p className='hero-text text-white'>Empower Your Journey: Unleash Your Potential at JTTKDA!</p>
        <br></br>
        <img src={logo} className='pt-5 img-fluid hide-on-small-screen' style={{ maxWidth: '150px'}} />
      </div>
    </div>
  </div>

  <div className="container">
  <h1 className='text-center pb-4 pt-4' id='aboutus'> About Us</h1>
  <div className="row justify-content-center mt-4">
    <div className="col-lg-12">
      <p className='lead'>
        <h3 className='text-center'>Welcome to J. Torres Tae Kwon Do Academy!</h3>
        <br />
        At JTTKDA, we're not just a martial arts school; we're a community dedicated to serving the Hispanic community and surrounding neighborhoods. Our commitment to the city of Camden and its struggling families drives everything we do. We offer a safe, affordable, and productive environment where kids can exercise, gain understanding, and learn discipline.
        <br />
        <br></br>
        We take pride in being fully bilingual, ensuring that language is never a barrier to participation. Our mission is clear: to bring out the best in every student and assist them in achieving a greater level of fitness and self-worth. As a black belt school, we hold ourselves to the highest standards of excellence.
        <br />
        <br></br>

        Dedicated. Motivated. On a quest to be the best. That's who we are at JTTKDA. Our focus is not just on teaching martial arts techniques but on instilling in our students a sense of family and community. When you train with us, you're not just another student; you're part of the JTTKDA family.
        <br />
        <br></br>

        Mr. Torres, our founder and instructor, leads by example, teaching his students that perseverance and determination can take them beyond their beliefs and dreams. Whether you're a child just starting your martial arts journey or an adult looking to improve yourself, we're here to support you every step of the way.
        <br />
        <br></br>

        Join us at J. Torres Tae Kwon Do Academy in Oaklyn, NJ, and discover the transformative power of martial arts. Together, we'll reach new heights and become the best versions of ourselves.

      </p>
    </div>
  </div>
  <div className="row justify-content-center pt-3">
      <iframe className="col-lg-12 img-fluid rounded" src="https://www.youtube.com/embed/pRXJletBVss" title="&quot;Way Of Life: The Martial Arts Journey&quot; - JFX Studios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ height: '500px' }}></iframe>

  </div>
  <br></br>
  <br></br>
  <img src={flyerimg} className="col-lg-12 img-fluid rounded" ></img>





</div>


<div className="container mt-5 pb-3">
  <h1 className="text-center mb-4" id='contactus'>Contact Us</h1>
  <div className="row justify-content-center">
    <div className="col-lg-12">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-center">Contact Information</h5>
          <p className="card-text text-center fs-5 fs-lg-4">
          <a href="https://maps.google.com/?q=515+Whitehorse+Pike,+Oaklyn,+NJ" target="_blank" rel="noopener noreferrer" className="text-decoration-none link">
            515 Whitehorse Pike, Oaklyn, NJ
            <SignTurnRightFill className="align-middle ms-2" size={35} />
          </a>
        </p>
          <p class="card-text text-center fs-5 fs-lg-4">Phone: 856-617-0119</p>
          <p className="text-center card-text fs-5 fs-lg-4">
          <a href="mailto:264jtorres@gmail.com" className="text-decoration-none link">
            264jtorres@gmail.com
            <EnvelopeDashFill className="align-middle ms-2" size={35} />
          </a>
        </p>

        <p className="card-text fs-5 fs-lg-4 text-center">
          <a href="https://www.facebook.com/tae.jtorres" target="_blank" rel="noopener noreferrer" className="text-decoration-none link">
            Visit our Facebook Page <Facebook className="align-middle me-2" size={35} />

          </a>
        </p>

        </div>
      </div>
    </div>
  </div>
</div>




</div>


  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})