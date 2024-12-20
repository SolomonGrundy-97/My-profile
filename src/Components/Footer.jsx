import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  // Opens the {CV / RESUME} in a new window tab to be downloaded...
  const handleCvDownload = () => {
    window.open("/my-cv.pdf", "_blank");
  };

  // My whatsapp link...
  const whatsAppLink =
    "https://wa.me/2349097441714?text=Hello%20%F0%9F%91%8B%20thank%20you%20for%20contacting%20Uzoma%20Solomon%2C%20how%20can%20I%20help%20you%20please%3F%20%F0%9F%98%8A";

  // My linkedin link...
  const LinkedInLink =
    "https://www.linkedin.com/in/solomon-uzoma-2a691b189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  return (
    <footer id="footer" aria-label="Footer" data-aos="fade-right">
      {/* FOOTER ...*/}
      <div className="footer__part">
        <h4 className="text-white">Contact me</h4>

        <div className="mb-1">
          <FaEnvelope className="orange_color" size={20} />
          <a href="mailto:uzosolos@gmail.com" className="mx-2">
            uzosolos@gmail.com
          </a>
        </div>

        <br />
        <div className="mb-3">
          <FaPhone className="orange_color" size={20} />
          <a href="tel:+2349097441714" className="mx-2">
            +(234)9097441714
          </a>
        </div>

        <div className="d-flex gap-3 mb-4">
          <a href="https://www.facebook.com/profile.php?id=100080114964011">
            <FaFacebook className="orange_color" size={20} />
          </a>

          <a href="https://x.com/Solomon1279501?s=08">
            <FaTwitter className="orange_color" size={20} />
          </a>

          <a href={LinkedInLink}>
            <FaLinkedin className="orange_color" size={20} />
          </a>

          <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="orange_color" size={20} />
          </a>
        </div>

        <div className="container">
          <button
            type="button"
            className="orange_color border_orange_color px-5 py-1 rounded-3 form-control mb-3"
            onClick={handleCvDownload}
          >
            Download CV
          </button>
        </div>

        <p className="text-white text-center">
          Copyright &copy; Solomon Dikeogu 2024.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
