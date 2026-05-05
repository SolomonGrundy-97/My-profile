import React from "react";
import Saloon_img from "../images/salon_img.jpeg";
import Payment_App from "../images/payment_app.jpeg";

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
                alt="my-saloon-project"
              />
              <div className="card-body">
                <h5 className="card-title">Saloon project</h5>
                <p className="card-text">
                  A saloon project built with React, Bootstrap/CSS and
                  TypeScript. This website allows customers to be able to book a
                  hair stylist for a service.
                </p>

                {/* PROJECT_LINK HERE */}

                <a
                  href="https://trimz-n-styles.vercel.app/"
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
                  src={Payment_App}
                  className="card-img-top adjust_img_size"
                  alt="payment app"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Payment App</h5>
                <p className="card-text">
                  A Transactional web/app for receiving and sending funds. Biult
                  with React js and Tailwind CSS.
                </p>

                {/* PROJECT_LINK HERE */}

                <a
                  href="https://nfc-payment-app-beta.vercel.app/"
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
      <a
        href="https://github.com/SolomonGrundy-97?tab=repositories"
        className="d-flex justify-content-center align-items-center mt-4"
      >
        <button className=" orange_color border_orange_color text-center px-5 rounded-3 py-1">
          see more 👉
        </button>
      </a>

      <hr className="horizontal_line_color" />
    </>
  );
};

export default Projects;
