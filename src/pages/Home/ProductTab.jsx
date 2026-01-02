// import React, { useState } from "react";

// const ProductTab = () => {
//   const [activeTab, setActiveTab] = useState("tab-1");

//   return (
//     <section className="shop-two pb_50">
//       <div className="large-container">
//         <div className="tabs-box">
//           <div className="title-content">
//             <div className="sec-title">
//               <h2>Today’s popular picks</h2>
//             </div>
//             <ul className="tab-btns tab-buttons shop-tab-btn clearfix">
//               <li
//                 className={`tab-btn ${
//                   activeTab === "tab-1" ? "active-btn" : ""
//                 }`}
//                 onClick={() => setActiveTab("tab-1")}
//               >
//                 All
//               </li>

//               <li
//                 className={`tab-btn ${
//                   activeTab === "tab-2" ? "active-btn" : ""
//                 }`}
//                 onClick={() => setActiveTab("tab-2")}
//               >
//                 Mobile
//               </li>

//               <li
//                 className={`tab-btn ${
//                   activeTab === "tab-3" ? "active-btn" : ""
//                 }`}
//                 onClick={() => setActiveTab("tab-3")}
//               >
//                 Watch
//               </li>

//               <li
//                 className={`tab-btn ${
//                   activeTab === "tab-4" ? "active-btn" : ""
//                 }`}
//                 onClick={() => setActiveTab("tab-4")}
//               >
//                 Audio
//               </li>

//               <li
//                 className={`tab-btn ${
//                   activeTab === "tab-5" ? "active-btn" : ""
//                 }`}
//                 onClick={() => setActiveTab("tab-5")}
//               >
//                 Video
//               </li>

//               <li
//                 className={`tab-btn ${
//                   activeTab === "tab-6" ? "active-btn" : ""
//                 }`}
//                 onClick={() => setActiveTab("tab-6")}
//               >
//                 Internet
//               </li>

//               <li
//                 className={`tab-btn ${
//                   activeTab === "tab-7" ? "active-btn" : ""
//                 }`}
//                 onClick={() => setActiveTab("tab-7")}
//               >
//                 Music
//               </li>

//               <li
//                 className={`tab-btn ${
//                   activeTab === "tab-8" ? "active-btn" : ""
//                 }`}
//                 onClick={() => setActiveTab("tab-8")}
//               >
//                 Power
//               </li>
//             </ul>
//           </div>
//           <div className="tabs-content">
//             {activeTab === "tab-1" && (
//               <div className="tab active-tab" id="tab-1">
//                 <div className="inner-container clearfix">
//                   <div className="shop-block-two">
//                     <div className="inner-box">
//                       <div className="image-box">
//                         <span className="discount-product p_absolute l_0 t_7">
//                           -6%
//                         </span>
//                         <ul className="option-list">
//                           <li>
//                             <a
//                               href="assets/images/shop/shop-26.png"
//                               className="lightbox-image"
//                               data-fancybox="gallery"
//                             >
//                               <i className="far fa-eye"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="shop-details.html">
//                               <i className="icon-5"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <button type="button">
//                               <i className="icon-6"></i>
//                             </button>
//                           </li>
//                         </ul>
//                         <figure className="image">
//                           <img src="assets/images/shop/shop-26.png" alt="" />
//                         </figure>
//                       </div>
//                       <div className="lower-content">
//                         <span className="text">Video</span>
//                         <h4>
//                           <a href="shop-details.html">
//                             Vintage 1970s Sony AVC-1420 Video
//                           </a>
//                         </h4>
//                         <h5>
//                           $92.99<del>$83.99</del>
//                         </h5>
//                         <ul className="rating">
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <span>(2)</span>
//                           </li>
//                         </ul>
//                         <div className="progress-box low-stock">
//                           <div className="bar mb_15">
//                             <div
//                               className="bar-inner count-bar"
//                               data-percent="20%"
//                             ></div>
//                           </div>
//                           <p>
//                             Available: <span>20%</span>
//                           </p>
//                         </div>
//                         <div className="cart-btn">
//                           <button type="button" className="theme-btn">
//                             Add to Cart<span></span>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="shop-block-two">
//                     <div className="inner-box">
//                       <div className="image-box">
//                         <span className="hot-product p_absolute l_0 t_7">
//                           Hot
//                         </span>
//                         <ul className="option-list">
//                           <li>
//                             <a
//                               href="assets/images/shop/shop-27.png"
//                               className="lightbox-image"
//                               data-fancybox="gallery"
//                             >
//                               <i className="far fa-eye"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="shop-details.html">
//                               <i className="icon-5"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <button type="button">
//                               <i className="icon-6"></i>
//                             </button>
//                           </li>
//                         </ul>
//                         <figure className="image">
//                           <img src="assets/images/shop/shop-27.png" alt="" />
//                         </figure>
//                       </div>
//                       <div className="lower-content">
//                         <span className="text">Device</span>
//                         <h4>
//                           <a href="shop-details.html">
//                             Box Shinecon 3D Glass with Remote
//                           </a>
//                         </h4>
//                         <h5>$29.99</h5>
//                         <ul className="rating">
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <span>(4)</span>
//                           </li>
//                         </ul>
//                         <div className="progress-box">
//                           <div className="bar mb_15">
//                             <div
//                               className="bar-inner count-bar"
//                               data-percent="70%"
//                             ></div>
//                           </div>
//                           <p>
//                             Available: <span>70%</span>
//                           </p>
//                         </div>
//                         <div className="cart-btn">
//                           <button type="button" className="theme-btn">
//                             Add to Cart<span></span>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="shop-block-two">
//                     <div className="inner-box">
//                       <div className="image-box">
//                         <ul className="option-list">
//                           <li>
//                             <a
//                               href="assets/images/shop/shop-28.png"
//                               className="lightbox-image"
//                               data-fancybox="gallery"
//                             >
//                               <i className="far fa-eye"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="shop-details.html">
//                               <i className="icon-5"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <button type="button">
//                               <i className="icon-6"></i>
//                             </button>
//                           </li>
//                         </ul>
//                         <figure className="image">
//                           <img src="assets/images/shop/shop-28.png" alt="" />
//                         </figure>
//                       </div>
//                       <div className="lower-content">
//                         <span className="text">Accessories</span>
//                         <h4>
//                           <a href="shop-details.html">
//                             Super Slim Rechargeable Wireless Mouse
//                           </a>
//                         </h4>
//                         <h5>$12.99</h5>
//                         <ul className="rating">
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <span>(5)</span>
//                           </li>
//                         </ul>
//                         <div className="progress-box">
//                           <div className="bar mb_15">
//                             <div
//                               className="bar-inner count-bar"
//                               data-percent="55%"
//                             ></div>
//                           </div>
//                           <p>
//                             Available: <span>55%</span>
//                           </p>
//                         </div>
//                         <div className="cart-btn">
//                           <button type="button" className="theme-btn">
//                             Add to Cart<span></span>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="shop-block-two">
//                     <div className="inner-box">
//                       <div className="image-box">
//                         <span className="discount-product p_absolute l_0 t_7">
//                           -6%
//                         </span>
//                         <ul className="option-list">
//                           <li>
//                             <a
//                               href="assets/images/shop/shop-29.png"
//                               className="lightbox-image"
//                               data-fancybox="gallery"
//                             >
//                               <i className="far fa-eye"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="shop-details.html">
//                               <i className="icon-5"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <button type="button">
//                               <i className="icon-6"></i>
//                             </button>
//                           </li>
//                         </ul>
//                         <figure className="image">
//                           <img src="assets/images/shop/shop-29.png" alt="" />
//                         </figure>
//                       </div>
//                       <div className="lower-content">
//                         <span className="text">MObile Parts</span>
//                         <h4>
//                           <a href="shop-details.html">
//                             Samsung 15W Fast Magnetic Charger for
//                           </a>
//                         </h4>
//                         <h5>$45.99</h5>
//                         <ul className="rating">
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <span>(2)</span>
//                           </li>
//                         </ul>
//                         <div className="progress-box low-stock">
//                           <div className="bar mb_15">
//                             <div
//                               className="bar-inner count-bar"
//                               data-percent="15%"
//                             ></div>
//                           </div>
//                           <p>
//                             Available: <span>15%</span>
//                           </p>
//                         </div>
//                         <div className="cart-btn">
//                           <button type="button" className="theme-btn">
//                             Add to Cart<span></span>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="shop-block-two">
//                     <div className="inner-box">
//                       <div className="image-box">
//                         <ul className="option-list">
//                           <li>
//                             <a
//                               href="assets/images/shop/shop-30.png"
//                               className="lightbox-image"
//                               data-fancybox="gallery"
//                             >
//                               <i className="far fa-eye"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="shop-details.html">
//                               <i className="icon-5"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <button type="button">
//                               <i className="icon-6"></i>
//                             </button>
//                           </li>
//                         </ul>
//                         <figure className="image">
//                           <img src="assets/images/shop/shop-30.png" alt="" />
//                         </figure>
//                       </div>
//                       <div className="lower-content">
//                         <span className="text">Accessories</span>
//                         <h4>
//                           <a href="shop-details.html">
//                             Logitech MX Master 3 Advanced Wireless
//                           </a>
//                         </h4>
//                         <h5>$59.99</h5>
//                         <ul className="rating">
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <span>(5)</span>
//                           </li>
//                         </ul>
//                         <div className="progress-box">
//                           <div className="bar mb_15">
//                             <div
//                               className="bar-inner count-bar"
//                               data-percent="80%"
//                             ></div>
//                           </div>
//                           <p>
//                             Available: <span>80%</span>
//                           </p>
//                         </div>
//                         <div className="cart-btn">
//                           <button type="button" className="theme-btn">
//                             Add to Cart<span></span>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="shop-block-two">
//                     <div className="inner-box">
//                       <div className="image-box">
//                         <span className="hot-product p_absolute l_0 t_7">
//                           Hot
//                         </span>
//                         <ul className="option-list">
//                           <li>
//                             <a
//                               href="assets/images/shop/shop-31.png"
//                               className="lightbox-image"
//                               data-fancybox="gallery"
//                             >
//                               <i className="far fa-eye"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="shop-details.html">
//                               <i className="icon-5"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <button type="button">
//                               <i className="icon-6"></i>
//                             </button>
//                           </li>
//                         </ul>
//                         <figure className="image">
//                           <img src="assets/images/shop/shop-31.png" alt="" />
//                         </figure>
//                       </div>
//                       <div className="lower-content">
//                         <span className="text">Gaming</span>
//                         <h4>
//                           <a href="shop-details.html">
//                             VR Remote Controller Gamepad Bluetooth
//                           </a>
//                         </h4>
//                         <h5>$359.99</h5>
//                         <ul className="rating">
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <span>(4)</span>
//                           </li>
//                         </ul>
//                         <div className="progress-box">
//                           <div className="bar mb_15">
//                             <div
//                               className="bar-inner count-bar"
//                               data-percent="70%"
//                             ></div>
//                           </div>
//                           <p>
//                             Available: <span>70%</span>
//                           </p>
//                         </div>
//                         <div className="cart-btn">
//                           <button type="button" className="theme-btn">
//                             Add to Cart<span></span>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "tab-2" && (
//               <div className="tab" id="tab-2">
//                 <div className="inner-container clearfix">
//                   <div className="shop-block-two">
//                     <div className="inner-box">
//                       <div className="image-box">
//                         <span className="discount-product p_absolute l_0 t_7">
//                           -6%
//                         </span>
//                         <ul className="option-list">
//                           <li>
//                             <a
//                               href="assets/images/shop/shop-29.png"
//                               className="lightbox-image"
//                               data-fancybox="gallery"
//                             >
//                               <i className="far fa-eye"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="shop-details.html">
//                               <i className="icon-5"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <button type="button">
//                               <i className="icon-6"></i>
//                             </button>
//                           </li>
//                         </ul>
//                         <figure className="image">
//                           <img src="assets/images/shop/shop-29.png" alt="" />
//                         </figure>
//                       </div>
//                       <div className="lower-content">
//                         <span className="text">MObile Parts</span>
//                         <h4>
//                           <a href="shop-details.html">
//                             Samsung 15W Fast Magnetic Charger for
//                           </a>
//                         </h4>
//                         <h5>$45.99</h5>
//                         <ul className="rating">
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <span>(2)</span>
//                           </li>
//                         </ul>
//                         <div className="progress-box low-stock">
//                           <div className="bar mb_15">
//                             <div
//                               className="bar-inner count-bar"
//                               data-percent="15%"
//                             ></div>
//                           </div>
//                           <p>
//                             Available: <span>15%</span>
//                           </p>
//                         </div>
//                         <div className="cart-btn">
//                           <button type="button" className="theme-btn">
//                             Add to Cart<span></span>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="shop-block-two">
//                     <div className="inner-box">
//                       <div className="image-box">
//                         <span className="hot-product p_absolute l_0 t_7">
//                           Hot
//                         </span>
//                         <ul className="option-list">
//                           <li>
//                             <a
//                               href="assets/images/shop/shop-31.png"
//                               className="lightbox-image"
//                               data-fancybox="gallery"
//                             >
//                               <i className="far fa-eye"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="shop-details.html">
//                               <i className="icon-5"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <button type="button">
//                               <i className="icon-6"></i>
//                             </button>
//                           </li>
//                         </ul>
//                         <figure className="image">
//                           <img src="assets/images/shop/shop-31.png" alt="" />
//                         </figure>
//                       </div>
//                       <div className="lower-content">
//                         <span className="text">Gaming</span>
//                         <h4>
//                           <a href="shop-details.html">
//                             VR Remote Controller Gamepad Bluetooth
//                           </a>
//                         </h4>
//                         <h5>$359.99</h5>
//                         <ul className="rating">
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <i className="icon-11"></i>
//                           </li>
//                           <li>
//                             <span>(4)</span>
//                           </li>
//                         </ul>
//                         <div className="progress-box">
//                           <div className="bar mb_15">
//                             <div
//                               className="bar-inner count-bar"
//                               data-percent="70%"
//                             ></div>
//                           </div>
//                           <p>
//                             Available: <span>70%</span>
//                           </p>
//                         </div>
//                         <div className="cart-btn">
//                           <button type="button" className="theme-btn">
//                             Add to Cart<span></span>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div className="tab" id="tab-3">
//               <div className="inner-container clearfix">
//                 <div className="shop-block-two">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <span className="discount-product p_absolute l_0 t_7">
//                         -6%
//                       </span>
//                       <ul className="option-list">
//                         <li>
//                           <a
//                             href="assets/images/shop/shop-26.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <i className="far fa-eye"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="shop-details.html">
//                             <i className="icon-5"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <button type="button">
//                             <i className="icon-6"></i>
//                           </button>
//                         </li>
//                       </ul>
//                       <figure className="image">
//                         <img src="assets/images/shop/shop-26.png" alt="" />
//                       </figure>
//                     </div>
//                     <div className="lower-content">
//                       <span className="text">Video</span>
//                       <h4>
//                         <a href="shop-details.html">
//                           Vintage 1970s Sony AVC-1420 Video
//                         </a>
//                       </h4>
//                       <h5>
//                         $92.99<del>$83.99</del>
//                       </h5>
//                       <ul className="rating">
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <span>(2)</span>
//                         </li>
//                       </ul>
//                       <div className="progress-box low-stock">
//                         <div className="bar mb_15">
//                           <div
//                             className="bar-inner count-bar"
//                             data-percent="20%"
//                           ></div>
//                         </div>
//                         <p>
//                           Available: <span>20%</span>
//                         </p>
//                       </div>
//                       <div className="cart-btn">
//                         <button type="button" className="theme-btn">
//                           Add to Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="shop-block-two">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <span className="hot-product p_absolute l_0 t_7">
//                         Hot
//                       </span>
//                       <ul className="option-list">
//                         <li>
//                           <a
//                             href="assets/images/shop/shop-27.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <i className="far fa-eye"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="shop-details.html">
//                             <i className="icon-5"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <button type="button">
//                             <i className="icon-6"></i>
//                           </button>
//                         </li>
//                       </ul>
//                       <figure className="image">
//                         <img src="assets/images/shop/shop-27.png" alt="" />
//                       </figure>
//                     </div>
//                     <div className="lower-content">
//                       <span className="text">Device</span>
//                       <h4>
//                         <a href="shop-details.html">
//                           Box Shinecon 3D Glass with Remote
//                         </a>
//                       </h4>
//                       <h5>$29.99</h5>
//                       <ul className="rating">
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <span>(4)</span>
//                         </li>
//                       </ul>
//                       <div className="progress-box">
//                         <div className="bar mb_15">
//                           <div
//                             className="bar-inner count-bar"
//                             data-percent="70%"
//                           ></div>
//                         </div>
//                         <p>
//                           Available: <span>70%</span>
//                         </p>
//                       </div>
//                       <div className="cart-btn">
//                         <button type="button" className="theme-btn">
//                           Add to Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="tab" id="tab-4">
//               <div className="inner-container clearfix">
//                 <div className="shop-block-two">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <span className="discount-product p_absolute l_0 t_7">
//                         -6%
//                       </span>
//                       <ul className="option-list">
//                         <li>
//                           <a
//                             href="assets/images/shop/shop-29.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <i className="far fa-eye"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="shop-details.html">
//                             <i className="icon-5"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <button type="button">
//                             <i className="icon-6"></i>
//                           </button>
//                         </li>
//                       </ul>
//                       <figure className="image">
//                         <img src="assets/images/shop/shop-29.png" alt="" />
//                       </figure>
//                     </div>
//                     <div className="lower-content">
//                       <span className="text">MObile Parts</span>
//                       <h4>
//                         <a href="shop-details.html">
//                           Samsung 15W Fast Magnetic Charger for
//                         </a>
//                       </h4>
//                       <h5>$45.99</h5>
//                       <ul className="rating">
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <span>(2)</span>
//                         </li>
//                       </ul>
//                       <div className="progress-box low-stock">
//                         <div className="bar mb_15">
//                           <div
//                             className="bar-inner count-bar"
//                             data-percent="15%"
//                           ></div>
//                         </div>
//                         <p>
//                           Available: <span>15%</span>
//                         </p>
//                       </div>
//                       <div className="cart-btn">
//                         <button type="button" className="theme-btn">
//                           Add to Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="shop-block-two">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <ul className="option-list">
//                         <li>
//                           <a
//                             href="assets/images/shop/shop-30.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <i className="far fa-eye"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="shop-details.html">
//                             <i className="icon-5"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <button type="button">
//                             <i className="icon-6"></i>
//                           </button>
//                         </li>
//                       </ul>
//                       <figure className="image">
//                         <img src="assets/images/shop/shop-30.png" alt="" />
//                       </figure>
//                     </div>
//                     <div className="lower-content">
//                       <span className="text">Accessories</span>
//                       <h4>
//                         <a href="shop-details.html">
//                           Logitech MX Master 3 Advanced Wireless
//                         </a>
//                       </h4>
//                       <h5>$59.99</h5>
//                       <ul className="rating">
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <span>(5)</span>
//                         </li>
//                       </ul>
//                       <div className="progress-box">
//                         <div className="bar mb_15">
//                           <div
//                             className="bar-inner count-bar"
//                             data-percent="80%"
//                           ></div>
//                         </div>
//                         <p>
//                           Available: <span>80%</span>
//                         </p>
//                       </div>
//                       <div className="cart-btn">
//                         <button type="button" className="theme-btn">
//                           Add to Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="tab" id="tab-5">
//               <div className="inner-container clearfix">
//                 <div className="shop-block-two">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <span className="discount-product p_absolute l_0 t_7">
//                         -6%
//                       </span>
//                       <ul className="option-list">
//                         <li>
//                           <a
//                             href="assets/images/shop/shop-26.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <i className="far fa-eye"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="shop-details.html">
//                             <i className="icon-5"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <button type="button">
//                             <i className="icon-6"></i>
//                           </button>
//                         </li>
//                       </ul>
//                       <figure className="image">
//                         <img src="assets/images/shop/shop-26.png" alt="" />
//                       </figure>
//                     </div>
//                     <div className="lower-content">
//                       <span className="text">Video</span>
//                       <h4>
//                         <a href="shop-details.html">
//                           Vintage 1970s Sony AVC-1420 Video
//                         </a>
//                       </h4>
//                       <h5>
//                         $92.99<del>$83.99</del>
//                       </h5>
//                       <ul className="rating">
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <span>(2)</span>
//                         </li>
//                       </ul>
//                       <div className="progress-box low-stock">
//                         <div className="bar mb_15">
//                           <div
//                             className="bar-inner count-bar"
//                             data-percent="20%"
//                           ></div>
//                         </div>
//                         <p>
//                           Available: <span>20%</span>
//                         </p>
//                       </div>
//                       <div className="cart-btn">
//                         <button type="button" className="theme-btn">
//                           Add to Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="shop-block-two">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <span className="hot-product p_absolute l_0 t_7">
//                         Hot
//                       </span>
//                       <ul className="option-list">
//                         <li>
//                           <a
//                             href="assets/images/shop/shop-27.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <i className="far fa-eye"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="shop-details.html">
//                             <i className="icon-5"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <button type="button">
//                             <i className="icon-6"></i>
//                           </button>
//                         </li>
//                       </ul>
//                       <figure className="image">
//                         <img src="assets/images/shop/shop-27.png" alt="" />
//                       </figure>
//                     </div>
//                     <div className="lower-content">
//                       <span className="text">Device</span>
//                       <h4>
//                         <a href="shop-details.html">
//                           Box Shinecon 3D Glass with Remote
//                         </a>
//                       </h4>
//                       <h5>$29.99</h5>
//                       <ul className="rating">
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <span>(4)</span>
//                         </li>
//                       </ul>
//                       <div className="progress-box">
//                         <div className="bar mb_15">
//                           <div
//                             className="bar-inner count-bar"
//                             data-percent="70%"
//                           ></div>
//                         </div>
//                         <p>
//                           Available: <span>70%</span>
//                         </p>
//                       </div>
//                       <div className="cart-btn">
//                         <button type="button" className="theme-btn">
//                           Add to Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="tab" id="tab-6">
//               <div className="inner-container clearfix">
//                 <div className="shop-block-two">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <span className="discount-product p_absolute l_0 t_7">
//                         -6%
//                       </span>
//                       <ul className="option-list">
//                         <li>
//                           <a
//                             href="assets/images/shop/shop-26.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <i className="far fa-eye"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="shop-details.html">
//                             <i className="icon-5"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <button type="button">
//                             <i className="icon-6"></i>
//                           </button>
//                         </li>
//                       </ul>
//                       <figure className="image">
//                         <img src="assets/images/shop/shop-26.png" alt="" />
//                       </figure>
//                     </div>
//                     <div className="lower-content">
//                       <span className="text">Video</span>
//                       <h4>
//                         <a href="shop-details.html">
//                           Vintage 1970s Sony AVC-1420 Video
//                         </a>
//                       </h4>
//                       <h5>
//                         $92.99<del>$83.99</del>
//                       </h5>
//                       <ul className="rating">
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <span>(2)</span>
//                         </li>
//                       </ul>
//                       <div className="progress-box low-stock">
//                         <div className="bar mb_15">
//                           <div
//                             className="bar-inner count-bar"
//                             data-percent="20%"
//                           ></div>
//                         </div>
//                         <p>
//                           Available: <span>20%</span>
//                         </p>
//                       </div>
//                       <div className="cart-btn">
//                         <button type="button" className="theme-btn">
//                           Add to Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="shop-block-two">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <span className="hot-product p_absolute l_0 t_7">
//                         Hot
//                       </span>
//                       <ul className="option-list">
//                         <li>
//                           <a
//                             href="assets/images/shop/shop-27.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <i className="far fa-eye"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="shop-details.html">
//                             <i className="icon-5"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <button type="button">
//                             <i className="icon-6"></i>
//                           </button>
//                         </li>
//                       </ul>
//                       <figure className="image">
//                         <img src="assets/images/shop/shop-27.png" alt="" />
//                       </figure>
//                     </div>
//                     <div className="lower-content">
//                       <span className="text">Device</span>
//                       <h4>
//                         <a href="shop-details.html">
//                           Box Shinecon 3D Glass with Remote
//                         </a>
//                       </h4>
//                       <h5>$29.99</h5>
//                       <ul className="rating">
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <span>(4)</span>
//                         </li>
//                       </ul>
//                       <div className="progress-box">
//                         <div className="bar mb_15">
//                           <div
//                             className="bar-inner count-bar"
//                             data-percent="70%"
//                           ></div>
//                         </div>
//                         <p>
//                           Available: <span>70%</span>
//                         </p>
//                       </div>
//                       <div className="cart-btn">
//                         <button type="button" className="theme-btn">
//                           Add to Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="tab" id="tab-7">
//               <div className="inner-container clearfix">
//                 <div className="shop-block-two">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <span className="discount-product p_absolute l_0 t_7">
//                         -6%
//                       </span>
//                       <ul className="option-list">
//                         <li>
//                           <a
//                             href="assets/images/shop/shop-26.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <i className="far fa-eye"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="shop-details.html">
//                             <i className="icon-5"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <button type="button">
//                             <i className="icon-6"></i>
//                           </button>
//                         </li>
//                       </ul>
//                       <figure className="image">
//                         <img src="assets/images/shop/shop-26.png" alt="" />
//                       </figure>
//                     </div>
//                     <div className="lower-content">
//                       <span className="text">Video</span>
//                       <h4>
//                         <a href="shop-details.html">
//                           Vintage 1970s Sony AVC-1420 Video
//                         </a>
//                       </h4>
//                       <h5>
//                         $92.99<del>$83.99</del>
//                       </h5>
//                       <ul className="rating">
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <span>(2)</span>
//                         </li>
//                       </ul>
//                       <div className="progress-box low-stock">
//                         <div className="bar mb_15">
//                           <div
//                             className="bar-inner count-bar"
//                             data-percent="20%"
//                           ></div>
//                         </div>
//                         <p>
//                           Available: <span>20%</span>
//                         </p>
//                       </div>
//                       <div className="cart-btn">
//                         <button type="button" className="theme-btn">
//                           Add to Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="shop-block-two">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <span className="hot-product p_absolute l_0 t_7">
//                         Hot
//                       </span>
//                       <ul className="option-list">
//                         <li>
//                           <a
//                             href="assets/images/shop/shop-27.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <i className="far fa-eye"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="shop-details.html">
//                             <i className="icon-5"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <button type="button">
//                             <i className="icon-6"></i>
//                           </button>
//                         </li>
//                       </ul>
//                       <figure className="image">
//                         <img src="assets/images/shop/shop-27.png" alt="" />
//                       </figure>
//                     </div>
//                     <div className="lower-content">
//                       <span className="text">Device</span>
//                       <h4>
//                         <a href="shop-details.html">
//                           Box Shinecon 3D Glass with Remote
//                         </a>
//                       </h4>
//                       <h5>$29.99</h5>
//                       <ul className="rating">
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <span>(4)</span>
//                         </li>
//                       </ul>
//                       <div className="progress-box">
//                         <div className="bar mb_15">
//                           <div
//                             className="bar-inner count-bar"
//                             data-percent="70%"
//                           ></div>
//                         </div>
//                         <p>
//                           Available: <span>70%</span>
//                         </p>
//                       </div>
//                       <div className="cart-btn">
//                         <button type="button" className="theme-btn">
//                           Add to Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="tab" id="tab-8">
//               <div className="inner-container clearfix">
//                 <div className="shop-block-two">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <span className="discount-product p_absolute l_0 t_7">
//                         -6%
//                       </span>
//                       <ul className="option-list">
//                         <li>
//                           <a
//                             href="assets/images/shop/shop-26.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <i className="far fa-eye"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="shop-details.html">
//                             <i className="icon-5"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <button type="button">
//                             <i className="icon-6"></i>
//                           </button>
//                         </li>
//                       </ul>
//                       <figure className="image">
//                         <img src="assets/images/shop/shop-26.png" alt="" />
//                       </figure>
//                     </div>
//                     <div className="lower-content">
//                       <span className="text">Video</span>
//                       <h4>
//                         <a href="shop-details.html">
//                           Vintage 1970s Sony AVC-1420 Video
//                         </a>
//                       </h4>
//                       <h5>
//                         $92.99<del>$83.99</del>
//                       </h5>
//                       <ul className="rating">
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <span>(2)</span>
//                         </li>
//                       </ul>
//                       <div className="progress-box low-stock">
//                         <div className="bar mb_15">
//                           <div
//                             className="bar-inner count-bar"
//                             data-percent="20%"
//                           ></div>
//                         </div>
//                         <p>
//                           Available: <span>20%</span>
//                         </p>
//                       </div>
//                       <div className="cart-btn">
//                         <button type="button" className="theme-btn">
//                           Add to Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="shop-block-two">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <span className="hot-product p_absolute l_0 t_7">
//                         Hot
//                       </span>
//                       <ul className="option-list">
//                         <li>
//                           <a
//                             href="assets/images/shop/shop-27.png"
//                             className="lightbox-image"
//                             data-fancybox="gallery"
//                           >
//                             <i className="far fa-eye"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="shop-details.html">
//                             <i className="icon-5"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <button type="button">
//                             <i className="icon-6"></i>
//                           </button>
//                         </li>
//                       </ul>
//                       <figure className="image">
//                         <img src="assets/images/shop/shop-27.png" alt="" />
//                       </figure>
//                     </div>
//                     <div className="lower-content">
//                       <span className="text">Device</span>
//                       <h4>
//                         <a href="shop-details.html">
//                           Box Shinecon 3D Glass with Remote
//                         </a>
//                       </h4>
//                       <h5>$29.99</h5>
//                       <ul className="rating">
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <i className="icon-11"></i>
//                         </li>
//                         <li>
//                           <span>(4)</span>
//                         </li>
//                       </ul>
//                       <div className="progress-box">
//                         <div className="bar mb_15">
//                           <div
//                             className="bar-inner count-bar"
//                             data-percent="70%"
//                           ></div>
//                         </div>
//                         <p>
//                           Available: <span>70%</span>
//                         </p>
//                       </div>
//                       <div className="cart-btn">
//                         <button type="button" className="theme-btn">
//                           Add to Cart<span></span>
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductTab;



import React, { useState } from "react";

const tabs = [
  "All",
  "Mobile",
  "Watch",
  "Audio",
  "Video",
  "Internet",
  "Music",
  "Power",
];

const products = [
  {
    id: 1,
    category: "Video",
    title: "Vintage 1970s Sony AVC-1420 Video",
    price: 92.99,
    oldPrice: 83.99,
    image: "assets/images/shop/shop-26.png",
    badge: "-6%",
    stock: 20,
    rating: 2,
  },
  {
    id: 2,
    category: "Device",
    title: "Box Shinecon 3D Glass with Remote",
    price: 29.99,
    image: "assets/images/shop/shop-27.png",
    badge: "Hot",
    stock: 70,
    rating: 4,
  },
  {
    id: 3,
    category: "Accessories",
    title: "Super Slim Rechargeable Wireless Mouse",
    price: 12.99,
    image: "assets/images/shop/shop-28.png",
    stock: 55,
    rating: 5,
  },
  {
    id: 4,
    category: "Mobile",
    title: "Samsung 15W Fast Magnetic Charger",
    price: 45.99,
    image: "assets/images/shop/shop-29.png",
    badge: "-6%",
    stock: 15,
    rating: 2,
  },
  {
    id: 5,
    category: "Accessories",
    title: "Logitech MX Master 3 Advanced Wireless",
    price: 59.99,
    image: "assets/images/shop/shop-30.png",
    stock: 80,
    rating: 5,
  },
  {
    id: 6,
    category: "Gaming",
    title: "VR Remote Controller Gamepad Bluetooth",
    price: 359.99,
    image: "assets/images/shop/shop-31.png",
    badge: "Hot",
    stock: 70,
    rating: 4,
  },
];

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === activeTab.toLowerCase()
        );

  return (
    <section className="shop-two pb_50">
      <div className="large-container">
        <div className="tabs-box">

          {/* TITLE & TABS */}
          <div className="title-content">
            <div className="sec-title">
              <h2>Today’s popular picks</h2>
            </div>

            <ul className="tab-btns tab-buttons shop-tab-btn clearfix">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={`tab-btn ${
                    activeTab === tab ? "active-btn" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div className="tabs-content">
            <div className="tab active-tab">
              <div className="inner-container clearfix">

                {filteredProducts.map((product) => (
                  <div className="shop-block-two" key={product.id}>
                    <div className="inner-box">

                      {/* IMAGE */}
                      <div className="image-box">
                        {product.badge && (
                          <span className="discount-product p_absolute l_0 t_7">
                            {product.badge}
                          </span>
                        )}

                        <ul className="option-list">
                          <li>
                            <a
                              href={product.image}
                              className="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <i className="far fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="shop-details.html">
                              <i className="icon-5"></i>
                            </a>
                          </li>
                          <li>
                            <button type="button">
                              <i className="icon-6"></i>
                            </button>
                          </li>
                        </ul>

                        <figure className="image">
                          <img src={product.image} alt={product.title} />
                        </figure>
                      </div>

                      {/* CONTENT */}
                      <div className="lower-content">
                        <span className="text">{product.category}</span>

                        <h4>
                          <a href="shop-details.html">{product.title}</a>
                        </h4>

                        <h5>
                          ${product.price}
                          {product.oldPrice && <del>${product.oldPrice}</del>}
                        </h5>

                        {/* RATING */}
                        <ul className="rating">
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <i className="icon-11"></i>
                            </li>
                          ))}
                          <li>
                            <span>({product.rating})</span>
                          </li>
                        </ul>

                        {/* STOCK */}
                        <div
                          className={`progress-box ${
                            product.stock <= 20 ? "low-stock" : ""
                          }`}
                        >
                          <div className="bar mb_15">
                            <div
                              className="bar-inner count-bar"
                              style={{ width: `${product.stock}%` }}
                            ></div>
                          </div>
                          <p>
                            Available: <span>{product.stock}%</span>
                          </p>
                        </div>

                        {/* BUTTON */}
                        <div className="cart-btn">
                          <button type="button" className="theme-btn">
                            Add to Cart
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredProducts.length === 0 && (
                  <p>No products found.</p>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductTab;
