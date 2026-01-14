import React from "react";
import { Link } from "react-router-dom";
import HighlightsSection from "../../components/HighlightsSection";

const blogs = [
  {
    id: 1,
    img: "assets/images/news/news-1.jpg",
    category: "Virtual",
    author: "Alex Beniwal",
    title:
      "Feel like you’re actually experiencing the action in real life with the VR",
    delay: "00ms",
  },
  {
    id: 2,
    img: "assets/images/news/news-2.jpg",
    category: "Mobile",
    author: "Haris Gulati",
    title: "Smartphones have largely replaced personal digital assistant",
    delay: "200ms",
  },
  {
    id: 3,
    img: "assets/images/news/news-3.jpg",
    category: "Virtual",
    author: "Alex Hels",
    title:
      "It sports crisp, transparent visuals and uses Link 5.7-inch 1080p OLED",
    delay: "400ms",
  },
  {
    id: 4,
    img: "assets/images/news/news-27.jpg",
    category: "Wireless",
    author: "Mical Von",
    title:
      "Feel like you’re actually experiencing the action in real life with the VR",
    delay: "600ms",
  },
  {
    id: 5,
    img: "assets/images/news/news-28.jpg",
    category: "Virtual",
    author: "Alex Beniwal",
    title: "Smartphones have largely replaced personal digital assistant",
    delay: "00ms",
  },
  {
    id: 6,
    img: "assets/images/news/news-29.jpg",
    category: "Mobile",
    author: "Haris Gulati",
    title:
      "It sports crisp, transparent visuals and uses Link 5.7-inch 1080p OLED",
    delay: "200ms",
  },
  {
    id: 7,
    img: "assets/images/news/news-30.jpg",
    category: "Virtual",
    author: "Alex Hels",
    title:
      "Feel like you’re actually experiencing the action in real life with the VR",
    delay: "400ms",
  },
  {
    id: 8,
    img: "assets/images/news/news-31.jpg",
    category: "Wireless",
    author: "Mical Von",
    title: "Smartphones have largely replaced personal digital assistant",
    delay: "600ms",
  },
  {
    id: 9,
    img: "assets/images/news/news-32.jpg",
    category: "Wireless",
    author: "Mical Von",
    title:
      "It sports crisp, transparent visuals and uses Link 5.7-inch 1080p OLED",
    delay: "600ms",
  },
];

const Blog = () => {
  return (
    <>
      <section className="page-title pt_20 pb_18">
        <div className="large-container">
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Blog</li>
          </ul>
        </div>
      </section>

      <section className="sidebar-page-container blog-grid pb_80">
        <div className="large-container">
          <div className="sec-title centred pb_20">
            <h2>Blog Grid</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="blog-grid-content">
                <div className="row clearfix">
                  {blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="col-lg-4 col-md-6 col-sm-12 news-block"
                    >
                      <div
                        className="news-block-one wow fadeInUp animated"
                        data-wow-delay={blog.delay}
                        data-wow-duration="1500ms"
                      >
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <Link to="/blog-details">
                                <img src={blog.img} alt={blog.title} />
                              </Link>
                            </figure>
                          </div>

                          <div className="lower-content">
                            <ul className="post-info">
                              <li className="category">
                                <Link to="/blog-details">{blog.category}</Link>
                              </li>
                              <li>
                                By <Link to="/blog-details">{blog.author}</Link>
                              </li>
                            </ul>

                            <h3>
                              <Link to="/blog-details">{blog.title}</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="col-lg-12 col-md-12 col-sm-12 cta-column">
                    <div className="cta-section mb_60">
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
                            <Link to="/shop" className="theme-btn btn-one">
                              Shop Now<span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div
                      className="news-block-one wow fadeInUp animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link to="/blog-details">
                              <img
                                src="assets/images/news/news-33.jpg"
                                alt=""
                              />
                            </Link>
                          </figure>
                        </div>
                        <div className="lower-content">
                          <ul className="post-info">
                            <li className="category">
                              <Link to="/blog-details">Virtual</Link>
                            </li>
                            <li>
                              By <Link to="/blog-details">Alex Beniwal</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link to="/blog-details">
                              Feel like you’re actually experiencing the action
                              in real life with the VR
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div
                      className="news-block-one wow fadeInUp animated"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link to="/blog-details">
                              <img
                                src="assets/images/news/news-34.jpg"
                                alt=""
                              />
                            </Link>
                          </figure>
                        </div>
                        <div className="lower-content">
                          <ul className="post-info">
                            <li className="category">
                              <Link to="/blog-details">Mobile</Link>
                            </li>
                            <li>
                              By <Link to="/blog-details">Haris Gulati</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link to="/blog-details">
                              Smartphones have largely replaced personal digital
                              assistant
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div
                      className="news-block-one wow fadeInUp animated"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link to="/blog-details">
                              <img
                                src="assets/images/news/news-35.jpg"
                                alt=""
                              />
                            </Link>
                          </figure>
                        </div>
                        <div className="lower-content">
                          <ul className="post-info">
                            <li className="category">
                              <Link to="/blog-details">Virtual</Link>
                            </li>
                            <li>
                              By <Link to="/blog-details">Alex Hels</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link to="/blog-details">
                              It sports crisp, transparent visuals and uses Link
                              5.7-inch 1080p OLED
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div
                      className="news-block-one wow fadeInUp animated"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link to="/blog-details">
                              <img
                                src="assets/images/news/news-36.jpg"
                                alt=""
                              />
                            </Link>
                          </figure>
                        </div>
                        <div className="lower-content">
                          <ul className="post-info">
                            <li className="category">
                              <Link to="/blog-details">Wireless</Link>
                            </li>
                            <li>
                              By <Link to="/blog-details">Mical Von</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link to="/blog-details">
                              Feel like you’re actually experiencing the action
                              in real life with the VR
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div
                      className="news-block-one wow fadeInUp animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link to="/blog-details">
                              <img
                                src="assets/images/news/news-37.jpg"
                                alt=""
                              />
                            </Link>
                          </figure>
                        </div>
                        <div className="lower-content">
                          <ul className="post-info">
                            <li className="category">
                              <Link to="/blog-details">Virtual</Link>
                            </li>
                            <li>
                              By <Link to="/blog-details">Alex Beniwal</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link to="/blog-details">
                              Smartphones have largely replaced personal digital
                              assistant
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div
                      className="news-block-one wow fadeInUp animated"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link to="/blog-details">
                              <img
                                src="assets/images/news/news-38.jpg"
                                alt=""
                              />
                            </Link>
                          </figure>
                        </div>
                        <div className="lower-content">
                          <ul className="post-info">
                            <li className="category">
                              <Link to="/blog-details">Mobile</Link>
                            </li>
                            <li>
                              By <Link to="/blog-details">Haris Gulati</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link to="/blog-details">
                              It sports crisp, transparent visuals and uses Link
                              5.7-inch 1080p OLED
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="pagination-wrapper centred">
                  <ul className="pagination clearfix">
                    <li>
                      <Link to="blog.html">
                        <i className="fal fa-angle-left"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="blog.html" className="current">
                        1
                      </Link>
                    </li>
                    <li>
                      <Link to="blog.html">2</Link>
                    </li>
                    <li>
                      <Link to="blog.html">3</Link>
                    </li>
                    <li>
                      <Link to="blog.html">
                        <i className="fal fa-angle-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
              <div className="blog-sidebar">
                <div className="sidebar-widget search-widget mb_55">
                  <div className="search-form">
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
                <div className="sidebar-widget category-widget mb_50">
                  <div className="widget-title mb_14">
                    <h3>Categories</h3>
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
                          <label for="checkbox1">Car Audio Systems</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox2"
                          />
                          <label for="checkbox2">Analytics</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox3"
                          />
                          <label for="checkbox3">Suspension</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox4"
                          />
                          <label for="checkbox4">Car Repair Parts</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox5"
                          />
                          <label for="checkbox5">Batteries Power</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox6"
                          />
                          <label for="checkbox6">Wheels And Tyres</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox7"
                          />
                          <label for="checkbox7">Lighting</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox8"
                          />
                          <label for="checkbox8">Car Fuel</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget post-widget mb_40">
                  <div className="widget-title mb_25">
                    <h3>Latest News</h3>
                  </div>
                  <div className="post-inner">
                    <div className="post">
                      <figure className="post-thumb">
                        <Link to="/blog-details">
                          <img src="assets/images/news/post-1.jpg" alt="" />
                        </Link>
                      </figure>
                      <h5>
                        <Link to="/blog-details">
                          Gooloo Battery Jumpers For Sale at Buy Auto
                        </Link>
                      </h5>
                      <span className="post-date">Apr 17, 2022</span>
                    </div>
                    <div className="post">
                      <figure className="post-thumb">
                        <Link to="/blog-details">
                          <img src="assets/images/news/post-2.jpg" alt="" />
                        </Link>
                      </figure>
                      <h5>
                        <Link to="/blog-details">
                          You can travel at your own pace in Link car
                        </Link>
                      </h5>
                      <span className="post-date">Apr 16, 2022</span>
                    </div>
                    <div className="post">
                      <figure className="post-thumb">
                        <Link to="/blog-details">
                          <img src="assets/images/news/post-3.jpg" alt="" />
                        </Link>
                      </figure>
                      <h5>
                        <Link to="/blog-details">
                          Reports Highest Third Quarter Sales in
                        </Link>
                      </h5>
                      <span className="post-date">Apr 15, 2022</span>
                    </div>
                  </div>
                </div>
                <div className="advice-widget centred mb_50">
                  <div
                    className="bg-layer"
                    style={{
                      backgroundImage:
                        "url('/assets/images/news/sidebar-1.jpg')",
                    }}
                  ></div>
                  <h2>Watch for Men</h2>
                  <Link to="/shop-details">Shop Now</Link>
                </div>
                <div className="sidebar-widget archives-widget mb_45">
                  <div className="widget-title mb_20">
                    <h3>Archives</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="archives-list">
                      <li>
                        <Link to="/blog-details">
                          <i className="icon-8"></i>February 20, 2023
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-details">
                          <i className="icon-8"></i>March 20, 2023
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-details">
                          <i className="icon-8"></i>April 20, 2023
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-details">
                          <i className="icon-8"></i>July 20, 2023
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-details">
                          <i className="icon-8"></i>Aguest 20, 2023
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget gallery-widget mb_45">
                  <div className="widget-title mb_25">
                    <h3>Photo Gallery</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="image-list clearfix">
                      <li>
                        <figure className="image">
                          <Link
                            to="assets/images/news/gallery-1.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src="assets/images/news/gallery-1.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image">
                          <Link
                            to="assets/images/news/gallery-2.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src="assets/images/news/gallery-2.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image">
                          <Link
                            to="assets/images/news/gallery-3.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src="assets/images/news/gallery-3.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image">
                          <Link
                            to="assets/images/news/gallery-4.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src="assets/images/news/gallery-4.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image">
                          <Link
                            to="assets/images/news/gallery-5.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src="assets/images/news/gallery-5.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image">
                          <Link
                            to="assets/images/news/gallery-6.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src="assets/images/news/gallery-6.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget tags-widget">
                  <div className="widget-title mb_25">
                    <h3>Popular Tags</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="tags-list clearfix">
                      <li>
                        <Link to="/blog-details">Garage</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Electronics</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Quality</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Promotion</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Lighting</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Tires</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Gadgets</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Envato</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HighlightsSection />
    </>
  );
};

export default Blog;
