import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleMenu, menuOpen }) => {
  return (
    <>
      <header className="main-header">
        {/* <!-- header-upper --> */}
        <div className="header-upper">
          <div className="large-container">
            <div className="upper-inner">
              <figure className="logo-box">
                <Link to="/">
                  <img src="/assets/images/logo-light.png" alt="" />
                </Link>
              </figure>
              <div className="search-area">
                <div className="category-inner">
                  <div className="select-box">
                    <select className="wide">
                      <option data-display="Select Category">
                        Select Category
                      </option>
                      <option defaultValue="1">Phone and Tablets</option>
                      <option defaultValue="2">Laptop & Desktop</option>
                      <option defaultValue="3">Sound Equipment</option>
                      <option defaultValue="4">Power & Accessories</option>
                      <option defaultValue="5">Fitness & Wearable</option>
                      <option defaultValue="6">Peripherals</option>
                      <option defaultValue="7">Cover & Glass</option>
                      <option defaultValue="8">Smart Electronics</option>
                      <option defaultValue="9">Home Appliance</option>
                      <option defaultValue="10">Drone & Camera</option>
                    </select>
                  </div>
                </div>
                <div className="search-box">
                  <form>
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        placeholder="Search Products"
                        required
                      />
                      <button type="submit">
                        <i className="icon-2"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="right-column">
                <div
                  className="language-picker js-language-picker mr_40"
                  data-trigger-classname="btn btn--subtle"
                >
                  <form className="language-picker__form">
                    <label htmlFor="language-picker-select">
                      Select your language
                    </label>

                    <select
                      name="language-picker-select"
                      id="language-picker-select"
                      defaultValue="en"
                    >
                      <option value="de" lang="de">
                        DE
                      </option>
                      <option value="en" lang="en">
                        EN
                      </option>
                      <option value="fr" lang="fr">
                        FR
                      </option>
                      <option value="it" lang="it">
                        IT
                      </option>
                    </select>
                  </form>
                </div>

                <div className="support-box">
                  <div className="icon-box">
                    <i className="icon-3"></i>
                  </div>
                  <Link to="tel:912345678">91 2345 678</Link>
                  <p>Call out Hotline 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-lower --> */}
        <div className="header-lower">
          <div className="large-container">
            <div className="outer-box">
              <div className="category-box">
                <div className="text">
                  <i className="fas fa-bars"></i>
                  <span>All Categories</span>
                </div>
                <ul className="category-list clearfix">
                  <li className="category-dropdown">
                    <Link to="#">Phone and Tablets</Link>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Apple</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Lenovo</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Microsoft</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Dell</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Gigabyte</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">5.5 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">6.0 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">6.5 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">7.0 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">7.5 inch</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
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
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <Link to="/shop-details">Buy Gadgets</Link>
                        </h2>
                        <h4>From $99.99</h4>
                        <Link to="/shop-details" className="link">
                          Shop now
                        </Link>
                        <figure className="image r_0 b_10">
                          <img src="assets/images/shop/shop-1.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <Link to="#">Laptop & Desktop</Link>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Apple</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Lenovo</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Microsoft</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Dell</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Gigabyte</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">12 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">13 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">14 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">15 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">15 inch</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
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
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <Link to="/shop-details">Buy the Laptop</Link>
                        </h2>
                        <h4>From $399.99</h4>
                        <Link to="/shop-details" className="link">
                          Shop now
                        </Link>
                        <figure className="image r_0 b_0">
                          <img src="assets/images/shop/shop-2.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <Link to="#">Sound Equipment</Link>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Jbl</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Microlab</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Sony</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Bose</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Yamaha</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">
                                10 normal breathing
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop-details">
                                20 whispering at 5 feet
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop-details">30 soft whisper</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">50 rainfall</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">120 thunder</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Airport sounds</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">
                                Amphibians and reptiles
                              </Link>
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
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <Link to="/shop-details">Buy the Speaker</Link>
                        </h2>
                        <h4>From $79.99</h4>
                        <Link to="/shop-details" className="link">
                          Shop now
                        </Link>
                        <figure className="image r_15 b_10">
                          <img src="assets/images/shop/shop-3.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/shop-details">Power & Accessories</Link>
                  </li>
                  <li>
                    <Link to="/shop-details">Fitness & Wearable</Link>
                  </li>
                  <li className="category-dropdown">
                    <Link to="#">Peripherals</Link>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Razer</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Logitech</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Asus</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Apple</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Intel</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>peripherals</p>
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
                        </div>
                        <div className="single-column">
                          <p>Category</p>
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
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <Link to="/shop-details">Buy peripherals</Link>
                        </h2>
                        <h4>From $49.99</h4>
                        <Link to="/shop-details" className="link">
                          Shop now
                        </Link>
                        <figure className="image r_20 b_30">
                          <img src="assets/images/shop/shop-4.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <Link to="#">Cover & Glass</Link>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Adensco</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Bally</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Brioni</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Coach</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Elasta</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">12 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">13 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">14 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">15 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">15 inch</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">
                                Clear Tempered Glass
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop-details">
                                Anti-Glare Tempered Glass
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop-details">
                                Privacy Tempered Glass
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop-details">
                                Full-coverage Tempered Glass
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop-details">
                                Colored Tempered Glass
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <Link to="/shop-details">Buy the Cover</Link>
                        </h2>
                        <h4>From $29.99</h4>
                        <Link to="/shop-details" className="link">
                          Shop now
                        </Link>
                        <figure className="image r_0 b_0">
                          <img src="assets/images/shop/shop-5.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <Link to="#">Smart Electronics</Link>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Samgung</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Sony</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Canon</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Hikvision</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Xiaomi</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">12 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">13 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">14 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">15 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">15 inch</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
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
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <Link to="/shop-details">Buy the Camera</Link>
                        </h2>
                        <h4>From $199.99</h4>
                        <Link to="/shop-details" className="link">
                          Shop now
                        </Link>
                        <figure className="image r_20 b_0">
                          <img src="assets/images/shop/shop-6.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/shop-details">Home Appliance</Link>
                  </li>
                  <li>
                    <Link to="/shop-details">Drone & Camera</Link>
                  </li>
                </ul>
              </div>
              <div className="menu-area">
                {/* <!--Mobile Navigation Toggler--> */}
                <div className="mobile-nav-toggler" onClick={toggleMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
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
                            <Link to="index-4.html">Fish & Meat</Link>
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
                            <Link to="/shop-details">Shop Details 1</Link>
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
                      </li>
                      <li>
                        <Link to="contact.html">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-right-content">
                <div className="currency-box mr_40">
                  <div className="select-box">
                    <select className="wide">
                      <option data-display="USD">USD</option>
                      <option defaultValue="1">UAD</option>
                      <option defaultValue="2">RM</option>
                      <option defaultValue="3">GBP</option>
                    </select>
                  </div>
                </div>
                <ul className="info-list">
                  <li>
                    <Link to="/">
                      <i className="icon-5"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="icon-6"></i>
                    </Link>
                  </li>
                  <li className="cart-box">
                    <Link
                      className="shopping-cart shopping-cart-one"
                      to="#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="offcanvasRight"
                    >
                      <i className="icon-7"></i>
                      <span>2</span>
                    </Link>
                    <div className="cart-menu cart-menu-one">
                      <div className="close-icon close-icon-one">
                        <Link to="#">
                          <i className="icon-9"></i>
                        </Link>
                      </div>
                      <div className="cart-products">
                        <div className="product">
                          <figure className="image-box">
                            <Link to="blog-details.html">
                              <img
                                src="assets/images/resource/cart-1.png"
                                alt=""
                              />
                            </Link>
                          </figure>
                          <h5>
                            <Link to="/shop-details">
                              Sony Bluetooth Speaker Extra
                            </Link>
                          </h5>
                          <span>
                            $66.99 <span className="quentity">x 1</span>
                          </span>
                          <button type="button" className="remove-btn">
                            <i className="icon-9"></i>
                          </button>
                        </div>
                        <div className="product">
                          <figure className="image-box">
                            <Link to="blog-details.html">
                              <img
                                src="assets/images/resource/cart-2.png"
                                alt=""
                              />
                            </Link>
                          </figure>
                          <h5>
                            <Link to="/shop-details">
                              Iphone 12 Red Color Veriant
                            </Link>
                          </h5>
                          <span>
                            $999.99 <span className="quentity">x 1</span>
                          </span>
                          <button type="button" className="remove-btn">
                            <i className="icon-9"></i>
                          </button>
                        </div>
                        <div className="product">
                          <figure className="image-box">
                            <Link to="blog-details.html">
                              <img
                                src="assets/images/resource/cart-3.png"
                                alt=""
                              />
                            </Link>
                          </figure>
                          <h5>
                            <Link to="/shop-details">
                              Video Game Stick Lite 4K Console
                            </Link>
                          </h5>
                          <span>
                            $36.99 <span className="quentity">x 1</span>
                          </span>
                          <button type="button" className="remove-btn">
                            <i className="icon-9"></i>
                          </button>
                        </div>
                      </div>
                      <div className="cart-total">
                        <span>Subtotal</span>
                        <span className="cart-total-price">$1103.97</span>
                      </div>
                      <div className="cart-action">
                        <Link to="cart.html" className="theme-btn btn-two">
                          View Cart <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </Link>
                        <Link to="checkout.html" className="theme-btn btn-one">
                          Checkout <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="category-box">
                <div className="text">
                  <i className="fas fa-bars"></i>
                  <span>All Categories</span>
                </div>
                <ul className="category-list clearfix">
                  <li className="category-dropdown">
                    <Link to="#">Phone and Tablets</Link>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Apple</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Lenovo</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Microsoft</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Dell</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Gigabyte</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">5.5 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">6.0 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">6.5 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">7.0 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">7.5 inch</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
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
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <Link to="/shop-details">Buy Gadgets</Link>
                        </h2>
                        <h4>From $99.99</h4>
                        <Link to="/shop-details" className="link">
                          Shop now
                        </Link>
                        <figure className="image r_0 b_10">
                          <img src="assets/images/shop/shop-1.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <Link to="#">Laptop &amp; Desktop</Link>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Apple</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Lenovo</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Microsoft</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Dell</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Gigabyte</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">12 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">13 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">14 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">15 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">15 inch</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
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
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <Link to="/shop-details">Buy the Laptop</Link>
                        </h2>
                        <h4>From $399.99</h4>
                        <Link to="/shop-details" className="link">
                          Shop now
                        </Link>
                        <figure className="image r_0 b_0">
                          <img src="assets/images/shop/shop-2.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <Link to="#">Sound Equipment</Link>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Jbl</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Microlab</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Sony</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Bose</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Yamaha</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">
                                10 normal breathing
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop-details">
                                20 whispering at 5 feet
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop-details">30 soft whisper</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">50 rainfall</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">120 thunder</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Airport sounds</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">
                                Amphibians and reptiles
                              </Link>
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
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <Link to="/shop-details">Buy the Speaker</Link>
                        </h2>
                        <h4>From $79.99</h4>
                        <Link to="/shop-details" className="link">
                          Shop now
                        </Link>
                        <figure className="image r_15 b_10">
                          <img src="assets/images/shop/shop-3.png" alt="" />
                        </figure>
                      </div>
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
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Razer</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Logitech</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Asus</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Apple</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Intel</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>peripherals</p>
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
                        </div>
                        <div className="single-column">
                          <p>Category</p>
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
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <Link to="/shop-details">Buy peripherals</Link>
                        </h2>
                        <h4>From $49.99</h4>
                        <Link to="/shop-details" className="link">
                          Shop now
                        </Link>
                        <figure className="image r_20 b_30">
                          <img src="assets/images/shop/shop-4.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <Link to="#">Cover &amp; Glass</Link>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Adensco</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Bally</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Brioni</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Coach</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Elasta</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">12 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">13 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">14 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">15 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">15 inch</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">
                                Clear Tempered Glass
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop-details">
                                Anti-Glare Tempered Glass
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop-details">
                                Privacy Tempered Glass
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop-details">
                                Full-coverage Tempered Glass
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop-details">
                                Colored Tempered Glass
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <Link to="/shop-details">Buy the Cover</Link>
                        </h2>
                        <h4>From $29.99</h4>
                        <Link to="/shop-details" className="link">
                          Shop now
                        </Link>
                        <figure className="image r_0 b_0">
                          <img src="assets/images/shop/shop-5.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <Link to="#">Smart Electronics</Link>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">Samgung</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Sony</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Canon</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Hikvision</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">Xiaomi</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <Link to="/shop-details">12 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">13 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">14 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">15 inch</Link>
                            </li>
                            <li>
                              <Link to="/shop-details">15 inch</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
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
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <Link to="/shop-details">Buy the Camera</Link>
                        </h2>
                        <h4>From $199.99</h4>
                        <Link to="/shop-details" className="link">
                          Shop now
                        </Link>
                        <figure className="image r_20 b_0">
                          <img src="assets/images/shop/shop-6.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/shop-details">Home Appliance</Link>
                  </li>
                  <li>
                    <Link to="/shop-details">Drone &amp; Camera</Link>
                  </li>
                </ul>
              </div>
              <div className="menu-area">
                <nav className="main-menu clearfix">
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
                            <Link to="/shop-details">Shop Details 1</Link>
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
                </nav>
              </div>
              <div className="menu-right-content">
                <div className="currency-box mr_40">
                  <div className="select-box">
                    <select className="wide" style={{ display: "none" }}>
                      <option data-display="USD">USD</option>
                      <option defaultValue="1">UAD</option>
                      <option defaultValue="2">RM</option>
                      <option defaultValue="3">GBP</option>
                    </select>
                    <div className="nice-select wide" tabIndex="0">
                      <span className="current">USD</span>
                      <ul className="list">
                        <li
                          data-defaultvalue="USD"
                          data-display="USD"
                          className="option selected"
                        >
                          USD
                        </li>
                        <li data-defaultvalue="1" className="option">
                          UAD
                        </li>
                        <li data-defaultvalue="2" className="option">
                          RM
                        </li>
                        <li data-defaultvalue="3" className="option">
                          GBP
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ul className="info-list">
                  <li>
                    <Link to="/">
                      <i className="icon-5"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="icon-6"></i>
                    </Link>
                  </li>
                  <li className="cart-box">
                    <Link
                      className="shopping-cart shopping-cart-two"
                      to="#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="offcanvasRight"
                    >
                      <i className="icon-7"></i>
                      <span>2</span>
                    </Link>
                    <div className="cart-menu cart-menu-two">
                      <div className="close-icon close-icon-two">
                        <Link to="#">
                          <i className="icon-9"></i>
                        </Link>
                      </div>
                      <div className="cart-products">
                        <div className="product">
                          <figure className="image-box">
                            <Link to="blog-details.html">
                              <img
                                src="assets/images/resource/cart-1.png"
                                alt=""
                              />
                            </Link>
                          </figure>
                          <h5>
                            <Link to="/shop-details">
                              Sony Bluetooth Speaker Extra
                            </Link>
                          </h5>
                          <span>
                            $66.99 <span className="quentity">x 1</span>
                          </span>
                          <button type="button" className="remove-btn">
                            <i className="icon-9"></i>
                          </button>
                        </div>
                        <div className="product">
                          <figure className="image-box">
                            <Link to="blog-details.html">
                              <img
                                src="assets/images/resource/cart-2.png"
                                alt=""
                              />
                            </Link>
                          </figure>
                          <h5>
                            <Link to="/shop-details">
                              Iphone 12 Red Color Veriant
                            </Link>
                          </h5>
                          <span>
                            $999.99 <span className="quentity">x 1</span>
                          </span>
                          <button type="button" className="remove-btn">
                            <i className="icon-9"></i>
                          </button>
                        </div>
                        <div className="product">
                          <figure className="image-box">
                            <Link to="blog-details.html">
                              <img
                                src="assets/images/resource/cart-3.png"
                                alt=""
                              />
                            </Link>
                          </figure>
                          <h5>
                            <Link to="/shop-details">
                              Video Game Stick Lite 4K Console
                            </Link>
                          </h5>
                          <span>
                            $36.99 <span className="quentity">x 1</span>
                          </span>
                          <button type="button" className="remove-btn">
                            <i className="icon-9"></i>
                          </button>
                        </div>
                      </div>
                      <div className="cart-total">
                        <span>Subtotal</span>
                        <span className="cart-total-price">$1103.97</span>
                      </div>
                      <div className="cart-action">
                        <Link to="cart.html" className="theme-btn btn-two">
                          View Cart <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </Link>
                        <Link to="checkout.html" className="theme-btn btn-one">
                          Checkout <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
