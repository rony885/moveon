/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = () => {
  return (
    <>
      <header className="main-header">
        {/* <!-- header-upper --> */}
        <div className="header-upper">
          <div className="large-container">
            <div className="upper-inner">
              <figure className="logo-box">
                <a href="index-2.html">
                  <img src="assets/images/logo-light.png" alt="" />
                </a>
              </figure>
              <div className="search-area">
                <div className="category-inner">
                  <div className="select-box">
                    <select className="wide">
                      <option data-display="Select Category">
                        Select Category
                      </option>
                      <option value="1">Phone and Tablets</option>
                      <option value="2">Laptop & Desktop</option>
                      <option value="3">Sound Equipment</option>
                      <option value="4">Power & Accessories</option>
                      <option value="5">Fitness & Wearable</option>
                      <option value="6">Peripherals</option>
                      <option value="7">Cover & Glass</option>
                      <option value="8">Smart Electronics</option>
                      <option value="9">Home Appliance</option>
                      <option value="10">Drone & Camera</option>
                    </select>
                  </div>
                </div>
                <div className="search-box">
                  <form
                    method="post"
                    action="https://html.tonatheme.com/2025/nexmart/shop.html"
                  >
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
                  data-trigger-className="btn btn--subtle"
                >
                  <form
                    action="https://html.tonatheme.com/2025/nexmart/index-2.html"
                    className="language-picker__form"
                  >
                    <label for="language-picker-select">
                      Select your language
                    </label>

                    <select
                      name="language-picker-select"
                      id="language-picker-select"
                    >
                      <option lang="de" value="deutsch">
                        DE
                      </option>
                      <option lang="en" value="english" selected>
                        EN
                      </option>
                      <option lang="fr" value="francais">
                        FR
                      </option>
                      <option lang="it" value="italiano">
                        IT
                      </option>
                    </select>
                  </form>
                </div>
                <div className="support-box">
                  <div className="icon-box">
                    <i className="icon-3"></i>
                  </div>
                  <a href="tel:912345678">91 2345 678</a>
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
                    <a href="#">Phone and Tablets</a>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Apple</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Lenovo</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Microsoft</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Dell</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Gigabyte</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">5.5 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">6.0 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">6.5 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">7.0 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">7.5 inch</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Android</a>
                            </li>
                            <li>
                              <a href="shop-details.html">IOS</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Microsoft</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Java</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Touch Screen</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <a href="shop-details.html">Buy Gadgets</a>
                        </h2>
                        <h4>From $99.99</h4>
                        <a href="shop-details.html" className="link">
                          Shop now
                        </a>
                        <figure className="image r_0 b_10">
                          <img src="assets/images/shop/shop-1.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <a href="#">Laptop & Desktop</a>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Apple</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Lenovo</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Microsoft</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Dell</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Gigabyte</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">12 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">13 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">14 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">15 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">15 inch</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Gaming</a>
                            </li>
                            <li>
                              <a href="shop-details.html">MacBook</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Ultrabook</a>
                            </li>
                            <li>
                              <a href="shop-details.html">iMac</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Touch Screen</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <a href="shop-details.html">Buy the Laptop</a>
                        </h2>
                        <h4>From $399.99</h4>
                        <a href="shop-details.html" className="link">
                          Shop now
                        </a>
                        <figure className="image r_0 b_0">
                          <img src="assets/images/shop/shop-2.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <a href="#">Sound Equipment</a>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Jbl</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Microlab</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Sony</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Bose</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Yamaha</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">
                                10 normal breathing
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">
                                20 whispering at 5 feet
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">30 soft whisper</a>
                            </li>
                            <li>
                              <a href="shop-details.html">50 rainfall</a>
                            </li>
                            <li>
                              <a href="shop-details.html">120 thunder</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Airport sounds</a>
                            </li>
                            <li>
                              <a href="shop-details.html">
                                Amphibians and reptiles
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">Animal sounds</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Bell sounds</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Birdsong</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <a href="shop-details.html">Buy the Speaker</a>
                        </h2>
                        <h4>From $79.99</h4>
                        <a href="shop-details.html" className="link">
                          Shop now
                        </a>
                        <figure className="image r_15 b_10">
                          <img src="assets/images/shop/shop-3.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="shop-details.html">Power & Accessories</a>
                  </li>
                  <li>
                    <a href="shop-details.html">Fitness & Wearable</a>
                  </li>
                  <li className="category-dropdown">
                    <a href="#">Peripherals</a>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Razer</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Logitech</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Asus</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Apple</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Intel</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>peripherals</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Mouse</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Keyboard</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Monitor</a>
                            </li>
                            <li>
                              <a href="shop-details.html">RAM</a>
                            </li>
                            <li>
                              <a href="shop-details.html">DVD</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Mouse</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Keyboard</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Monitor</a>
                            </li>
                            <li>
                              <a href="shop-details.html">RAM</a>
                            </li>
                            <li>
                              <a href="shop-details.html">DVD</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <a href="shop-details.html">Buy peripherals</a>
                        </h2>
                        <h4>From $49.99</h4>
                        <a href="shop-details.html" className="link">
                          Shop now
                        </a>
                        <figure className="image r_20 b_30">
                          <img src="assets/images/shop/shop-4.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <a href="#">Cover & Glass</a>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Adensco</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Bally</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Brioni</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Coach</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Elasta</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">12 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">13 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">14 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">15 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">15 inch</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">
                                Clear Tempered Glass
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">
                                Anti-Glare Tempered Glass
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">
                                Privacy Tempered Glass
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">
                                Full-coverage Tempered Glass
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">
                                Colored Tempered Glass
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <a href="shop-details.html">Buy the Cover</a>
                        </h2>
                        <h4>From $29.99</h4>
                        <a href="shop-details.html" className="link">
                          Shop now
                        </a>
                        <figure className="image r_0 b_0">
                          <img src="assets/images/shop/shop-5.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <a href="#">Smart Electronics</a>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Samgung</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Sony</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Canon</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Hikvision</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Xiaomi</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">12 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">13 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">14 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">15 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">15 inch</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">smart lights</a>
                            </li>
                            <li>
                              <a href="shop-details.html">security camera</a>
                            </li>
                            <li>
                              <a href="shop-details.html">smart plug</a>
                            </li>
                            <li>
                              <a href="shop-details.html">video doorbell</a>
                            </li>
                            <li>
                              <a href="shop-details.html">smart display</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <a href="shop-details.html">Buy the Camera</a>
                        </h2>
                        <h4>From $199.99</h4>
                        <a href="shop-details.html" className="link">
                          Shop now
                        </a>
                        <figure className="image r_20 b_0">
                          <img src="assets/images/shop/shop-6.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="shop-details.html">Home Appliance</a>
                  </li>
                  <li>
                    <a href="shop-details.html">Drone & Camera</a>
                  </li>
                </ul>
              </div>
              <div className="menu-area">
                {/* <!--Mobile Navigation Toggler--> */}
                <div className="mobile-nav-toggler">
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
                        <a href="index-2.html">Home</a>
                        <ul>
                          <li>
                            <a href="index-2.html">Electronics</a>
                          </li>
                          <li>
                            <a href="index-3.html">Grocery</a>
                          </li>
                          <li>
                            <a href="index-4.html">Fish & Meat</a>
                          </li>
                          <li>
                            <a href="index-5.html">Vegetable</a>
                          </li>
                          <li>
                            <a href="index-6.html">Furniture</a>
                          </li>
                          <li>
                            <a href="index-7.html">Medical</a>
                          </li>
                          <li>
                            <a href="index-8.html">Kids</a>
                          </li>
                          <li>
                            <a href="index-9.html">Gardeing</a>
                          </li>
                          <li>
                            <a href="index-10.html">Watch</a>
                          </li>
                          <li>
                            <a href="index-11.html">Pet</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="index-2.html">Shop</a>
                        <ul>
                          <li>
                            <a href="shop.html">Shop Page 1</a>
                          </li>
                          <li>
                            <a href="shop-2.html">Shop Page 2</a>
                          </li>
                          <li>
                            <a href="shop-3.html">Shop Page 3</a>
                          </li>
                          <li>
                            <a href="shop-4.html">Shop Page 4</a>
                          </li>
                          <li>
                            <a href="shop-5.html">Shop Page 5</a>
                          </li>
                          <li>
                            <a href="shop-details.html">Shop Details 1</a>
                          </li>
                          <li>
                            <a href="shop-details-2.html">Shop Details 2</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="search.html">Search Result</a>
                          </li>
                          <li>
                            <a href="account.html">Account</a>
                          </li>
                          <li>
                            <a href="compare.html">Compare</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="index-2.html">Pages</a>
                        <ul>
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="login.html">Log In</a>
                          </li>
                          <li>
                            <a href="signup.html">Sign Up</a>
                          </li>
                          <li>
                            <a href="error.html">404</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="index-2.html">Blog</a>
                        <ul>
                          <li>
                            <a href="blog.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-2.html">Blog Standard</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
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
                      <option value="1">UAD</option>
                      <option value="2">RM</option>
                      <option value="3">GBP</option>
                    </select>
                  </div>
                </div>
                <ul className="info-list">
                  <li>
                    <a href="index-2.html">
                      <i className="icon-5"></i>
                    </a>
                  </li>
                  <li>
                    <a href="index-2.html">
                      <i className="icon-6"></i>
                    </a>
                  </li>
                  <li className="cart-box">
                    <a
                      className="shopping-cart shopping-cart-one"
                      href="#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="offcanvasRight"
                    >
                      <i className="icon-7"></i>
                      <span>2</span>
                    </a>
                    <div className="cart-menu cart-menu-one">
                      <div className="close-icon close-icon-one">
                        <a href="javascript:void(0);">
                          <i className="icon-9"></i>
                        </a>
                      </div>
                      <div className="cart-products">
                        <div className="product">
                          <figure className="image-box">
                            <a href="blog-details.html">
                              <img
                                src="assets/images/resource/cart-1.png"
                                alt=""
                              />
                            </a>
                          </figure>
                          <h5>
                            <a href="shop-details.html">
                              Sony Bluetooth Speaker Extra
                            </a>
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
                            <a href="blog-details.html">
                              <img
                                src="assets/images/resource/cart-2.png"
                                alt=""
                              />
                            </a>
                          </figure>
                          <h5>
                            <a href="shop-details.html">
                              Iphone 12 Red Color Veriant
                            </a>
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
                            <a href="blog-details.html">
                              <img
                                src="assets/images/resource/cart-3.png"
                                alt=""
                              />
                            </a>
                          </figure>
                          <h5>
                            <a href="shop-details.html">
                              Video Game Stick Lite 4K Console
                            </a>
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
                        <a href="cart.html" className="theme-btn btn-two">
                          View Cart <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                        <a href="checkout.html" className="theme-btn btn-one">
                          Checkout <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!--sticky Header--> */}
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
                    <a href="#">Phone and Tablets</a>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Apple</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Lenovo</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Microsoft</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Dell</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Gigabyte</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">5.5 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">6.0 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">6.5 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">7.0 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">7.5 inch</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Android</a>
                            </li>
                            <li>
                              <a href="shop-details.html">IOS</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Microsoft</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Java</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Touch Screen</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <a href="shop-details.html">Buy Gadgets</a>
                        </h2>
                        <h4>From $99.99</h4>
                        <a href="shop-details.html" className="link">
                          Shop now
                        </a>
                        <figure className="image r_0 b_10">
                          <img src="assets/images/shop/shop-1.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <a href="#">Laptop & Desktop</a>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Apple</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Lenovo</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Microsoft</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Dell</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Gigabyte</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">12 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">13 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">14 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">15 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">15 inch</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Gaming</a>
                            </li>
                            <li>
                              <a href="shop-details.html">MacBook</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Ultrabook</a>
                            </li>
                            <li>
                              <a href="shop-details.html">iMac</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Touch Screen</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <a href="shop-details.html">Buy the Laptop</a>
                        </h2>
                        <h4>From $399.99</h4>
                        <a href="shop-details.html" className="link">
                          Shop now
                        </a>
                        <figure className="image r_0 b_0">
                          <img src="assets/images/shop/shop-2.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <a href="#">Sound Equipment</a>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Jbl</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Microlab</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Sony</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Bose</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Yamaha</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">
                                10 normal breathing
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">
                                20 whispering at 5 feet
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">30 soft whisper</a>
                            </li>
                            <li>
                              <a href="shop-details.html">50 rainfall</a>
                            </li>
                            <li>
                              <a href="shop-details.html">120 thunder</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Airport sounds</a>
                            </li>
                            <li>
                              <a href="shop-details.html">
                                Amphibians and reptiles
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">Animal sounds</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Bell sounds</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Birdsong</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <a href="shop-details.html">Buy the Speaker</a>
                        </h2>
                        <h4>From $79.99</h4>
                        <a href="shop-details.html" className="link">
                          Shop now
                        </a>
                        <figure className="image r_15 b_10">
                          <img src="assets/images/shop/shop-3.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="shop-details.html">Power & Accessories</a>
                  </li>
                  <li>
                    <a href="shop-details.html">Fitness & Wearable</a>
                  </li>
                  <li className="category-dropdown">
                    <a href="#">Peripherals</a>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Razer</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Logitech</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Asus</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Apple</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Intel</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>peripherals</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Mouse</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Keyboard</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Monitor</a>
                            </li>
                            <li>
                              <a href="shop-details.html">RAM</a>
                            </li>
                            <li>
                              <a href="shop-details.html">DVD</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Mouse</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Keyboard</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Monitor</a>
                            </li>
                            <li>
                              <a href="shop-details.html">RAM</a>
                            </li>
                            <li>
                              <a href="shop-details.html">DVD</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <a href="shop-details.html">Buy peripherals</a>
                        </h2>
                        <h4>From $49.99</h4>
                        <a href="shop-details.html" className="link">
                          Shop now
                        </a>
                        <figure className="image r_20 b_30">
                          <img src="assets/images/shop/shop-4.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <a href="#">Cover & Glass</a>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Adensco</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Bally</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Brioni</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Coach</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Elasta</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">12 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">13 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">14 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">15 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">15 inch</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">
                                Clear Tempered Glass
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">
                                Anti-Glare Tempered Glass
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">
                                Privacy Tempered Glass
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">
                                Full-coverage Tempered Glass
                              </a>
                            </li>
                            <li>
                              <a href="shop-details.html">
                                Colored Tempered Glass
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <a href="shop-details.html">Buy the Cover</a>
                        </h2>
                        <h4>From $29.99</h4>
                        <a href="shop-details.html" className="link">
                          Shop now
                        </a>
                        <figure className="image r_0 b_0">
                          <img src="assets/images/shop/shop-5.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li className="category-dropdown">
                    <a href="#">Smart Electronics</a>
                    <div className="list-inner">
                      <div className="inner-box clearfix">
                        <div className="single-column">
                          <p>Brands</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">Samgung</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Sony</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Canon</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Hikvision</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Xiaomi</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Size</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">12 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">13 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">14 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">15 inch</a>
                            </li>
                            <li>
                              <a href="shop-details.html">15 inch</a>
                            </li>
                          </ul>
                        </div>
                        <div className="single-column">
                          <p>Category</p>
                          <ul>
                            <li>
                              <a href="shop-details.html">smart lights</a>
                            </li>
                            <li>
                              <a href="shop-details.html">security camera</a>
                            </li>
                            <li>
                              <a href="shop-details.html">smart plug</a>
                            </li>
                            <li>
                              <a href="shop-details.html">video doorbell</a>
                            </li>
                            <li>
                              <a href="shop-details.html">smart display</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop-block">
                        <span className="title">Only for this month</span>
                        <h2>
                          <a href="shop-details.html">Buy the Camera</a>
                        </h2>
                        <h4>From $199.99</h4>
                        <a href="shop-details.html" className="link">
                          Shop now
                        </a>
                        <figure className="image r_20 b_0">
                          <img src="assets/images/shop/shop-6.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="shop-details.html">Home Appliance</a>
                  </li>
                  <li>
                    <a href="shop-details.html">Drone & Camera</a>
                  </li>
                </ul>
              </div>
              <div className="menu-area">
                <nav className="main-menu clearfix">
                  {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                </nav>
              </div>
              <div className="menu-right-content">
                <div className="currency-box mr_40">
                  <div className="select-box">
                    <select className="wide">
                      <option data-display="USD">USD</option>
                      <option value="1">UAD</option>
                      <option value="2">RM</option>
                      <option value="3">GBP</option>
                    </select>
                  </div>
                </div>
                <ul className="info-list">
                  <li>
                    <a href="index-2.html">
                      <i className="icon-5"></i>
                    </a>
                  </li>
                  <li>
                    <a href="index-2.html">
                      <i className="icon-6"></i>
                    </a>
                  </li>
                  <li className="cart-box">
                    <a
                      className="shopping-cart shopping-cart-two"
                      href="#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="offcanvasRight"
                    >
                      <i className="icon-7"></i>
                      <span>2</span>
                    </a>
                    <div className="cart-menu cart-menu-two">
                      <div className="close-icon close-icon-two">
                        <a href="javascript:void(0);">
                          <i className="icon-9"></i>
                        </a>
                      </div>
                      <div className="cart-products">
                        <div className="product">
                          <figure className="image-box">
                            <a href="blog-details.html">
                              <img
                                src="assets/images/resource/cart-1.png"
                                alt=""
                              />
                            </a>
                          </figure>
                          <h5>
                            <a href="shop-details.html">
                              Sony Bluetooth Speaker Extra
                            </a>
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
                            <a href="blog-details.html">
                              <img
                                src="assets/images/resource/cart-2.png"
                                alt=""
                              />
                            </a>
                          </figure>
                          <h5>
                            <a href="shop-details.html">
                              Iphone 12 Red Color Veriant
                            </a>
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
                            <a href="blog-details.html">
                              <img
                                src="assets/images/resource/cart-3.png"
                                alt=""
                              />
                            </a>
                          </figure>
                          <h5>
                            <a href="shop-details.html">
                              Video Game Stick Lite 4K Console
                            </a>
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
                        <a href="cart.html" className="theme-btn btn-two">
                          View Cart <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                        <a href="checkout.html" className="theme-btn btn-one">
                          Checkout <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
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
