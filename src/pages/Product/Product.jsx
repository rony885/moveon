

import React, { useState } from "react";
import { Link } from "react-router-dom";
import HighlightsSection from "../../components/HighlightsSection";

const products = [
  {
    id: 1,
    category: "Mobile",
    title: "Iphone 12 Red Color Veriant",
    image: "assets/images/shop/shop-10.png",
    price: 92.99,
    oldPrice: 83.99,
    discount: "-6%",
    rating: 5,
    reviews: 5,
    stock: "in",
    badge: "discount",
  },
  {
    id: 2,
    category: "Storage",
    title: "32GB Camera CCTV Micro SD Card",
    image: "assets/images/shop/shop-12.png",
    price: 12.99,
    rating: 5,
    reviews: 5,
    stock: "out",
  },
  {
    id: 3,
    category: "Music",
    title: "Sony Bluetooth-compatible Speaker",
    image: "assets/images/shop/shop-13.png",
    price: 45.99,
    rating: 5,
    reviews: 2,
    stock: "in",
    badge: "hot",
  },
  {
    id: 4,
    category: "Music",
    title: "JBL Speaker with Built-in Battery",
    image: "assets/images/shop/shop-14.png",
    price: 59.99,
    rating: 5,
    reviews: 5,
    stock: "in",
  },
  {
    id: 5,
    category: "Power",
    title: "Boss Inverter Welding Machine",
    image: "assets/images/shop/shop-15.png",
    price: 359.99,
    rating: 5,
    reviews: 4,
    stock: "in",
  },
  {
    id: 6,
    category: "Video",
    title: "Vintage 1970s Sony AVC-1420 Video",
    image: "assets/images/shop/shop-26.png",
    price: 149.99,
    rating: 5,
    reviews: 4,
    stock: "in",
    badge: "discount",
    discount: "-6%",
  },
  {
    id: 7,
    category: "Device",
    title: "Box Shinecon 3D Glass with Remote",
    image: "assets/images/shop/shop-27.png",
    price: 78.99,
    rating: 5,
    reviews: 4.8,
    stock: "out",
  },
  {
    id: 8,
    category: "Accessories",
    title: "Super Slim Wireless Mouse",
    image: "assets/images/shop/shop-28.png",
    price: 15.99,
    rating: 5,
    reviews: 5,
    stock: "in",
    badge: "hot",
  },
  {
    id: 9,
    category: "Mobile Parts",
    title: "Samsung 15W Fast Magnetic Charger",
    image: "assets/images/shop/shop-29.png",
    price: 12.99,
    rating: 5,
    reviews: 4.9,
    stock: "in",
  },
  {
    id: 10,
    category: "Gaming",
    title: "Boss Inverter Welding Machine",
    image: "assets/images/shop/shop-30.png",
    price: 27.99,
    rating: 5,
    reviews: 5,
    stock: "in",
    badge: "hot",
  },
];

const Product = () => {
  const [view, setView] = useState("grid"); // grid | list

  return (
    <>
      <section className="page-title pt_20 pb_18">
        <div className="large-container">
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Shop</li>
          </ul>
        </div>
      </section>

      <section className="shop-page-section pb_80">
        <div className="large-container">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
              <div className="shop-sidebar">
                <div className="search-widget sidebar-widget pb_40 mb_30">
                  <form>
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        placeholder="iPhone 14 pro"
                        required
                      />
                      <button type="submit">
                        <i className="icon-2"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="filter-widget sidebar-widget pb_40 mb_30">
                  <div className="widget-title mb_30">
                    <h4>Filter by Price</h4>
                  </div>
                  <div className="price-range-slider">
                    <div id="slider-range" className="range-bar mb_30"></div>
                    <div className="range-box">
                      <p className="range-value">
                        <span>Price:</span>
                        <input type="text" id="amount" readonly />
                      </p>
                      <button type="button" className="theme-btn filter-btn">
                        Filter<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="brand-widget sidebar-widget pb_40 mb_30">
                  <div className="widget-title mb_30">
                    <h4>Select Brand</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="category-list clearfix">
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox1"
                          />
                          <label for="checkbox1">LG</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox2"
                          />
                          <label for="checkbox2">Sony</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox3"
                          />
                          <label for="checkbox3">Apple</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="category-widget sidebar-widget pb_40 mb_30">
                  <div className="widget-title mb_30">
                    <h3>Product Categories</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="accordion-box">
                      <li className="accordion block active-block">
                        <div className="acc-btn active">
                          <div className="icon-box"></div>
                          Laptop
                        </div>
                        <div className="acc-content current">
                          <ul className="category-list clearfix">
                            <li>
                              <div className="check-box">
                                <input
                                  className="check"
                                  type="checkbox"
                                  id="checkbox10"
                                />
                                <label for="checkbox10">MackBook Pro</label>
                              </div>
                            </li>
                            <li>
                              <div className="check-box">
                                <input
                                  className="check"
                                  type="checkbox"
                                  id="checkbox11"
                                />
                                <label for="checkbox11">MacBook Air</label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-box"></div>
                          Phone
                        </div>
                        <div className="acc-content">
                          <ul className="category-list clearfix">
                            <li>
                              <div className="check-box">
                                <input
                                  className="check"
                                  type="checkbox"
                                  id="checkbox13"
                                />
                                <label for="checkbox13">Apple</label>
                              </div>
                            </li>
                            <li>
                              <div className="check-box">
                                <input
                                  className="check"
                                  type="checkbox"
                                  id="checkbox14"
                                />
                                <label for="checkbox14">Samsung</label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className="acc-btn">
                          <div className="icon-box"></div>
                          Tablet
                        </div>
                        <div className="acc-content">
                          <ul className="category-list clearfix">
                            <li>
                              <div className="check-box">
                                <input
                                  className="check"
                                  type="checkbox"
                                  id="checkbox16"
                                />
                                <label for="checkbox16">Apple</label>
                              </div>
                            </li>
                            <li>
                              <div className="check-box">
                                <input
                                  className="check"
                                  type="checkbox"
                                  id="checkbox17"
                                />
                                <label for="checkbox17">Samsung</label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <ul className="category-list clearfix">
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox19"
                          />
                          <label for="checkbox19">Camera</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox20"
                          />
                          <label for="checkbox20">Mobile</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox21"
                          />
                          <label for="checkbox21">Tv</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="status-widget sidebar-widget pb_40 mb_30">
                  <div className="widget-title mb_30">
                    <h4>Product Status</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="category-list clearfix">
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox31"
                          />
                          <label for="checkbox31">In Stock</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox32"
                          />
                          <label for="checkbox32">On Sale</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox33"
                          />
                          <label for="checkbox33">Upcoming</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox34"
                          />
                          <label for="checkbox34">Out of Stock</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="size-widget sidebar-widget pb_40 mb_30">
                  <div className="widget-title mb_30">
                    <h4>Screen by Size</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="size-list clearfix">
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox35"
                          />
                          <label for="checkbox35">14”</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox36"
                          />
                          <label for="checkbox36">16”</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox37"
                          />
                          <label for="checkbox37">18”</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox38"
                          />
                          <label for="checkbox38">21”</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox39"
                          />
                          <label for="checkbox39">24”</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox40"
                          />
                          <label for="checkbox40">27”</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox41"
                          />
                          <label for="checkbox41">30”</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox42"
                          />
                          <label for="checkbox42">32”</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox43"
                          />
                          <label for="checkbox43">40”+</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="color-widget sidebar-widget pb_40 mb_30">
                  <div className="widget-title mb_20">
                    <h4>Filter by Color</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="color-list clearfix">
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox44"
                          />
                          <label for="checkbox44"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox45"
                          />
                          <label for="checkbox45"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox46"
                          />
                          <label for="checkbox46"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox47"
                          />
                          <label for="checkbox47"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox48"
                          />
                          <label for="checkbox48"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox49"
                          />
                          <label for="checkbox49"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox50"
                          />
                          <label for="checkbox50"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox51"
                          />
                          <label for="checkbox51"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox52"
                          />
                          <label for="checkbox52"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox53"
                          />
                          <label for="checkbox53"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox54"
                          />
                          <label for="checkbox54"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox55"
                          />
                          <label for="checkbox55"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox56"
                          />
                          <label for="checkbox56"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox57"
                          />
                          <label for="checkbox57"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox58"
                          />
                          <label for="checkbox58"></label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox59"
                          />
                          <label for="checkbox59"></label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="review-widget sidebar-widget">
                  <div className="widget-title mb_20">
                    <h3>Reviews</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="category-list clearfix">
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox60"
                          />
                          <label for="checkbox60">
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox61"
                          />
                          <label for="checkbox61">
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11 light"></i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox62"
                          />
                          <label for="checkbox62">
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11 light"></i>
                            <i className="icon-11 light"></i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox63"
                          />
                          <label for="checkbox63">
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11 light"></i>
                            <i className="icon-11 light"></i>
                            <i className="icon-11 light"></i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox64"
                          />
                          <label for="checkbox64">
                            <i className="icon-11"></i>
                            <i className="icon-11 light"></i>
                            <i className="icon-11 light"></i>
                            <i className="icon-11 light"></i>
                            <i className="icon-11 light"></i>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="our-shop">
                <div className="item-shorting">
                  <div className="left-column">
                    <div className="text">
                      <p>
                        Showing <span>1–30</span> of <span>160</span> results
                      </p>
                    </div>
                  </div>
                  <div className="right-column">
                    <div className="short-box mr_30">
                      <p>Sort:</p>
                      <div className="select-box">
                        <select className="wide">
                          <option data-display="Most popular">
                            Most popular
                          </option>
                          <option value="1">New</option>
                          <option value="2">Top Sell</option>
                          <option value="4">Top Ratted</option>
                        </select>
                      </div>
                    </div>
                    <div className="menu-box">
                      <p>Show:</p>
                      <button
                        className={`grid-view mr_10 ${
                          view === "grid" ? "on" : ""
                        }`}
                        onClick={() => setView("grid")}
                      >
                        <img
                          src="/assets/images/icons/icon-4.png"
                          alt="Grid View"
                        />
                      </button>

                      <button
                        className={`list-view ${view === "list" ? "on" : ""}`}
                        onClick={() => setView("list")}
                      >
                        <img
                          src="/assets/images/icons/icon-5.png"
                          alt="List View"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`wrapper ${view}`}>
                  {view === "grid" && (
                    <div className="shop-grid-content">
                      <div className="inner-container clearfix">
                        {products.map((item) => (
                          <div className="shop-block-two" key={item.id}>
                            <div className="inner-box">
                              <div className="image-box">
                                {item.badge === "hot" && (
                                  <span className="hot-product p_absolute l_0 t_7">
                                    Hot
                                  </span>
                                )}

                                {item.badge === "discount" && (
                                  <span className="discount-product p_absolute l_0 t_7">
                                    {item.discount}
                                  </span>
                                )}
                                <ul className="option-list">
                                  <li>
                                    <Link
                                      to="/assets/images/shop/shop-10.png"
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                    >
                                      <i className="far fa-eye"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/shop-details">
                                      <i className="icon-5"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <button type="button">
                                      <i className="icon-6"></i>
                                    </button>
                                  </li>
                                </ul>
                                <figure className="image">
                                  <img src={item.image} alt={item.title} />
                                </figure>
                              </div>

                              <div className="lower-content">
                                <span className="text">{item.category}</span>
                                <h4>
                                  <Link to="/shop-details">{item.title}</Link>
                                </h4>
                                <h5>
                                  ${item.price}
                                  {item.oldPrice && <del>${item.oldPrice}</del>}
                                </h5>
                                <ul className="rating">
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
                                    <span>(5)</span>
                                  </li>
                                </ul>
                                {item.stock === "in" ? (
                                  <span className="product-stock">
                                    <img
                                      src="/assets/images/icons/icon-1.png"
                                      alt=""
                                    />
                                    In Stock
                                  </span>
                                ) : (
                                  <span className="product-stock-out">
                                    <img
                                      src="/assets/images/icons/icon-2.png"
                                      alt=""
                                    />
                                    Stock Out
                                  </span>
                                )}
                                <div className="cart-btn">
                                  <button
                                    type="button"
                                    className={`theme-btn ${
                                      item.stock === "out" ? "not" : ""
                                    }`}
                                    disabled={item.stock === "out"}
                                  >
                                    {item.stock === "out"
                                      ? "Not Available"
                                      : "Add to Cart"}
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
                      </div>
                      
                      <div className="cta-section mt_30 mb_40">
                        <div className="inner-container">
                          <div
                            className="bg-layer"
                            style={{
                              backgroundImage:
                                "url('/assets/images/background/cta-bg.jpg')",
                            }}
                          ></div>
                          <div className="content-box">
                            <span className="text">Trending</span>
                            <h2>Get the Virtual Experience</h2>
                            <h3>
                              <span>Starting From</span> $83.99
                            </h3>
                            <div className="btn-box">
                              <Link to="/" className="theme-btn btn-one">
                                Shop Now<span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="inner-container clearfix">
                        {products.map((item) => (
                          <div className="shop-block-two" key={item.id}>
                            <div className="inner-box">
                              <div className="image-box">
                                {item.badge === "hot" && (
                                  <span className="hot-product p_absolute l_0 t_7">
                                    Hot
                                  </span>
                                )}

                                {item.badge === "discount" && (
                                  <span className="discount-product p_absolute l_0 t_7">
                                    {item.discount}
                                  </span>
                                )}
                                <ul className="option-list">
                                  <li>
                                    <Link
                                      to="/assets/images/shop/shop-10.png"
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                    >
                                      <i className="far fa-eye"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="shop-details.html">
                                      <i className="icon-5"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <button type="button">
                                      <i className="icon-6"></i>
                                    </button>
                                  </li>
                                </ul>
                                <figure className="image">
                                  <img src={item.image} alt={item.title} />
                                </figure>
                              </div>

                              <div className="lower-content">
                                <span className="text">{item.category}</span>
                                <h4>{item.title}</h4>
                                <h5>
                                  ${item.price}
                                  {item.oldPrice && <del>${item.oldPrice}</del>}
                                </h5>
                                <ul className="rating">
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
                                    <span>(5)</span>
                                  </li>
                                </ul>
                                {item.stock === "in" ? (
                                  <span className="product-stock">
                                    <img
                                      src="/assets/images/icons/icon-1.png"
                                      alt=""
                                    />
                                    In Stock
                                  </span>
                                ) : (
                                  <span className="product-stock-out">
                                    <img
                                      src="/assets/images/icons/icon-2.png"
                                      alt=""
                                    />
                                    Stock Out
                                  </span>
                                )}
                                <div className="cart-btn">
                                  <button
                                    type="button"
                                    className={`theme-btn ${
                                      item.stock === "out" ? "not" : ""
                                    }`}
                                    disabled={item.stock === "out"}
                                  >
                                    {item.stock === "out"
                                      ? "Not Available"
                                      : "Add to Cart"}
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
                      </div>
                    </div>
                  )}

                  {view === "list" && (
                    <div className="shop-list-content">
                      {products.map((prod) => {
                        return (
                          <div key={prod.id} className="shop-block-seven">
                            <div className="inner-box">
                              <div className="image-box">
                                {prod.badge === "hot" && (
                                  <span className="hot-product p_absolute l_0 t_7">
                                    Hot
                                  </span>
                                )}

                                {prod.badge === "discount" && (
                                  <span className="discount-product p_absolute l_0 t_7">
                                    {prod.discount}
                                  </span>
                                )}
                                <figure className="image">
                                  <img src={prod.image} alt="Imagee" />
                                </figure>
                              </div>
                              <div className="content-box">
                                <span className="text">{prod.category}</span>
                                <h4>
                                  <Link to="/shop-details">{prod.title}</Link>
                                </h4>

                                <h5>
                                  ${prod.price}
                                  {prod.oldPrice && <del>${prod.oldPrice}</del>}
                                </h5>
                                <ul className="rating">
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
                                    <span>(4.5)</span>
                                  </li>
                                </ul>
                                {/* <span className="product-stock mb_30">
                                  <img
                                    src="assets/images/icons/icon-1.png"
                                    alt=""
                                  />

                                  {prod.stock}
                                </span> */}
                                {prod.stock === "in" ? (
                                  <span className="product-stock mb_30">
                                    <img
                                      src="/assets/images/icons/icon-1.png"
                                      alt=""
                                    />
                                    In Stock
                                  </span>
                                ) : (
                                  <span className="product-stock-out mb_30">
                                    <img
                                      src="/assets/images/icons/icon-2.png"
                                      alt=""
                                    />
                                    Stock Out
                                  </span>
                                )}

                                {/* <div className="cart-btn">
                                  <button type="button" className="theme-btn">
                                    Add to Cart<span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                  </button>
                                </div> */}
                                <div className="cart-btn">
                                  <button
                                    type="button"
                                    className={`theme-btn ${
                                      prod.stock === "out" ? "not" : ""
                                    }`}
                                    disabled={prod.stock === "out"}
                                  >
                                    {prod.stock === "out"
                                      ? "Not Available"
                                      : "Add to Cart"}
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                  </button>
                                </div>
                              </div>
                              <div className="feature-content">
                                <ul className="feature-list clearfix">
                                  <li>1/2.5-Inch Large MOS Sensor</li>
                                  <li>
                                    24x Optical Zoom and 32x 4K Intelligent Zoom
                                  </li>
                                  <li>
                                    5-Axis HYBRID O.I.S Image Stabilisation
                                  </li>
                                  <li>
                                    Wireless Twin Sub Camera Functionality
                                  </li>
                                  <li>Active Contrast and HDR Movie Mode</li>
                                  <li>26 Megapixel Still Photos</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {products.map((prod) => {
                        return (
                          <div key={prod.id} className="shop-block-seven">
                            <div className="inner-box">
                              <div className="image-box">
                                {prod.badge === "hot" && (
                                  <span className="hot-product p_absolute l_0 t_7">
                                    Hot
                                  </span>
                                )}

                                {prod.badge === "discount" && (
                                  <span className="discount-product p_absolute l_0 t_7">
                                    {prod.discount}
                                  </span>
                                )}
                                <figure className="image">
                                  <img src={prod.image} alt="Imagee" />
                                </figure>
                              </div>
                              <div className="content-box">
                                <span className="text">{prod.category}</span>
                                <h4>
                                  <Link to="/shop-details">{prod.title}</Link>
                                </h4>

                                <h5>
                                  ${prod.price}
                                  {prod.oldPrice && <del>${prod.oldPrice}</del>}
                                </h5>
                                <ul className="rating">
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
                                    <span>(4.5)</span>
                                  </li>
                                </ul>

                                {prod.stock === "in" ? (
                                  <span className="product-stock mb_30">
                                    <img
                                      src="/assets/images/icons/icon-1.png"
                                      alt=""
                                    />
                                    In Stock
                                  </span>
                                ) : (
                                  <span className="product-stock-out mb_30">
                                    <img
                                      src="/assets/images/icons/icon-2.png"
                                      alt=""
                                    />
                                    Stock Out
                                  </span>
                                )}

                                <div className="cart-btn">
                                  <button
                                    type="button"
                                    className={`theme-btn ${
                                      prod.stock === "out" ? "not" : ""
                                    }`}
                                    disabled={prod.stock === "out"}
                                  >
                                    {prod.stock === "out"
                                      ? "Not Available"
                                      : "Add to Cart"}
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                  </button>
                                </div>
                              </div>
                              <div className="feature-content">
                                <ul className="feature-list clearfix">
                                  <li>1/2.5-Inch Large MOS Sensor</li>
                                  <li>
                                    24x Optical Zoom and 32x 4K Intelligent Zoom
                                  </li>
                                  <li>
                                    5-Axis HYBRID O.I.S Image Stabilisation
                                  </li>
                                  <li>
                                    Wireless Twin Sub Camera Functionality
                                  </li>
                                  <li>Active Contrast and HDR Movie Mode</li>
                                  <li>26 Megapixel Still Photos</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="pagination-wrapper centred pt_20">
                  <ul className="pagination clearfix">
                    <li>
                      <Link to="shop.html">
                        <i className="fal fa-angle-left"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="shop.html" className="current">
                        1
                      </Link>
                    </li>
                    <li>
                      <Link to="shop.html">2</Link>
                    </li>
                    <li>
                      <Link to="shop.html">3</Link>
                    </li>
                    <li>
                      <Link to="shop.html">
                        <i className="fal fa-angle-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HighlightsSection/>
    </>
  );
};

export default Product;

