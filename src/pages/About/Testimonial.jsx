// import React from "react";

// const Testimonial = () => {
//   return (
//     <section class="testimonial-style-two pt_70 pb_80">
//       <div class="large-container">
//         <div class="sec-title pb_10">
//           <h2>Love from Customers</h2>
//         </div>
//         <div class="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
//           <div class="testimonial-block-two">
//             <div class="inner-box">
//               <div class="icon-box">
//                 <i class="icon-39"></i>
//               </div>
//               <ul class="rating">
//                 <li>
//                   <i class="icon-11"></i>
//                 </li>
//                 <li>
//                   <i class="icon-11"></i>
//                 </li>
//                 <li>
//                   <i class="icon-11"></i>
//                 </li>
//                 <li>
//                   <i class="icon-11"></i>
//                 </li>
//                 <li class="light">
//                   <i class="icon-11"></i>
//                 </li>
//               </ul>
//               <p>
//                 “Suspendisse est imperdiet pellentesque nulla vulputa te eu
//                 pharetra pharetra massa amet ac semper et pelle ntesque dolor
//                 tincidunt sodales”
//               </p>
//               <div class="author-box">
//                 <figure class="thumb-box">
//                   <img src="assets/images/resource/testimonial-4.png" alt="" />
//                 </figure>
//                 <h4>Floyd Miles</h4>
//                 <span class="designation">UI Designer</span>
//               </div>
//             </div>
//           </div>
//           <div class="testimonial-block-two">
//             <div class="inner-box">
//               <div class="icon-box">
//                 <i class="icon-39"></i>
//               </div>
//               <ul class="rating">
//                 <li>
//                   <i class="icon-11"></i>
//                 </li>
//                 <li>
//                   <i class="icon-11"></i>
//                 </li>
//                 <li>
//                   <i class="icon-11"></i>
//                 </li>
//                 <li>
//                   <i class="icon-11"></i>
//                 </li>
//                 <li class="light">
//                   <i class="icon-11"></i>
//                 </li>
//               </ul>
//               <p>
//                 “Suspendisse est imperdiet pellentesque nulla vulputa te eu
//                 pharetra pharetra massa amet ac semper et pelle ntesque dolor
//                 tincidunt sodales”
//               </p>
//               <div class="author-box">
//                 <figure class="thumb-box">
//                   <img src="assets/images/resource/testimonial-5.png" alt="" />
//                 </figure>
//                 <h4>Cody Fisher</h4>
//                 <span class="designation">UI Designer</span>
//               </div>
//             </div>
//           </div>
//           <div class="testimonial-block-two">
//             <div class="inner-box">
//               <div class="icon-box">
//                 <i class="icon-39"></i>
//               </div>
//               <ul class="rating">
//                 <li>
//                   <i class="icon-11"></i>
//                 </li>
//                 <li>
//                   <i class="icon-11"></i>
//                 </li>
//                 <li>
//                   <i class="icon-11"></i>
//                 </li>
//                 <li>
//                   <i class="icon-11"></i>
//                 </li>
//                 <li class="light">
//                   <i class="icon-11"></i>
//                 </li>
//               </ul>
//               <p>
//                 “Suspendisse est imperdiet pellentesque nulla vulputa te eu
//                 pharetra pharetra massa amet ac semper et pelle ntesque dolor
//                 tincidunt sodales”
//               </p>
//               <div class="author-box">
//                 <figure class="thumb-box">
//                   <img src="assets/images/resource/testimonial-6.png" alt="" />
//                 </figure>
//                 <h4>Courtney Henry</h4>
//                 <span class="designation">UI Designer</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;


// import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// const testimonials = [
//   {
//     img: "assets/images/resource/testimonial-4.png",
//     name: "Floyd Miles",
//     designation: "UI Designer",
//     text: `Suspendisse est imperdiet pellentesque nulla vulputa te eu
//            pharetra pharetra massa amet ac semper et pelle ntesque dolor
//            tincidunt sodales`,
//   },
//   {
//     img: "assets/images/resource/testimonial-5.png",
//     name: "Cody Fisher",
//     designation: "UI Designer",
//     text: `Suspendisse est imperdiet pellentesque nulla vulputa te eu
//            pharetra pharetra massa amet ac semper et pelle ntesque dolor
//            tincidunt sodales`,
//   },
//   {
//     img: "assets/images/resource/testimonial-6.png",
//     name: "Courtney Henry",
//     designation: "UI Designer",
//     text: `Suspendisse est imperdiet pellentesque nulla vulputa te eu
//            pharetra pharetra massa amet ac semper et pelle ntesque dolor
//            tincidunt sodales`,
//   },
// ];

// const Testimonial = () => {
//   const options = {
//     loop: true,
//     margin: 30,
//     nav: true,
//     dots: false,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       768: {
//         items: 2,
//       },
//       1024: {
//         items: 3,
//       },
//     },
//   };

//   return (
//     <section className="testimonial-style-two pt_70 pb_80">
//       <div className="large-container">
//         <div className="sec-title pb_10">
//           <h2>Love from Customers</h2>
//         </div>
//         <OwlCarousel className="three-item-carousel owl-theme" {...options}>
//           {testimonials.map((item, index) => (
//             <div className="testimonial-block-two" key={index}>
//               <div className="inner-box">
//                 <div className="icon-box">
//                   <i className="icon-39"></i>
//                 </div>
//                 <ul className="rating">
//                   {[...Array(5)].map((_, i) => (
//                     <li key={i} className={i === 4 ? "light" : ""}>
//                       <i className="icon-11"></i>
//                     </li>
//                   ))}
//                 </ul>
//                 <p>{item.text}</p>
//                 <div className="author-box">
//                   <figure className="thumb-box">
//                     <img src={item.img} alt={item.name} />
//                   </figure>
//                   <h4>{item.name}</h4>
//                   <span className="designation">{item.designation}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </OwlCarousel>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;


import React, { useRef } from "react";
import styled from 'styled-components';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // react-icons for arrows

const testimonials = [
  {
    img: "assets/images/resource/testimonial-4.png",
    name: "Floyd Miles",
    designation: "UI Designer",
    text: `Suspendisse est imperdiet pellentesque nulla vulputa te eu
           pharetra pharetra massa amet ac semper et pelle ntesque dolor
           tincidunt sodales`,
  },
  {
    img: "assets/images/resource/testimonial-5.png",
    name: "Cody Fisher",
    designation: "UI Designer",
    text: `Suspendisse est imperdiet pellentesque nulla vulputa te eu
           pharetra pharetra massa amet ac semper et pelle ntesque dolor
           tincidunt sodales`,
  },
  {
    img: "assets/images/resource/testimonial-6.png",
    name: "Courtney Henry",
    designation: "UI Designer",
    text: `Suspendisse est imperdiet pellentesque nulla vulputa te eu
           pharetra pharetra massa amet ac semper et pelle ntesque dolor
           tincidunt sodales`,
  },
];

const Testimonial = () => {
  const owlRef = useRef();

  const options = {
    loop: true,
    margin: 30,
    nav: false, // disable default nav
    dots: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  };

  const next = () => owlRef.current.next();
  const prev = () => owlRef.current.prev();

  return (
    <Wrapper>
    <section className="testimonial-style-two pt_70 pb_80">
      <div className="large-container">
        <div
          className="sec-title pb_10"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Love from Customers</h2>
          <div className="custom-nav" style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={prev}
              className="prev-btn"
              style={{
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "50%",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="next-btn"
              style={{
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "50%",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <OwlCarousel ref={owlRef} className="three-item-carousel owl-theme" {...options}>
          {testimonials.map((item, index) => (
            <div className="testimonial-block-two" key={index}>
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-39"></i>
                </div>
                <ul className="rating">
                  {[...Array(5)].map((_, i) => (
                    <li key={i} className={i === 4 ? "light" : ""}>
                      <i className="icon-11"></i>
                    </li>
                  ))}
                </ul>
                <p>{item.text}</p>
                <div className="author-box">
                  <figure className="thumb-box">
                    <img src={item.img} alt={item.name} />
                  </figure>
                  <h4>{item.name}</h4>
                  <span className="designation">{item.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`

`;

export default Testimonial;
