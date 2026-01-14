import React from "react";
import { Link } from "react-router-dom";

const VideoStyle = () => {
  return (
    <section className="video-style-two about-page">
      <div
        className="bg-layer parallax-bg"
        data-parallax='{"y": 100}'
        style={{
          backgroundImage: "url(/assets/images/background/video-bg.jpg)",
        }}
      ></div>

      <figure className="image-layer" data-parallax='{"x": -100}'>
        <img src="/assets/images/resource/video-1.png" alt="Video" />
      </figure>

      <span className="big-text">LUXURY WATCH</span>

      <div className="large-container">
        <div className="inner-container">
          <div className="content-box">
            <span className="text-box">New Release</span>
            <h2>Find Your Dream Luxury Watch from here</h2>
            <Link to="/shop-details" className="theme-btn btn-one">
              Shop Now
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </div>

          <div className="video-btn">
            <a
              href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
              className="lightbox-image"
              data-caption=""
            >
              <i className="icon-40"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoStyle;
