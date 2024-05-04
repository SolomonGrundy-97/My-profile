import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ProfileImage from '../images/profile_image.png';




const About = () => {
  
 
    return (
      <>

          {/* LANDING ABOUT ME SECTION */}
      <section className=" mx-3 push__down"  id='about' aria-label='About'>

        <div className=" container ">
      <div className='row'>

      <div className='col-lg-6'>
          <img src={ProfileImage} className='img__size p-1 img-fluid'
           alt="profile_image"
           />
        </div>

        <div className='col-lg-6 text-white mt-5'> 
          <h2 className='bio orange_color'> Hi I'm Solomon Uzoma</h2>
          <h5 className='bio'>A frontend engineer from Nigeria, Imo state. <br /> Currently recides in Abuja.
          </h5>
          <br />

          <button className='rounded-3 orange_color border_orange_color px-5 py-2 mb-4'> Contact me </button>

           {/* SOCIAL_MEDIA_ICON_LINKS... */}
          <div className='d-grid'>

            <a href='https://x.com/Solomon1279501?s=08'>
              <FaTwitter
              size={30} 
                className='orange_color m-2 HOV__2'
              />
            </a>

            <a href='https://whatsapp.com/dl/'>
              <FaWhatsapp 
              size={30}
              className='orange_color m-2 HOV__2'
              />
             </a>

            <a href='https://www.facebook.com/profile.php?id=100080114964011'>
              <FaFacebook 
              size={30} 
              className='orange_color m-2 HOV__2'
              />
            </a>

            <a href='https://github.com/SolomonGrundy-97'>
              <FaLinkedin
              size={30}
              className='orange_color m-2 HOV__2'
              /> 
             </a>

            <a href='https://github.com/SolomonGrundy-97'>
              <FaGithub 
              size={30}
              className='orange_color m-2 HOV__2'
              />
            </a>

          </div>
        </div> 
      </div>
      </div>
      </section>

          {/* CROSSED ABOUT ME SECTION... */}
        <div className='text-white semi_dark_color p-3 mt-5'>
          <h2 className='orange_color  mx-3'>About me</h2>
          <p className=' mx-5'>
            rem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt assumenda facere repellat tempore, omnis in laborum, 
          </p>
        </div>
        <hr className='horizontal_line_color'/>

      </>
    )
    }


export default About;

