import React from 'react'
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer' aria-label='Footer'>

      {/* FOOTER ...*/}
      <div className='footer__part'>
        <h4 className='text-white'>Contact me</h4>

        <div className='mb-1'>
          <FaEnvelope
            className='orange_color'
            size={20}
          />
          <a href='mailto:uzosolos@gmail.com' className='mx-2'>uzosolos@gmail.com</a>
        </div>

        <br />
        <div className='mb-3'>
          <FaPhone
            className='orange_color'
            size={20}
          />
          <a href='tel:+2349097441714' className='mx-2'>+(234)9097441714</a>
        </div>

        <div className='d-flex gap-3 mb-4'>

          <a href='https://www.facebook.com/profile.php?id=100080114964011'>
            <FaFacebook
              className='orange_color'
              size={20}
            />
          </a>

          <a href='https://x.com/Solomon1279501?s=08'>
            <FaTwitter
              className='orange_color'
              size={20}
            />
          </a>

          <a href=''>
            <FaLinkedin
              className='orange_color'
              size={20}
            />
          </a>

          <a href='https://whatsapp.com/dl/'>
            <FaWhatsapp
              className='orange_color'
              size={20}
            />
          </a>

        </div>
        <p className='text-white text-center'>Copyright &copy; Solomon Uzoma 2024.</p>

        <div className='container'>
        <a href="https://github.com/SolomonGrundy-97" className=' text-decoration-none'>
          <button type="button" className='orange_color border_orange_color px-5 py-1 rounded-3 form-control mb-3'>
            
            Download CV
           
          </button>
          </a>
        </div>

      </div>

      
    </footer>
  )
}

export default Footer
