import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryMenu = ({ categoryOpen, closeCategory }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`category-menu ${categoryOpen ? "active" : ""}`}>
      <div className="menu-backdrop" onClick={closeCategory}></div>
      <div className="outer-box">
        <div className="upper-box">
          <div className="nav-logo">
            <Link to="/">
              <img src="/assets/images/logo-dark.png" alt="" title="" />
            </Link>
          </div>
          <div className="close-btn" onClick={closeCategory}>
            <i className="icon-9"></i>
          </div>
        </div>
        <p>BROWSE CATEGORIES</p>
        <div className="category-box">
          <ul className="category-list clearfix">
            <li className="category-dropdown">
              <Link to="#">Phone and Tablets</Link>

              <ul style={{ display: openIndex === 0 ? "block" : "none" }}>
                <li>
                  <Link to="/shop-details">Android</Link>
                </li>
                <li>
                  <Link to="/shop-details">IOS</Link>
                </li>
                <li>
                  <Link to="/shop-details">Microsoft</Link>
                </li>
                <li>
                  <Link to="/shop-details">Java</Link>
                </li>
                <li>
                  <Link to="/shop-details">Touch Screen</Link>
                </li>
              </ul>
              <div
                className={`dropdown-btn ${openIndex === 0 ? "open" : ""}`}
                onClick={() => handleToggle(0)}
              >
                <span className="icon-1"></span>
              </div>
            </li>
            <li className="category-dropdown">
              <Link to="#">Laptop &amp; Desktop</Link>
              <ul style={{ display: openIndex === 1 ? "block" : "none" }}>
                <li>
                  <Link to="/shop-details">Gaming</Link>
                </li>
                <li>
                  <Link to="/shop-details">MacBook</Link>
                </li>
                <li>
                  <Link to="/shop-details">Ultrabook</Link>
                </li>
                <li>
                  <Link to="/shop-details">iMac</Link>
                </li>
                <li>
                  <Link to="/shop-details">Touch Screen</Link>
                </li>
              </ul>
              <div
                className={`dropdown-btn ${openIndex === 1 ? "open" : ""}`}
                onClick={() => handleToggle(1)}
              >
                <span className="icon-1"></span>
              </div>
            </li>
            <li className="category-dropdown">
              <Link to="#">Sound Equipment</Link>
              <ul style={{ display: openIndex === 2 ? "block" : "none" }}>
                <li>
                  <Link to="/shop-details">Airport sounds</Link>
                </li>
                <li>
                  <Link to="/shop-details">Amphibians and reptiles</Link>
                </li>
                <li>
                  <Link to="/shop-details">Animal sounds</Link>
                </li>
                <li>
                  <Link to="/shop-details">Bell sounds</Link>
                </li>
                <li>
                  <Link to="/shop-details">Birdsong</Link>
                </li>
              </ul>
              <div
                className={`dropdown-btn ${openIndex === 2 ? "open" : ""}`}
                onClick={() => handleToggle(2)}
              >
                <span className="icon-1"></span>
              </div>
            </li>
            <li>
              <Link to="/shop-details">Power &amp; Accessories</Link>
            </li>
            <li>
              <Link to="/shop-details">Fitness &amp; Wearable</Link>
            </li>
            <li className="category-dropdown">
              <Link to="#">Peripherals</Link>
              <ul style={{ display: openIndex === 3 ? "block" : "none" }}>
                <li>
                  <Link to="/shop-details">Mouse</Link>
                </li>
                <li>
                  <Link to="/shop-details">Keyboard</Link>
                </li>
                <li>
                  <Link to="/shop-details">Monitor</Link>
                </li>
                <li>
                  <Link to="/shop-details">RAM</Link>
                </li>
                <li>
                  <Link to="/shop-details">DVD</Link>
                </li>
              </ul>
              <div
                className={`dropdown-btn ${openIndex === 3 ? "open" : ""}`}
                onClick={() => handleToggle(3)}
              >
                <span className="icon-1"></span>
              </div>
            </li>
            <li className="category-dropdown">
              <Link to="#">Cover &amp; Glass</Link>
              <ul style={{ display: openIndex === 4 ? "block" : "none" }}>
                <li>
                  <Link to="/shop-details">Clear Tempered Glass</Link>
                </li>
                <li>
                  <Link to="/shop-details">Anti-Glare Tempered Glass</Link>
                </li>
                <li>
                  <Link to="/shop-details">Privacy Tempered Glass</Link>
                </li>
                <li>
                  <Link to="/shop-details">Full-coverage Tempered Glass</Link>
                </li>
                <li>
                  <Link to="/shop-details">Colored Tempered Glass</Link>
                </li>
              </ul>
              <div
                className={`dropdown-btn ${openIndex === 4 ? "open" : ""}`}
                onClick={() => handleToggle(4)}
              >
                <span className="icon-1"></span>
              </div>
            </li>
            <li className="category-dropdown">
              <Link to="#">Smart Electronics</Link>
              <ul style={{ display: openIndex === 5 ? "block" : "none" }}>
                <li>
                  <Link to="/shop-details">smart lights</Link>
                </li>
                <li>
                  <Link to="/shop-details">security camera</Link>
                </li>
                <li>
                  <Link to="/shop-details">smart plug</Link>
                </li>
                <li>
                  <Link to="/shop-details">video doorbell</Link>
                </li>
                <li>
                  <Link to="/shop-details">smart display</Link>
                </li>
              </ul>
              <div
                className={`dropdown-btn ${openIndex === 5 ? "open" : ""}`}
                onClick={() => handleToggle(5)}
              >
                <span className="icon-1"></span>
              </div>
            </li>
            <li>
              <Link to="/shop-details">Home Appliance</Link>
            </li>
            <li>
              <Link to="/shop-details">Drone &amp; Camera</Link>
            </li>
          </ul>
          <ul className="category-list clearfix">
            <li>
              <Link to="/">
                New Products <span>New</span>
              </Link>
            </li>
            <li>
              <Link to="/">Discounted Goods</Link>
            </li>
            <li>
              <Link to="/">
                Best Selling Products <span>For You</span>
              </Link>
            </li>
          </ul>
        </div>
        <p>BLONWE HELPS</p>
        <ul className="category-list pb_30 clearfix">
          <li>
            <Link to="/">Wishlist</Link>
          </li>
          <li>
            <Link to="/">Compare</Link>
          </li>
          <li>
            <Link to="/account">My account</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
