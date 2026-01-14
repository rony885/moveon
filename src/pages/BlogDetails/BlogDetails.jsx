import React from "react";
import { Link } from "react-router-dom";
import HighlightsSection from "../../components/HighlightsSection";

const BlogDetails = () => {
  return (
    <>
      <section className="page-title pt_20 pb_18">
        <div className="large-container">
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Blog Details</li>
          </ul>
        </div>
      </section>

      <section className="sidebar-page-container blog-grid pb_80">
        <div className="large-container">
          <div className="sec-title centred pb_20">
            <h2>Blog Details</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="blog-details-content mr_30">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link to="/blog-details">
                          <img src="assets/images/news/news-40.jpg" alt="" />
                        </Link>
                      </figure>
                    </div>
                    <div className="lower-content">
                      <ul className="post-info">
                        <li className="category">
                          <Link to="/blog-details">Mobile</Link>
                        </li>
                        <li>
                          By <Link to="/blog-details">Jhon Carry</Link>
                        </li>
                        <li>
                          <span>March 19, 2023</span>
                        </li>
                      </ul>
                      <h2>
                        With the rise of remote work and virtual gatherings,
                        many events and conferences have transitioned to virtual
                        platforms
                      </h2>
                      <p>
                        A technology that immerses users in Link
                        computer-generated simulation of Link three-dimensional
                        environment, often experienced through specialized VR
                        headsets. VR enab les users to interact with and explore
                        virtual worlds as if they were physically present. A
                        computer-generated simulation or representation of Link
                        real or imaginary environty nment. Virtual environments
                        can range from simple 3D models to complex, interactive
                        worlds used for training, gaming, education, or research
                        purposes.
                      </p>
                      <p>
                        Gathering of individuals held remotely over the
                        internet, typically using video conferencing or virtual
                        meeting software. Virtual meetings enable participants
                        to communit cate and collaborate from different
                        locations, reducing the need for physical travel.
                        software-based agent that provides assistance or
                        performs tasks for users, often for using natural
                        language processing and artificial intelligence
                        algorithms. Examples include Apple's Siri, Amazon's
                        Alexa, and Google Assistant.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-one">
                  <blockquote className="mb_35">
                    <div className="icon-box">
                      <i className="icon-49"></i>
                    </div>
                    <p>
                      "virtual" encompasses Link wide range of technologies,
                      applications, and experiences that leverage digital
                      simulations or representations to mimic real-world
                      interactions, environments, or phenomena.
                    </p>
                    <h4>Brooklyn Simmons</h4>
                  </blockquote>
                  <div className="text-box mb_40">
                    <p className="mb_25">
                      A technology that immerses users in Link
                      computer-generated simulation of Link three-dimensional
                      environment, often experienced through specialized VR
                      headsets. VR enab les users to interact with and explore
                      virtual worlds as if they were physically present. A
                      computer-generated simulation or representation of Link
                      real or imaginary environty nment. Virtual environments
                      can range from simple 3D models to complex, interactive
                      worlds used for training, gaming, education, or research
                      purposes.
                    </p>
                    <p>
                      Gathering of individuals held remotely over the internet,
                      typically using video conferencing or virtual meeting
                      software. Virtual meetings enable participants to communit
                      cate and collaborate from different locations, reducing
                      the need for physical travel. software-based agent that
                      provides assistance or performs tasks for users, often for
                      using natural language processing and artificial
                      intelligence algorithms. Examples include Apple's Siri,
                      Amazon's Alexa, and Google Assistant.
                    </p>
                  </div>
                  <div className="two-column">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                        <figure className="image-box mb_25">
                          <img src="assets/images/news/news-43.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                        <figure className="image-box mb_25">
                          <img src="assets/images/news/news-44.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-two mb_45">
                  <h3>
                    Reports Highest Third Quarter Sales in Company History
                  </h3>
                  <p>
                    A technology that immerses users in Link computer-generated
                    simulation of Link three-dimensional environment, often
                    experienced through specialized VR headsets. VR enab les
                    users to interact with and explore virtual worlds as if they
                    were physically present. A computer-generated simulation or
                    representation of Link real or imaginary environty nment.
                    Virtual environments can range from simple 3D models to
                    complex, interactive worlds used for training, gaming,
                    education, or research purposes.
                  </p>
                  <h6>Features :</h6>
                  <ul className="list-style-one mb_30 clearfix">
                    <li>The engine's power output is measured in horsepower</li>
                    <li>
                      Modern engines often feature technologies such as direct
                      injection
                    </li>
                    <li>Some suspension systems offer adjustable features</li>
                    <li>
                      Certain rims may have features that make them easier to
                      clean and maintain.
                    </li>
                  </ul>
                  <p>
                    An online learning environment that simulates Link
                    traditional classroom setting, allowing students and
                    teachers to interact and collaborate in real-time over the
                    internet. Virtual classrooms often include features such as
                    video conferencing, chat, and interactive whiteboards.
                  </p>
                </div>
                <div className="post-share-option pb_50 mb_30">
                  <ul className="tags-list">
                    <li>
                      <span>Tags:</span>
                    </li>
                    <li>
                      <Link to="/blog-details">Virtual</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Electronics</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Quality</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Gadgets</Link>
                    </li>
                  </ul>
                  <ul className="social-links">
                    <li>
                      <span>Share This :</span>
                    </li>
                    <li>
                      <Link to="/blog-details">
                        <i className="icon-13"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details">
                        <i className="icon-14"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details">
                        <i className="icon-15"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="author-box mb_50">
                  <figure className="thumb-box">
                    <img src="assets/images/news/author-1.png" alt="" />
                  </figure>
                  <h4>Alex Janson</h4>
                  <span className="designation">UI/UX Desinger</span>
                  <p>
                    Satisfied with them, not sure what else to say other than if
                    you’re looking for Link replacement. This sentiment is what
                    makes the eternity band Link perfect gift for couples
                  </p>
                </div>
                <div className="comment-box">
                  <h2>Write Comment</h2>
                  <div className="form-inner">
                    <form
                      method="post"
                      action="https://html.tonatheme.com/2025/nexmart//blog-details"
                    >
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="form-group">
                            <label>
                              Name <span>*</span>
                            </label>
                            <input type="text" name="name" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="form-group">
                            <label>
                              Email <span>*</span>
                            </label>
                            <input type="email" name="email" />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                          <div className="form-group">
                            <label>
                              Message <span>*</span>
                            </label>
                            <textarea name="message"></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                          <div className="check-box mb_35">
                            <input
                              className="check"
                              type="checkbox"
                              id="checkbox9"
                            />
                            <label for="checkbox9">
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                          <div className="message-btn">
                            <button type="submit" className="theme-btn">
                              Submit Review<span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
              <div className="blog-sidebar">
                <div className="sidebar-widget search-widget mb_55">
                  <div className="search-form">
                    <form
                      method="post"
                      action="https://html.tonatheme.com/2025/nexmart/blog.html"
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
                  <Link to="shop-details.html">Shop Now</Link>
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

export default BlogDetails;
