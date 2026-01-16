import React, { useState } from "react";
import styled from "styled-components";

const ProductDetailsTab = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <Wrapper>
      <div className="product-discription">
        <div className="tabs-box">
          <div className="tab-btn-box">
            {/* <ul className="tab-btns tab-buttons clearfix">
            <li className="tab-btn active-btn" data-tab="#tab-1">
              Description
            </li>
            <li className="tab-btn" data-tab="#tab-2">
              Reviews (08)
            </li>
            <li className="tab-btn" data-tab="#tab-3">
              Specification
            </li>
          </ul> */}
            <ul className="tab-btns tab-buttons clearfix">
              <li
                className={`tab-btn ${
                  activeTab === "tab-1" ? "active-btn" : ""
                }`}
                onClick={() => setActiveTab("tab-1")}
              >
                Description
              </li>

              <li
                className={`tab-btn ${
                  activeTab === "tab-2" ? "active-btn" : ""
                }`}
                onClick={() => setActiveTab("tab-2")}
              >
                Reviews (08)
              </li>

              <li
                className={`tab-btn ${
                  activeTab === "tab-3" ? "active-btn" : ""
                }`}
                onClick={() => setActiveTab("tab-3")}
              >
                Specification
              </li>
            </ul>
          </div>
          <div className="tabs-content">
            {/* <div className="tab active-tab" id="tab-1"> */}
            <div className={`tab ${activeTab === "tab-1" ? "active-tab" : ""}`}>
              <div className="discription-content pt_35">
                <p>
                  Our washing machine boasts Link spacious drum capacity,
                  allowing you to tackle large loads with ease. Say goodbye to
                  stubborn stains with customizable temperature settings and
                  specialized stain-fighting options, ensuring your clothes come
                  out fresh and pristine.
                </p>
                <p>
                  Equipped with Link powerful yet energy-efficient motor, our
                  machine ensures thorough cleaning while minimizing water and
                  electricity consumption. Choose from Link variety of wash
                  cycles tailored to your specific needs, from delicate fabrics
                  to heavy-duty loads, guaranteeing optimal results every
                  time.Experience peace of mind with our built-in safety
                  features, including child lock and overflow protection,
                  keeping your household safe during operation. Plus, with its
                  sleek and modern design, our washing machine seamlessly blends
                  into any home decor.
                </p>
                <h5>Features :</h5>
                <ul className="list-style-one clearfix">
                  <li>
                    It takes only 15-18 minutes to wash 1 to 1.5 kg of clothes
                  </li>
                  <li>Adjustable spin speed for better water extraction</li>
                  <li>Water-saving features or certifications</li>
                  <li>Indicates the maximum weight of laundry the machine</li>
                  <li>Automatically adjusts water levels based</li>
                  <li>
                    A fast cycle for lightly soiled clothes that need Link quick
                    refresh.
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="tab" id="tab-2"> */}
            <div className={`tab ${activeTab === "tab-2" ? "active-tab" : ""}`}>
              <div className="review-content pt_40">
                <div className="single-review">
                  <div className="upper-box">
                    <div className="info-box">
                      <figure className="image">
                        <img src="assets/images/resource/review-1.png" alt="" />
                      </figure>
                      <div className="inner">
                        <h4>Dania Monjur</h4>
                        <span className="date">June 12, 2023</span>
                      </div>
                    </div>
                    <ul className="option-btn">
                      <li>
                        <button>
                          <i className="icon-46"></i>
                        </button>
                        12
                      </li>
                      <li>
                        <button>
                          <i className="icon-47"></i>
                        </button>
                        0
                      </li>
                    </ul>
                  </div>
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
                  </ul>
                  <p>
                    To provide Link review of Link specific washing machine, I
                    would need to know the brand and model of the washing
                    machine you're interested in reviewing. If you have Link
                    particular washing machine in mind, please provide its
                    details, and I can help you create Link comprehensive
                    review. Alternatively, if you're looking for Link general
                    review of washing machines.
                  </p>
                  <ul className="image-list">
                    <li>
                      <img
                        src="assets/images/resource/review-img-1.jpg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/resource/review-img-2.jpg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/resource/review-img-3.jpg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/resource/review-img-4.jpg"
                        alt=""
                      />
                    </li>
                  </ul>
                  <div className="reply-review mt_30">
                    <div className="upper-box">
                      <div className="info-box">
                        <figure className="image">
                          <img
                            src="assets/images/resource/review-2.png"
                            alt=""
                          />
                        </figure>
                        <div className="inner">
                          <h4>Seller</h4>
                        </div>
                      </div>
                      <ul className="option-btn">
                        <li>
                          <button>
                            <i className="icon-46"></i>
                          </button>
                          12
                        </li>
                        <li>
                          <button>
                            <i className="icon-47"></i>
                          </button>
                          0
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised
                      words which don't look even slightly believable. If you
                      are going to use Link passage of Lorem Ipsum, you need to
                      be sure there isn't anything embarrassing hidden in the
                      middle of text.
                    </p>
                  </div>
                </div>
                <div className="single-review">
                  <div className="upper-box">
                    <div className="info-box">
                      <figure className="image">
                        <img src="assets/images/resource/review-3.png" alt="" />
                      </figure>
                      <div className="inner">
                        <h4>Dania Monjur</h4>
                        <span className="date">June 08, 2023</span>
                      </div>
                    </div>
                    <ul className="option-btn">
                      <li>
                        <button>
                          <i className="icon-46"></i>
                        </button>
                        12
                      </li>
                      <li>
                        <button>
                          <i className="icon-47"></i>
                        </button>
                        0
                      </li>
                    </ul>
                  </div>
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
                  </ul>
                  <p>
                    To provide Link review of Link specific washing machine, I
                    would need to know the brand and model of the washing
                    machine you're interested in reviewing. If you have Link
                    particular washing machine in mind, please provide its
                    details, and I can help you create Link comprehensive
                    review. Alternatively, if you're looking for Link general
                    review of washing machines.
                  </p>
                  <ul className="image-list">
                    <li>
                      <img
                        src="assets/images/resource/review-img-5.jpg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/resource/review-img-6.jpg"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
                <div className="customer-review">
                  <h3>Write Your Rating</h3>
                  <div className="rating-box mb_25">
                    <p>
                      Your Rating <span>*</span>
                    </p>
                    <div className="rating-inner">
                      <ul className="rating-list">
                        <li>
                          <button>
                            <i className="icon-11"></i>
                          </button>
                        </li>
                        <li>
                          <button>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                          </button>
                        </li>
                        <li>
                          <button>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                          </button>
                        </li>
                        <li>
                          <button>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                          </button>
                        </li>
                        <li>
                          <button>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                            <i className="icon-11"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-inner">
                    <form
                      method="post"
                      action="https://html.tonatheme.com/2025/nexmart/shop-details.html"
                    >
                      <div className="form-group">
                        <label>
                          Write Your Review <span>*</span>
                        </label>
                        <textarea name="message"></textarea>
                      </div>
                      <div className="form-group upload-field">
                        <label>Add Photos and Video</label>
                        <div className="upload-box">
                          <input
                            name="files[]"
                            id="filer_input2"
                            multiple="multiple"
                            type="file"
                          />
                          <div className="upload-content">
                            <i className="icon-48"></i>
                            <span>Upload Image</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>
                          Your Name <span>*</span>
                        </label>
                        <input type="text" name="name" />
                      </div>
                      <div className="form-group">
                        <label>
                          Email Address <span>*</span>
                        </label>
                        <input type="email" name="email" />
                      </div>
                      <div className="form-group">
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox1"
                          />
                          <label for="checkbox1">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </div>
                      </div>
                      <div className="message-btn">
                        <button type="submit" className="theme-btn btn-one">
                          Submit Review<span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="tab" id="tab-3"> */}
            <div className={`tab ${activeTab === "tab-3" ? "active-tab" : ""}`}>
              <div className="specification-content pt_40">
                <ul className="specification-list clean">
                  <li>
                    <strong>Model Name</strong>Sharp Full Auto Front-10.5 KG
                  </li>
                  <li>
                    <strong>Display</strong>LCD
                  </li>
                  <li>
                    <strong>Brand</strong>Toshiba
                  </li>
                  <li>
                    <strong>Condition</strong>Brand New
                  </li>
                  <li>
                    <strong>Voltage</strong>120V or 220-240V
                  </li>
                  <li>
                    <strong>Made in</strong>Japan
                  </li>
                  <li>
                    <strong>Warranty</strong>01 Year
                  </li>
                  <li>
                    <strong>Frequency</strong>50Hz or 60Hz
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ProductDetailsTab;
