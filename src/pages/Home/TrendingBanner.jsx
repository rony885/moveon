// import React from 'react'

// const TrendingBanner = () => {
//   return (
//       <section class="cta-section">
//         <div class="large-container">
//           <div class="inner-container">
//             <div
//               class="bg-layer"
//               style="background-image: url(assets/images/background/cta-bg.jpg)"
//             ></div>
//             <div class="content-box">
//               <span class="text">Trending</span>
//               <h2>Get the Virtual Experience</h2>
//               <h3><span>Starting From</span> $83.99</h3>
//               <div class="btn-box">
//                 <a href="index-2.html" class="theme-btn btn-one"
//                   >Shop Now<span></span><span></span><span></span><span></span
//                 ></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//   )
// }

// export default TrendingBanner

import React from "react";
import { Link } from "react-router-dom";

const TrendingBanner = () => {
  return (
    <section className="cta-section">
      <div className="large-container">
        <div className="inner-container">
          <div
            className="bg-layer"
            style={{
              backgroundImage: "url(/assets/images/background/cta-bg.jpg)",
            }}
          ></div>

          <div className="content-box">
            <span className="text">Trending</span>
            <h2>Get the Virtual Experience</h2>
            <h3>
              <span>Starting From</span> $83.99
            </h3>

            <div className="btn-box">
              <Link to="/" className="theme-btn btn-one">
                Shop Now
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingBanner;
