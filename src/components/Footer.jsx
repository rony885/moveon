import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="large-container">
        <div className="widget-section">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget contact-widget mt_10">
                <div className="widget-content">
                  <div className="support-box">
                    <div className="icon-box">
                      <i className="icon-3"></i>
                    </div>
                    <Link to="tel:912345678">91 2345 678</Link>
                    <span>Call out Hotline 24/7</span>
                  </div>
                  <ul className="info mb_30 clearfix">
                    <li>57 heol isaf Station Road, Cardiff, UK</li>
                    <li>
                      <Link to="mailto:info@example.com">info@example.com</Link>
                    </li>
                  </ul>
                  <ul className="social-links">
                    <li>
                      <Link to="/">
                        <i className="icon-13"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-14"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-15"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="icon-16"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h4>Resources</h4>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/">Brands</Link>
                    </li>
                    <li>
                      <Link to="/">Mobile App</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h4>Support</h4>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li>
                      <Link to="/">Reviews</Link>
                    </li>
                    <li>
                      <Link to="contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/">Return Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Online Support</Link>
                    </li>
                    <li>
                      <Link to="/">Money Back</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h4>Store Info</h4>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li>
                      <Link to="/shop">Best Seller</Link>
                    </li>
                    <li>
                      <Link to="/shop">Top Sold Items</Link>
                    </li>
                    <li>
                      <Link to="/shop">New Arrivals</Link>
                    </li>
                    <li>
                      <Link to="/shop">Flash Sale</Link>
                    </li>
                    <li>
                      <Link to="/shop">Discount Products</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget subscribe-widget">
                <div className="widget-title">
                  <h4>Subscribe</h4>
                </div>
                <div className="widget-content">
                  <p>
                    Stay inform about upcoming events, webinars, and exciting
                    happenings.
                  </p>
                  <div className="form-inner">
                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required=""
                        />
                        <button type="submit">
                          <i className="icon-12"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="bottom-inner">
            <div className="copyright">
              <p>
                Copyright &copy; 2025 <Link to="/">Nexmart</Link>, Inc. All
                Rights Reserved
              </p>
            </div>
            <ul className="footer-card">
              <li>
                <Link to="/">
                  <img src="assets/images/resource/footer-card-1.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="assets/images/resource/footer-card-2.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="assets/images/resource/footer-card-3.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="assets/images/resource/footer-card-4.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="assets/images/resource/footer-card-5.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="assets/images/resource/footer-card-6.png" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
