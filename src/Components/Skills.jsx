import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaReact,
  FaJs,
} from "react-icons/fa";

const Skills = () => {
  return (
    <>
      {/* MY_SKILLS... */}
      <section
        className="skills_section m-4"
        id="skills"
        aria-label="My Skills"
        data-aos="fade-up"
      >
        <h2 className="orange_color text-center"> My Skills </h2>
        <div className="container text-white mt-4 text-center ">
          <div className="row gap-0 d- justify-content-center align-items-center">
            <div className="w__h__shape col-6 col-sm-6 col-md-3 col-lg-3">
              <FaHtml5
                size={90}
                className="semi_dark_color border_orange_color rounded-3 HOV"
              />
              <h5 className="text-white" data-aos="fade-right">
                HTML
              </h5>
            </div>

            <div
              className="w__h__shape col-6 col-sm-6 col-md-3 col-lg-3"
              data-aos="fade-up"
            >
              <FaCss3
                size={90}
                className="semi_dark_color border_orange_color rounded-3 HOV"
              />
              <h5 className="text-white">CSS</h5>
            </div>

            <div className="w__h__shape col-6 col-sm-6 col-md-3 col-lg-3">
              <FaJs
                size={90}
                className="semi_dark_color border_orange_color rounded-3 HOV"
              />
              <h5 className="text-white" data-aos="fade-left">
                JAVASCRIPT
              </h5>
            </div>

            <div className="w__h__shape col-6 col-sm-6 col-md-3 col-lg-3">
              <FaBootstrap
                size={90}
                className="semi_dark_color border_orange_color rounded-3 HOV"
              />
              <h5 className="text-white" data-aos="fade-right">
                BOOTSTRAP
              </h5>
            </div>

            <div
              className="w__h__shape col-6 col-sm-6 col-md-3 col-lg-3"
              data-aos="fade-up"
            >
              <FaReact
                size={90}
                className="semi_dark_color border_orange_color rounded-3 HOV"
              />
              <h5 className="text-white">REACT</h5>
            </div>

            <div className="w__h__shape col-6 col-sm-6 col-md-4 col-lg-3">
              <FaGithub
                size={90}
                className="semi_dark_color border_orange_color rounded-3 HOV"
              />
              <h5 className="text-white" data-aos="fade-left">
                GITHUB
              </h5>
            </div>
          </div>
        </div>
      </section>
      <hr className="horizontal_line_color" />
    </>
  );
};

export default Skills;
