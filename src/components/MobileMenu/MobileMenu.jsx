// import React from "react";

// const MobileMenu = () => {
//   return (
//     <div className="mobile-menu">
//       <div className="menu-backdrop"></div>
//       <div className="close-btn">
//         <i className="fas fa-times"></i>
//       </div>
//       <nav className="menu-box">
//         <div className="nav-logo">
//           <a to="/">
//             <img src="assets/images/logo-light.png" alt="" title="" />
//           </a>
//         </div>
//         <div className="menu-outer">
//           {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
//         </div>
//         <div className="contact-info">
//           <h4>Contact Info</h4>
//           <ul>
//             <li>Chicago 12, Melborne City, USA</li>
//             <li>
//               <a href="tel:+8801682648101">+88 01682648101</a>
//             </li>
//             <li>
//               <a href="mailto:info@example.com">info@example.com</a>
//             </li>
//           </ul>
//         </div>
//         <div className="social-links">
//           <ul className="clearfix">
//             <li>
//               <a href="/">
//                 <span className="fab fa-twitter"></span>
//               </a>
//             </li>
//             <li>
//               <a href="/">
//                 <span className="fab fa-facebook-square"></span>
//               </a>
//             </li>
//             <li>
//               <a href="/">
//                 <span className="fab fa-pinterest-p"></span>
//               </a>
//             </li>
//             <li>
//               <a href="/">
//                 <span className="fab fa-instagram"></span>
//               </a>
//             </li>
//             <li>
//               <a href="/">
//                 <span className="fab fa-youtube"></span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default MobileMenu;

import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ menuOpen, closeMenu }) => {
  return (
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <div className="menu-backdrop" onClick={closeMenu}></div>

      <div className="close-btn" onClick={closeMenu}>
        <i className="fas fa-times"></i>
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <Link to="/">
            <img src="/assets/images/logo-light.png" alt="" title="" />
          </Link>
        </div>
        <div className="menu-outer">
          <div
            className="collapse navbar-collapse show clearfix"
            id="navbarSupportedContent"
          >
            <ul className="navigation clearfix">
              <li className="current dropdown">
                <Link to="/">Home</Link>
                <ul>
                  <li>
                    <Link to="/">Electronics</Link>
                  </li>
                  <li>
                    <Link to="index-3.html">Grocery</Link>
                  </li>
                  <li>
                    <Link to="index-4.html">Fish &amp; Meat</Link>
                  </li>
                  <li>
                    <Link to="index-5.html">Vegetable</Link>
                  </li>
                  <li>
                    <Link to="index-6.html">Furniture</Link>
                  </li>
                  <li>
                    <Link to="index-7.html">Medical</Link>
                  </li>
                  <li>
                    <Link to="index-8.html">Kids</Link>
                  </li>
                  <li>
                    <Link to="index-9.html">Gardeing</Link>
                  </li>
                  <li>
                    <Link to="index-10.html">Watch</Link>
                  </li>
                  <li>
                    <Link to="index-11.html">Pet</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="fas fa-angle-down"></span>
                </div>
              </li>
              <li className="dropdown">
                <Link to="/">Shop</Link>
                <ul>
                  <li>
                    <Link to="shop.html">Shop Page 1</Link>
                  </li>
                  <li>
                    <Link to="shop-2.html">Shop Page 2</Link>
                  </li>
                  <li>
                    <Link to="shop-3.html">Shop Page 3</Link>
                  </li>
                  <li>
                    <Link to="shop-4.html">Shop Page 4</Link>
                  </li>
                  <li>
                    <Link to="shop-5.html">Shop Page 5</Link>
                  </li>
                  <li>
                    <Link to="shop-details.html">Shop Details 1</Link>
                  </li>
                  <li>
                    <Link to="shop-details-2.html">Shop Details 2</Link>
                  </li>
                  <li>
                    <Link to="cart.html">Cart</Link>
                  </li>
                  <li>
                    <Link to="checkout.html">Checkout</Link>
                  </li>
                  <li>
                    <Link to="search.html">Search Result</Link>
                  </li>
                  <li>
                    <Link to="account.html">Account</Link>
                  </li>
                  <li>
                    <Link to="compare.html">Compare</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="fas fa-angle-down"></span>
                </div>
              </li>
              <li className="dropdown">
                <Link to="/">Pages</Link>
                <ul>
                  <li>
                    <Link to="about.html">About Us</Link>
                  </li>
                  <li>
                    <Link to="login.html">Log In</Link>
                  </li>
                  <li>
                    <Link to="signup.html">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="error.html">404</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="fas fa-angle-down"></span>
                </div>
              </li>
              <li className="dropdown">
                <Link to="/">Blog</Link>
                <ul>
                  <li>
                    <Link to="blog.html">Blog Grid</Link>
                  </li>
                  <li>
                    <Link to="blog-2.html">Blog Standard</Link>
                  </li>
                  <li>
                    <Link to="blog-details.html">Blog Details</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="fas fa-angle-down"></span>
                </div>
              </li>
              <li>
                <Link to="contact.html">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-info">
          <h4>Contact Info</h4>
          <ul>
            <li>Chicago 12, Melborne City, USA</li>
            <li>
              <Link to="tel:+8801682648101">+88 01682648101</Link>
            </li>
            <li>
              <Link to="mailto:info@example.com">info@example.com</Link>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <ul className="clearfix">
            <li>
              <Link to="/">
                <span className="fab fa-twitter"></span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="fab fa-facebook-square"></span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="fab fa-pinterest-p"></span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="fab fa-instagram"></span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="fab fa-youtube"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
