import React from "react";
import Saloon_img from "../images/saloon-project-image (2).jpg";
import Geo_world_img from "../images/geo-world-project-image (2).jpg";

const Projects = () => {
  return (
    <>
      {/* MY_PROJECTS_LINKS... */}

      <section
        className=""
        id="projects"
        aria-label="Projects"
        data-aos="flip-left"
      >
        <h2 className="orange_color text-center"> Projects </h2>

        <div className="d-flex justify-content-center align-items-center w-100 container text-white">
          <div className="row container w-auto">
            {/* Add the cards from here */}
            <div
              class="card col-lg-6 col-sm-12 mt-3"
              style={{ width: "18rem;" }}
            >
              <img
                src={Saloon_img}
                class="card-img-top adjust_img_size"
                alt="my-saloon-project-image"
              />
              <div className="card-body">
                <h5 className="card-title">Saloon project</h5>
                <p className="card-text">
                  A saloon project built with html, css, bootstrap and a little
                  bit of javaScript.
                </p>

                {/* PROJECT_LINK HERE */}

                <a
                  href="https://my-saloon.vercel.app"
                  className="text-decoration-none text-white"
                >
                  <button className=" btn__bg p-2 rounded-2 boxxy">View</button>
                </a>
              </div>
            </div>

            <div
              className="card col-lg-6 col-sm-12 mt-3"
              style={{ width: "18rem;" }}
            >
              <div className="container">
                <img
                  src={Geo_world_img}
                  className="card-img-top adjust_img_size"
                  alt="my-geo-world-project-image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Geo-world project</h5>
                <p className="card-text">
                  A simple website that tells a little about mammals life spam.
                </p>

                {/* PROJECT_LINK HERE */}

                <a
                  href="https://animal-world-gamma.vercel.app"
                  className="text-decoration-none text-white wht__text__change"
                >
                  <button className="btn__bg p-2 rounded-2 boxxy">
                    {" "}
                    View{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* To here */}
        </div>
      </section>

      {/* Pagination button... */}
      <div className="d-flex justify-content-center align-items-center mt-4">
        <button className=" orange_color border_orange_color text-center px-5 rounded-3 py-1">
          see more
        </button>
      </div>

      <hr className="horizontal_line_color" />
    </>
  );
};

export default Projects;
