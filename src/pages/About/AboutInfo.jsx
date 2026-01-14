

import React from "react";
import { Link } from "react-router-dom";

const AboutInfo = () => {
  // Data for the counters
  const counters = [
    { count: 25, symbol: "+", text: "Retail Stores in the city" },
    { count: 3, symbol: "k+", text: "Active Delivery Personnel" },
    { count: 120, symbol: "+", text: "Brands and Companies" },
  ];

  return (
    <>
      {/* Page Title / Breadcrumb */}
      <section className="page-title pt_20 pb_18">
        <div className="large-container">
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section pb_80">
        <div className="large-container">
          <div className="row align-items-center">
            {/* Image Column */}
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_one">
                <div className="image-box">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                      <figure className="image image-hov-one">
                        <img
                          src="assets/images/resource/about-1.jpg"
                          alt="About 1"
                        />
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                      <figure className="image image-hov-two">
                        <img
                          src="assets/images/resource/about-2.jpg"
                          alt="About 2"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="experience-box">
                    <div className="inner">
                      <h2>20</h2>
                      <span>
                        Years of <br />
                        experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_two">
                <div className="content-box ml_30">
                  <div className="text-box mb_55">
                    <h2>
                      We are Link retail business in Ecommerce Products and
                      accessories
                    </h2>
                    <p>
                      Garaze Auto Parts, with Link rich legacy spanning 12
                      years, stands as Link venerable online destination for
                      automotive enthusiasts seeking Link diverse range of
                      high-quality vehicle components.
                    </p>
                    <p>
                      All components featured in their inventory undergo
                      rigorous quality checks to meet or exceed industry
                      standards, instilling confidence in customers regarding
                      the reliability of their purchases.
                    </p>
                  </div>

                  <div className="inner-box">
                    {counters.map((item, index) => (
                      <div className="single-item" key={index}>
                        <div className="count-outer">
                          <span className="odometer" data-count={item.count}>
                            {item.count}
                          </span>
                          <span className="symble">{item.symbol}</span>
                        </div>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInfo;
