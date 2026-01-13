import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      {/* Page Title */}
      <section className="page-title pt_20 pb_18">
        <div className="large-container">
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>404</li>
          </ul>
        </div>
      </section>

      {/* Error Section */}
      <section className="error-section pt_40 pb_80 centred">
        <div className="auto-container">
          <div className="content-box">
            <figure className="image-box mb-5">
              <img src="/assets/images/icons/error-1.png" alt="404 Error" />
            </figure>

            <h2 className="mb-4">Oops! That Page Can Not be Found.</h2>

            <div className="btn-box">
              <Link to="/" className="theme-btn btn-two mr_20">
                <i className="icon-53"></i>
                Go Back
              </Link>

              <Link to="/" className="theme-btn btn-one">
                Go to Homepage
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
