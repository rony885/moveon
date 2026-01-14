import React from "react";
import { Link } from "react-router-dom";

const appButtons = [
  {
    id: 1,
    img: "/assets/images/icons/icon-6.png",
    imgAlt: "Apple Store",
    text1: "Download on",
    text2: "App Store",
  },
  {
    id: 2,

    img: "/assets/images/icons/icon-7.png",
    imgAlt: "Google Play",
    text1: "Get it on",
    text2: "Google Play",
  },
];

const AppsSection = () => {
  return (
    <section className="apps-section">
      <div className="large-container">
        <div className="inner-container">
          <div
            className="bg-layer"
            style={{
              backgroundImage: "url(/assets/images/background/apps-bg.jpg)",
            }}
          ></div>

          {/* Mockup Image */}
          <figure className="image-layer p_absolute r_170 b_0">
            <img src="/assets/images/resource/mockup-1.png" alt="App Mockup" />
          </figure>

          {/* Content Box */}
          <div className="content-box">
            <h2>Download Mobile App for your device</h2>

            <div className="btn-box">
              {appButtons.map((app) => {
                return (
                  <Link key={app.id} to="/about" className="apple-store">
                    <img src={app.img} alt="Imagee" />
                    <span>{app.text1}</span>
                    {app.text2}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
