import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
  return (
    <div className="category-menu">
      <div className="menu-backdrop"></div>
      <div className="outer-box">
        <div className="upper-box">
          <div className="nav-logo">
            <Link to="/">
              <img src="/assets/images/logo-dark.png" alt="" title="" />
            </Link>
          </div>
          <div className="close-btn">
            <i className="icon-9"></i>
          </div>
        </div>
        <p>BROWSE CATEGORIES</p>
        <div className="category-box">
          <ul className="category-list clearfix">
            <li className="category-dropdown">
              <Link to="#">Phone and Tablets</Link>
              <ul>
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
            </li>
            <li className="category-dropdown">
              <Link to="#">Laptop & Desktop</Link>
              <ul>
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
            </li>
            <li className="category-dropdown">
              <Link to="#">Sound Equipment</Link>
              <ul>
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
            </li>
            <li>
              <Link to="/shop-details">Power & Accessories</Link>
            </li>
            <li>
              <Link to="/shop-details">Fitness & Wearable</Link>
            </li>
            <li className="category-dropdown">
              <Link to="#">Peripherals</Link>
              <ul>
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
            </li>
            <li className="category-dropdown">
              <Link to="#">Cover & Glass</Link>
              <ul>
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
            </li>
            <li className="category-dropdown">
              <Link to="#">Smart Electronics</Link>
              <ul>
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
            </li>
            <li>
              <Link to="/shop-details">Home Appliance</Link>
            </li>
            <li>
              <Link to="/shop-details">Drone & Camera</Link>
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
