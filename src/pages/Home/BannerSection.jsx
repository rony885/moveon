// import React from 'react'

// const BannerSection = () => {
//   return (
//      <section class="banner-section p_relative">
//         <div
//           class="banner-carousel owl-theme owl-carousel owl-nav-none dots-style-one"
//         >
//           <div class="slide-item p_relative">
//             <div
//               class="pattern-layer"
//               style="background-image: url(assets/images/shape/shape-1.png)"
//             ></div>
//             <figure class="image-layer r_50 b_50">
//               <img src="assets/images/banner/banner-img-1.png" alt="" />
//             </figure>
//             <div class="large-container">
//               <div class="content-box">
//                 <span class="upper-text">New Release</span>
//                 <h2><span>Small Screen Wonders</span> Tales Beyond All</h2>
//                 <h3>Starting From <span>$83.99</span></h3>
//                 <div class="btn-box">
//                   <a href="shop-details.html" class="theme-btn btn-one"
//                     >Shop Now<span></span><span></span><span></span><span></span
//                   ></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="slide-item p_relative">
//             <div
//               class="pattern-layer"
//               style="background-image: url(assets/images/shape/shape-2.png)"
//             ></div>
//             <figure class="image-layer r_95 b_0">
//               <img src="assets/images/banner/banner-img-2.png" alt="" />
//             </figure>
//             <div class="large-container">
//               <div class="content-box">
//                 <span class="upper-text">New Release</span>
//                 <h2><span>Smart Screen Takes You</span> to New Dimension</h2>
//                 <h3>Starting From <span>$73.99</span></h3>
//                 <div class="btn-box">
//                   <a href="shop-details.html" class="theme-btn btn-one"
//                     >Shop Now<span></span><span></span><span></span><span></span
//                   ></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="slide-item p_relative">
//             <div
//               class="pattern-layer"
//               style="background-image: url(assets/images/shape/shape-1.png)"
//             ></div>
//             <figure class="image-layer r_50 b_50">
//               <img src="assets/images/banner/banner-img-1.png" alt="" />
//             </figure>
//             <div class="large-container">
//               <div class="content-box">
//                 <span class="upper-text">New Release</span>
//                 <h2><span>Small Screen Wonders</span> Tales Beyond All</h2>
//                 <h3>Starting From <span>$83.99</span></h3>
//                 <div class="btn-box">
//                   <a href="shop-details.html" class="theme-btn btn-one"
//                     >Shop Now<span></span><span></span><span></span><span></span
//                   ></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="slide-item p_relative">
//             <div
//               class="pattern-layer"
//               style="background-image: url(assets/images/shape/shape-2.png)"
//             ></div>
//             <figure class="image-layer r_95 b_0">
//               <img src="assets/images/banner/banner-img-2.png" alt="" />
//             </figure>
//             <div class="large-container">
//               <div class="content-box">
//                 <span class="upper-text">New Release</span>
//                 <h2><span>Smart Screen Takes You</span> to New Dimension</h2>
//                 <h3>Starting From <span>$73.99</span></h3>
//                 <div class="btn-box">
//                   <a href="shop-details.html" class="theme-btn btn-one"
//                     >Shop Now<span></span><span></span><span></span><span></span
//                   ></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//   )
// }

// export default BannerSection

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// const bannerData = [
//   {
//     pattern: "/assets/images/shape/shape-1.png",
//     image: "/assets/images/banner/banner-img-1.png",
//     imageClass: "r_50 b_50",
//     title1: "Small Screen Wonders",
//     title2: "Tales Beyond All",
//     price: "$83.99",
//   },
//   {
//     pattern: "/assets/images/shape/shape-2.png",
//     image: "/assets/images/banner/banner-img-2.png",
//     imageClass: "r_95 b_0",
//     title1: "Smart Screen Takes You",
//     title2: "to New Dimension",
//     price: "$73.99",
//   },
//   {
//     pattern: "/assets/images/shape/shape-1.png",
//     image: "/assets/images/banner/banner-img-1.png",
//     imageClass: "r_50 b_50",
//     title1: "Small Screen Wonders",
//     title2: "Tales Beyond All",
//     price: "$83.99",
//   },
//   {
//     pattern: "/assets/images/shape/shape-2.png",
//     image: "/assets/images/banner/banner-img-2.png",
//     imageClass: "r_95 b_0",
//     title1: "Smart Screen Takes You",
//     title2: "to New Dimension",
//     price: "$73.99",
//   },
// ];

// const BannerSection = () => {
//   return (
//     <section className="banner-section p_relative">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop={true}
//         pagination={{ clickable: true }}
//         className="banner-carousel dots-style-one"
//       >
//         {bannerData.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="slide-item p_relative">
//               <div
//                 className="pattern-layer"
//                 style={{
//                   backgroundImage: `url(${item.pattern})`,
//                 }}
//               />

//               <figure className={`image-layer ${item.imageClass}`}>
//                 <img src={item.image} alt="banner" />
//               </figure>

//               <div className="large-container">
//                 <div className="content-box">
//                   <span className="upper-text">New Release</span>

//                   <h2>
//                     <span>{item.title1}</span> {item.title2}
//                   </h2>

//                   <h3>
//                     Starting From <span>{item.price}</span>
//                   </h3>

//                   <div className="btn-box">
//                     <a href="shop-details.html" className="theme-btn btn-one">
//                       Shop Now
//                       <span></span>
//                       <span></span>
//                       <span></span>
//                       <span></span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default BannerSection;

import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    shape: "/assets/images/shape/shape-1.png",
    img: "/assets/images/banner/banner-img-1.png",
    imgClass: "r_50 b_50",
    title1: "Small Screen Wonders",
    title2: "Tales Beyond All",
    price: "$83.99",
  },
  {
    id: 2,
    shape: "/assets/images/shape/shape-2.png",
    img: "/assets/images/banner/banner-img-2.png",
    imgClass: "r_95 b_0",
    title1: "Smart Screen Takes You",
    title2: "to New Dimension",
    price: "$73.99",
  },
  {
    id: 3,
    shape: "/assets/images/shape/shape-1.png",
    img: "/assets/images/banner/banner-img-1.png",
    imgClass: "r_50 b_50",
    title1: "Small Screen Wonders",
    title2: "Tales Beyond All",
    price: "$83.99",
  },
  {
    id: 4,
    shape: "/assets/images/shape/shape-2.png",
    img: "/assets/images/banner/banner-img-2.png",
    imgClass: "r_95 b_0",
    title1: "Smart Screen Takes You",
    title2: "to New Dimension",
    price: "$73.99",
  },
];

const BannerSection = () => {
  const options = {
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
  };

  return (
    <section className="banner-section p_relative">
      <OwlCarousel
        className="banner-carousel owl-theme owl-nav-none dots-style-one"
        {...options}
      >
        {slides.map((slide) => (
          <div className="slide-item p_relative" key={slide.id}>
            <div
              className="pattern-layer"
              style={{
                backgroundImage: `url(${slide.shape})`,
              }}
            />
            <figure className={`image-layer ${slide.imgClass}`}>
              <img src={slide.img} alt="" />
            </figure>
            <div className="large-container">
              <div className="content-box">
                <span className="upper-text">New Release</span>
                <h2>
                  <span>{slide.title1}</span> {slide.title2}
                </h2>
                <h3>
                  Starting From <span>{slide.price}</span>
                </h3>
                <div className="btn-box">
                  <Link to="/shop-details" className="theme-btn btn-one">
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
        ))}
      </OwlCarousel>
    </section>
  );
};

export default BannerSection;
