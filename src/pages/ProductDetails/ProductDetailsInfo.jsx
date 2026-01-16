// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";

// const ProductDetailsInfo = () => {
//   const mainSlider = useRef(null);

//   const images = [
//     {
//       main: "assets/images/shop/shop-details-1.png",
//       thumbs: [
//         "assets/images/shop/thumb-5.png",
//         "assets/images/shop/thumb-6.png",
//         "assets/images/shop/thumb-7.png",
//         "assets/images/shop/thumb-8.png",
//       ],
//     },
//     {
//       main: "assets/images/shop/shop-details-2.png",
//       thumbs: [
//         "assets/images/shop/thumb-5.png",
//         "assets/images/shop/thumb-6.png",
//         "assets/images/shop/thumb-7.png",
//         "assets/images/shop/thumb-8.png",
//       ],
//     },
//     {
//       main: "assets/images/shop/shop-details-3.png",
//       thumbs: [
//         "assets/images/shop/thumb-5.png",
//         "assets/images/shop/thumb-6.png",
//         "assets/images/shop/thumb-7.png",
//         "assets/images/shop/thumb-8.png",
//       ],
//     },
//     {
//       main: "assets/images/shop/shop-details-4.png",
//       thumbs: [
//         "assets/images/shop/thumb-5.png",
//         "assets/images/shop/thumb-6.png",
//         "assets/images/shop/thumb-7.png",
//         "assets/images/shop/thumb-8.png",
//       ],
//     },
//   ];

//   const mainSettings = {
//     arrows: false,
//     dots: false,
//     fade: true,
//     speed: 600,
//     infinite: true,
//   };

//   return (
//     <>
//       <section className="page-title pt_20 pb_18">
//         <div className="large-container">
//           <ul className="bread-crumb clearfix">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>Shop Details</li>
//           </ul>
//         </div>
//       </section>

//       <section className="shop-details pb_70">
//         <div className="large-container">
//           <div className="product-details-content mb_70">
//             <div className="row clearfix">
//               <div className="col-lg-6 col-md-12 col-sm-12 image-column">
//                 {/* <div className="bxslider">
//                   <div className="slider-content">
//                     <div className="image-inner">
//                       <div className="image-box">
//                         <figure className="image">
//                           <Link
//                             to="assets/images/shop/shop-details-1.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <img
//                               src="assets/images/shop/shop-details-1.png"
//                               alt=""
//                             />
//                           </Link>
//                         </figure>
//                       </div>
//                       <div className="slider-pager">
//                         <ul className="thumb-box">
//                           <li>
//                             <Link
//                               className="active"
//                               data-slide-index="0"
//                               to="#"
//                             >
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-5.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link data-slide-index="1" to="#">
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-6.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link data-slide-index="2" to="#">
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-7.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link data-slide-index="3" to="#">
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-8.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="slider-content">
//                     <div className="image-inner">
//                       <div className="image-box">
//                         <figure className="image">
//                           <Link
//                             to="assets/images/shop/shop-details-2.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <img
//                               src="assets/images/shop/shop-details-2.png"
//                               alt=""
//                             />
//                           </Link>
//                         </figure>
//                       </div>
//                       <div className="slider-pager">
//                         <ul className="thumb-box">
//                           <li>
//                             <Link
//                               className="active"
//                               data-slide-index="0"
//                               to="#"
//                             >
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-5.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link data-slide-index="1" to="#">
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-6.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link data-slide-index="2" to="#">
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-7.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link data-slide-index="3" to="#">
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-8.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="slider-content">
//                     <div className="image-inner">
//                       <div className="image-box">
//                         <figure className="image">
//                           <Link
//                             to="assets/images/shop/shop-details-3.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <img
//                               src="assets/images/shop/shop-details-3.png"
//                               alt=""
//                             />
//                           </Link>
//                         </figure>
//                       </div>
//                       <div className="slider-pager">
//                         <ul className="thumb-box">
//                           <li>
//                             <Link
//                               className="active"
//                               data-slide-index="0"
//                               to="#"
//                             >
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-5.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link data-slide-index="1" to="#">
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-6.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link data-slide-index="2" to="#">
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-7.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link data-slide-index="3" to="#">
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-8.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="slider-content">
//                     <div className="image-inner">
//                       <div className="image-box">
//                         <figure className="image">
//                           <Link
//                             to="assets/images/shop/shop-details-4.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <img
//                               src="assets/images/shop/shop-details-4.png"
//                               alt=""
//                             />
//                           </Link>
//                         </figure>
//                       </div>
//                       <div className="slider-pager">
//                         <ul className="thumb-box">
//                           <li>
//                             <Link
//                               className="active"
//                               data-slide-index="0"
//                               to="#"
//                             >
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-5.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link data-slide-index="1" to="#">
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-6.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link data-slide-index="2" to="#">
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-7.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link data-slide-index="3" to="#">
//                               <figure>
//                                 <img
//                                   src="assets/images/shop/thumb-8.png"
//                                   alt=""
//                                 />
//                               </figure>
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}

//                 <div className="bxslider">
//                   <Slider ref={mainSlider} {...mainSettings}>
//                     {images.map((item, index) => (
//                       <div className="slider-content" key={index}>
//                         <div className="image-inner">
//                           <div className="image-box">
//                             <figure className="image">
//                               <a
//                                 href={item.main}
//                                 className="lightbox-image"
//                                 data-fancybox="gallery"
//                               >
//                                 <img src={item.main} alt="" />
//                               </a>
//                             </figure>
//                           </div>

//                           {/* Thumbnails (EXACT SAME HTML) */}
//                           <div className="slider-pager">
//                             <ul className="thumb-box">
//                               {item.thumbs.map((thumb, i) => (
//                                 <li key={i}>
//                                   <button
//                                     type="button"
//                                     className={
//                                       index === 0 && i === 0 ? "active" : ""
//                                     }
//                                     data-slide-index={i}
//                                     onClick={() =>
//                                       mainSlider.current.slickGoTo(i)
//                                     }
//                                     style={{
//                                       background: "none",
//                                       border: "none",
//                                       padding: 0,
//                                       cursor: "pointer",
//                                     }}
//                                   >
//                                     <figure>
//                                       <img src={thumb} alt="" />
//                                     </figure>
//                                   </button>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </Slider>
//                 </div>
//               </div>

//               <div className="col-lg-6 col-md-12 col-sm-12 content-column">
//                 <div className="content-box ml_30">
//                   <span className="upper-text">Washing Machine</span>
//                   <h2>
//                     Sharp Full Auto Front Loading Inverter Washing Machine
//                     ES-FW105D7PS | 10.5 KG
//                   </h2>
//                   <h3>$500.99</h3>
//                   <ul className="rating mb_25">
//                     <li>
//                       <i className="icon-11"></i>
//                     </li>
//                     <li>
//                       <i className="icon-11"></i>
//                     </li>
//                     <li>
//                       <i className="icon-11"></i>
//                     </li>
//                     <li>
//                       <i className="icon-11"></i>
//                     </li>
//                     <li>
//                       <i className="icon-11"></i>
//                     </li>
//                     <li>
//                       <span>(05)</span>
//                     </li>
//                   </ul>
//                   <div className="text-box mb_30">
//                     <p>
//                       This powerful front loading washing machine will gently
//                       clean your laundry so your favorite clothes can remain as
//                       good as new. Now, washing clothes is much easier and more
//                       fun with the help of this powerful washing machine.
//                     </p>
//                     <p>
//                       This would help you in the decision making process. Your
//                       purchase decision should depend upon what features and
//                       functions you require.
//                     </p>
//                   </div>
//                   <ul className="discription-box mb_30 clearfix">
//                     <li>
//                       <strong>Brand :</strong>Toshiba
//                     </li>
//                     <li>
//                       <strong>Product SKU :</strong>#KKLW30
//                     </li>
//                     <li>
//                       <strong>Category :</strong>front-load washing machines
//                     </li>
//                     <li>
//                       <strong>Availability :</strong>
//                       <span className="product-stock">
//                         <img src="assets/images/icons/icon-1.png" alt="" /> In
//                         Stock
//                       </span>
//                     </li>
//                   </ul>
//                   <div className="color-box mb_30">
//                     <h6>
//                       Color<span>*</span>
//                     </h6>
//                     <ul className="color-list">
//                       <li>
//                         <div className="check-box">
//                           <input
//                             className="check"
//                             type="radio"
//                             id="color1"
//                             name="same"
//                             checked
//                           />
//                           <label for="color1"></label>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="check-box">
//                           <input
//                             className="check"
//                             type="radio"
//                             id="color2"
//                             name="same"
//                           />
//                           <label for="color2"></label>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="check-box">
//                           <input
//                             className="check"
//                             type="radio"
//                             id="color3"
//                             name="same"
//                           />
//                           <label for="color3"></label>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="check-box">
//                           <input
//                             className="check"
//                             type="radio"
//                             id="color4"
//                             name="same"
//                           />
//                           <label for="color4"></label>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="size-box mb_40">
//                     <h6>
//                       Size<span>*</span>
//                     </h6>
//                     <ul className="size-list">
//                       <li>
//                         <div className="check-box">
//                           <input
//                             className="check"
//                             type="radio"
//                             id="size1"
//                             name="same2"
//                             checked
//                           />
//                           <label for="size1">10.5 KG</label>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="check-box">
//                           <input
//                             className="check"
//                             type="radio"
//                             id="size2"
//                             name="same2"
//                           />
//                           <label for="size2">11 KG</label>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="check-box">
//                           <input
//                             className="check"
//                             type="radio"
//                             id="size3"
//                             name="same2"
//                           />
//                           <label for="size3">08 KG</label>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="check-box">
//                           <input
//                             className="check"
//                             type="radio"
//                             id="size4"
//                             name="same2"
//                           />
//                           <label for="size4">09 KG</label>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="addto-cart-box mb_40">
//                     <ul className="clearfix">
//                       <li className="item-quantity">
//                         <input
//                           className="quantity-spinner"
//                           type="text"
//                           value="1"
//                           name="quantity"
//                         />
//                       </li>
//                       <li className="cart-btn">
//                         <button type="button" className="theme-btn btn-one">
//                           Add To Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </li>
//                       <li>
//                         <Link to="shop-details.html">
//                           <i className="icon-5"></i>
//                         </Link>
//                       </li>
//                       <li className="like-btn">
//                         <button>
//                           <i className="icon-6"></i>
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                   <ul className="other-option clearfix">
//                     <li>
//                       <strong>Seller :</strong>Daniel Macron
//                     </li>
//                     <li>
//                       <strong>Tag :</strong>
//                       <span>Best sellers</span>, New Arrivals, On Sale
//                     </li>
//                     <li className="social-links">
//                       <strong>Share :</strong>
//                       <Link to="shop-details.html">
//                         <i className="icon-13"></i>
//                       </Link>
//                       <Link to="shop-details.html">
//                         <i className="icon-14"></i>
//                       </Link>
//                       <Link to="shop-details.html">
//                         <i className="icon-15"></i>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProductDetailsInfo;

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// 🔴 REQUIRED CSS (THIS FIXES BLANK ISSUE)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetailsTab from "./ProductDetailsTab";

const ProductDetailsInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mainSlider = useRef(null);

  const images = [
    {
      main: "assets/images/shop/shop-details-1.png",
      thumbs: [
        "assets/images/shop/thumb-5.png",
        "assets/images/shop/thumb-6.png",
        "assets/images/shop/thumb-7.png",
        "assets/images/shop/thumb-8.png",
      ],
    },
    {
      main: "assets/images/shop/shop-details-2.png",
      thumbs: [
        "assets/images/shop/thumb-5.png",
        "assets/images/shop/thumb-6.png",
        "assets/images/shop/thumb-7.png",
        "assets/images/shop/thumb-8.png",
      ],
    },
    {
      main: "assets/images/shop/shop-details-3.png",
      thumbs: [
        "assets/images/shop/thumb-5.png",
        "assets/images/shop/thumb-6.png",
        "assets/images/shop/thumb-7.png",
        "assets/images/shop/thumb-8.png",
      ],
    },
    {
      main: "assets/images/shop/shop-details-4.png",
      thumbs: [
        "assets/images/shop/thumb-5.png",
        "assets/images/shop/thumb-6.png",
        "assets/images/shop/thumb-7.png",
        "assets/images/shop/thumb-8.png",
      ],
    },
  ];

  const mainSettings = {
    arrows: false,
    dots: false,
    fade: true,
    speed: 600,
    infinite: true,
  };

  return (
    <Wrapper>
      <section className="page-title pt_20 pb_18">
        <div className="large-container">
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Shop Details</li>
          </ul>
        </div>
      </section>

      <section className="shop-details pb_70">
        <div className="large-container">
          <div className="product-details-content mb_70">
            <div className="row clearfix">
              {/* IMAGE COLUMN */}
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="bxslider">
                  <Slider ref={mainSlider} {...mainSettings}>
                    {images.map((item, index) => (
                      <div className="slider-content" key={index}>
                        <div className="image-inner">
                          <div className="image-box">
                            <figure className="image">
                              <a
                                href={item.main}
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <img src={item.main} alt="" />
                              </a>
                            </figure>
                          </div>

                          {/* THUMBNAILS (SAME STRUCTURE) */}
                          <div className="slider-pager">
                            <ul className="thumb-box">
                              {item.thumbs.map((thumb, i) => (
                                <li key={i}>
                                  <button
                                    type="button"
                                    // onClick={() =>
                                    //   mainSlider.current.slickGoTo(i)
                                    // }
                                    className={
                                      activeIndex === i ? "active" : ""
                                    }
                                    onClick={() => {
                                      setActiveIndex(i);
                                      mainSlider.current.slickGoTo(i);
                                    }}
                                    style={{
                                      cursor: "pointer",
                                    }}
                                  >
                                    <figure>
                                      <img src={thumb} alt="" />
                                    </figure>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box ml_30">
                  <span className="upper-text">Washing Machine</span>
                  <h2>
                    Sharp Full Auto Front Loading Inverter Washing Machine
                    ES-FW105D7PS | 10.5 KG
                  </h2>
                  <h3>$500.99</h3>
                  <ul className="rating mb_25">
                    <li>
                      <i className="icon-11"></i>
                    </li>
                    <li>
                      <i className="icon-11"></i>
                    </li>
                    <li>
                      <i className="icon-11"></i>
                    </li>
                    <li>
                      <i className="icon-11"></i>
                    </li>
                    <li>
                      <i className="icon-11"></i>
                    </li>
                    <li>
                      <span>(05)</span>
                    </li>
                  </ul>
                  <div className="text-box mb_30">
                    <p>
                      This powerful front loading washing machine will gently
                      clean your laundry so your favorite clothes can remain as
                      good as new. Now, washing clothes is much easier and more
                      fun with the help of this powerful washing machine.
                    </p>
                    <p>
                      This would help you in the decision making process. Your
                      purchase decision should depend upon what features and
                      functions you require.
                    </p>
                  </div>
                  <ul className="discription-box mb_30 clearfix">
                    <li>
                      <strong>Brand :</strong>Toshiba
                    </li>
                    <li>
                      <strong>Product SKU :</strong>#KKLW30
                    </li>
                    <li>
                      <strong>Category :</strong>front-load washing machines
                    </li>
                    <li>
                      <strong>Availability :</strong>
                      <span className="product-stock">
                        <img src="assets/images/icons/icon-1.png" alt="" /> In
                        Stock
                      </span>
                    </li>
                  </ul>
                  <div className="color-box mb_30">
                    <h6>
                      Color<span>*</span>
                    </h6>
                    <ul className="color-list">
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="radio"
                            id="color1"
                            name="same"
                            checked
                          />
                          <label for="color1"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="radio"
                            id="color2"
                            name="same"
                          />
                          <label for="color2"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="radio"
                            id="color3"
                            name="same"
                          />
                          <label for="color3"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="radio"
                            id="color4"
                            name="same"
                          />
                          <label for="color4"></label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="size-box mb_40">
                    <h6>
                      Size<span>*</span>
                    </h6>
                    <ul className="size-list">
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="radio"
                            id="size1"
                            name="same2"
                            checked
                          />
                          <label for="size1">10.5 KG</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="radio"
                            id="size2"
                            name="same2"
                          />
                          <label for="size2">11 KG</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="radio"
                            id="size3"
                            name="same2"
                          />
                          <label for="size3">08 KG</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="radio"
                            id="size4"
                            name="same2"
                          />
                          <label for="size4">09 KG</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="addto-cart-box mb_40">
                    <ul className="clearfix">
                      <li className="item-quantity">
                        <input
                          className="quantity-spinner"
                          type="text"
                          value="1"
                          name="quantity"
                        />
                      </li>
                      <li className="cart-btn">
                        <button type="button" className="theme-btn btn-one">
                          Add To Cart<span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </li>
                      <li>
                        <Link to="/shop-details">
                          <i className="icon-5"></i>
                        </Link>
                      </li>
                      <li className="like-btn">
                        <button>
                          <i className="icon-6"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <ul className="other-option clearfix">
                    <li>
                      <strong>Seller :</strong>Daniel Macron
                    </li>
                    <li>
                      <strong>Tag :</strong>
                      <span>Best sellers</span>, New Arrivals, On Sale
                    </li>
                    <li className="social-links">
                      <strong>Share :</strong>
                      <Link to="/shop-details">
                        <i className="icon-13"></i>
                      </Link>
                      <Link to="/shop-details">
                        <i className="icon-14"></i>
                      </Link>
                      <Link to="/shop-details">
                        <i className="icon-15"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <ProductDetailsTab />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* ===== SHOP DETAILS ===== */

  .shop-details {
    position: relative;
  }

  .product-details-content {
    position: relative;
  }

  /* ===== SLIDER FIX ===== */

  .bxslider {
    position: relative;
  }

  .slick-slider,
  .slick-list,
  .slick-track {
    height: 100%;
  }

  .slick-slide {
    opacity: 1 !important;
    height: auto;
  }

  .slick-slide > div {
    height: 100%;
  }

  /* ===== IMAGE AREA ===== */

  .product-details-content .image-inner {
    position: relative;
    padding-left: 130px;
    min-height: 500px; /* IMPORTANT */
  }

  .product-details-content .image-box {
    position: relative;
    display: block;
    border: 1px solid #e5e5e5;
    background: #fff;
  }

  .product-details-content .image-box img {
    width: 100%;
    display: block;
  }

  /* ===== THUMBNAILS ===== */

  .product-details-content .slider-pager {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
  }

  .product-details-content .thumb-box {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .product-details-content .thumb-box li {
    margin-bottom: 10px;
  }

  .product-details-content .thumb-box li:last-child {
    margin-bottom: 0;
  }

  /* 🔴 FIX: button instead of a */
  .product-details-content .thumb-box li button {
    width: 120px;
    height: 120px;
    border: 1px solid #e5e5e5;
    background: #fff;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .product-details-content .thumb-box li button img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .product-details-content .thumb-box li button:hover {
    border-color: #000;
  }

  .product-details-content .thumb-box li button.active {
    border-color: #000;
  }

  /* ===== CONTENT ===== */

  .product-details-content .content-box {
    position: relative;
    margin-top: -8px;
  }

  .product-details-content .content-box .upper-text {
    display: block;
    font-size: 16px;
    line-height: 28px;
    color: var(--title-color);
    margin-bottom: 7px;
  }
`;

export default ProductDetailsInfo;
