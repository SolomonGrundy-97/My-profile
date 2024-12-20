import React from "react";
import { useEffect } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ProfileImage from "../images/profile_image.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  //Motion on scroll...
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  //My whatsapp link...
  const whatsAppLink =
    "https://wa.me/2349097441714?text=Hello%20%F0%9F%91%8B%20thank%20you%20for%20contacting%20Uzoma%20Solomon%2C%20how%20can%20I%20help%20you%20please%3F%20%F0%9F%98%8A";

  // My linkedin link...
  const LinkedInLink =
    "https://www.linkedin.com/in/solomon-uzoma-2a691b189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  return (
    <>
      {/* LANDING ABOUT ME SECTION */}
      <section
        className=" mx-3 push__down"
        id="about"
        aria-label="About"
        data-aos="fade-up"
      >
        <div className=" container ">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={ProfileImage}
                className="img__size p-1 img-fluid"
                alt="profile_image"
              />
            </div>

            <div className="col-lg-6 text-white mt-5" data-aos="fade-left">
              <h1 className="bio orange_color"> Hi, my name is Solomon Dikeogu</h1>
              <h5 className="bio">I'm a Frontend Developer.</h5>
              <br />

              <button className="rounded-3 orange_color border_orange_color px-5 py-2 mb-4">
                {" "}
                Contact me{" "}
              </button>

              {/* SOCIAL_MEDIA_ICON_LINKS... */}
              <div className="d-grid">
                <a href="https://x.com/Solomon1279501?s=08">
                  <FaTwitter size={30} className="orange_color m-2 HOV__2" />
                </a>

                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={30} className="orange_color m-2 HOV__2" />
                </a>

                <a href="https://www.facebook.com/profile.php?id=100080114964011">
                  <FaFacebook size={30} className="orange_color m-2 HOV__2" />
                </a>

                <a href={LinkedInLink}>
                  <FaLinkedin size={30} className="orange_color m-2 HOV__2" />
                </a>

                <a href="https://github.com/SolomonGrundy-97">
                  <FaGithub size={30} className="orange_color m-2 HOV__2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSSED ABOUT ME SECTION... */}
      <div className="text-white semi_dark_color p-3 mt-5">
        <h2 className="orange_color  mx-3">About me</h2>
        <p className=" mx-5">
          <em>
            I am a dedicated frontend developer from Imo State, Nigeria,
            currently residing in FCT Abuja. With expertise in React, Next.js,
            WordPress, TypeScript, JavaScript, Tailwind CSS, Bootstrap, CSS, and
            HTML, I bring creative and functional web experiences to life. I
            also have solid experience in testing with Cypress and Jest, along
            with knowledge of Vue.js. My passion lies in building responsive,
            user-friendly applications that meet the needs of modern users.
          </em>
        </p>
      </div>
      <hr className="horizontal_line_color" />
    </>
  );
};

export default About;
