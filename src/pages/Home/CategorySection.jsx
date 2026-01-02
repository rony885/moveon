// import React from "react";

// const CategorySection = () => {
//   return (
//     <section className="category-section pt_70 pb_75">
//       <div className="large-container">
//         <div className="sec-title">
//           <h2>Popular Categories</h2>
//           <a href="index-2.html">View All Category</a>
//         </div>
//         <div className="category-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
//           <div className="category-block-one">
//             <div className="inner-box">
//               <figure className="image-box">
//                 <img src="assets/images/resource/category-1.png" alt="" />
//               </figure>
//               <div className="lower-content">
//                 <h4>
//                   <a href="index-2.html">Entertainment</a>
//                 </h4>
//                 <span>3 items</span>
//               </div>
//             </div>
//           </div>
//           <div className="category-block-one">
//             <div className="inner-box">
//               <figure className="image-box">
//                 <img src="assets/images/resource/category-2.png" alt="" />
//               </figure>
//               <div className="lower-content">
//                 <h4>
//                   <a href="index-2.html">Internet</a>
//                 </h4>
//                 <span>5 items</span>
//               </div>
//             </div>
//           </div>
//           <div className="category-block-one">
//             <div className="inner-box">
//               <figure className="image-box">
//                 <img src="assets/images/resource/category-3.png" alt="" />
//               </figure>
//               <div className="lower-content">
//                 <h4>
//                   <a href="index-2.html">Security</a>
//                 </h4>
//                 <span>3 items</span>
//               </div>
//             </div>
//           </div>
//           <div className="category-block-one">
//             <div className="inner-box">
//               <figure className="image-box">
//                 <img src="assets/images/resource/category-4.png" alt="" />
//               </figure>
//               <div className="lower-content">
//                 <h4>
//                   <a href="index-2.html">Gaming</a>
//                 </h4>
//                 <span>9 items</span>
//               </div>
//             </div>
//           </div>
//           <div className="category-block-one">
//             <div className="inner-box">
//               <figure className="image-box">
//                 <img src="assets/images/resource/category-5.png" alt="" />
//               </figure>
//               <div className="lower-content">
//                 <h4>
//                   <a href="index-2.html">Storage</a>
//                 </h4>
//                 <span>12 items</span>
//               </div>
//             </div>
//           </div>
//           <div className="category-block-one">
//             <div className="inner-box">
//               <figure className="image-box">
//                 <img src="assets/images/resource/category-6.png" alt="" />
//               </figure>
//               <div className="lower-content">
//                 <h4>
//                   <a href="index-2.html">Electricity</a>
//                 </h4>
//                 <span>6 items</span>
//               </div>
//             </div>
//           </div>
//           <div className="category-block-one">
//             <div className="inner-box">
//               <figure className="image-box">
//                 <img src="assets/images/resource/category-7.png" alt="" />
//               </figure>
//               <div className="lower-content">
//                 <h4>
//                   <a href="index-2.html">Photo & Videos</a>
//                 </h4>
//                 <span>8 items</span>
//               </div>
//             </div>
//           </div>
//           <div className="category-block-one">
//             <div className="inner-box">
//               <figure className="image-box">
//                 <img src="assets/images/resource/category-8.png" alt="" />
//               </figure>
//               <div className="lower-content">
//                 <h4>
//                   <a href="index-2.html">Home Appliance</a>
//                 </h4>
//                 <span>16 items</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategorySection;
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const categories = [
  {
    title: "Entertainment",
    items: 3,
    img: "assets/images/resource/category-1.png",
  },
  { title: "Internet", items: 5, img: "assets/images/resource/category-2.png" },
  { title: "Security", items: 3, img: "assets/images/resource/category-3.png" },
  { title: "Gaming", items: 9, img: "assets/images/resource/category-4.png" },
  { title: "Storage", items: 12, img: "assets/images/resource/category-5.png" },
  {
    title: "Electricity",
    items: 6,
    img: "assets/images/resource/category-6.png",
  },
  {
    title: "Photo & Videos",
    items: 8,
    img: "assets/images/resource/category-7.png",
  },
  {
    title: "Home Appliance",
    items: 16,
    img: "assets/images/resource/category-8.png",
  },
];

const CategorySection = () => {
  const options = {
    loop: true,
    margin: 20,
    nav: true, // arrows enabled
    dots: false, // dots disabled like your original HTML
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      480: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 },
    },
  };

  return (
    <section className="category-section pt_70 pb_75">
      <div className="large-container">
        <div className="sec-title">
          <h2>Popular Categories</h2>
          <a href="index-2.html">View All Category</a>
        </div>

        <OwlCarousel className="category-carousel owl-theme" {...options}>
          {categories.map((cat, index) => (
            <div key={index} className="category-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={cat.img} alt={cat.title} />
                </figure>
                <div className="lower-content">
                  <h4>
                    <a href="index-2.html">{cat.title}</a>
                  </h4>
                  <span>{cat.items} items</span>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default CategorySection;
