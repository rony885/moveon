import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <>
      <section className="page-title pt_20 pb_18">
        <div className="large-container">
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>My Account</li>
          </ul>
        </div>
      </section>

      <section className="account-section pb_80">
        <div className="large-container">
          <div className="sec-title centred pb_20">
            <h2>My Account</h2>
          </div>
          <div className="inner-container">
            <div className="tabs-box">
              <div className="account-info">
                <div className="upper-box centred mb_40">
                  <figure className="image-box">
                    <img src="/assets/images/resource/account-1.png" alt="" />
                  </figure>
                  <h4>Ridoy Rock</h4>
                  <Link to="mailto:rodiyrock11@gmail.com">
                    rodiyrock11@gmail.com
                  </Link>
                </div>
                <ul className="tab-btns tab-buttons clearfix">
                  <ul className="tab-btns tab-buttons clearfix">
                    <li
                      className={`tab-btn ${
                        activeTab === "tab-1" ? "active-btn" : ""
                      }`}
                      onClick={() => setActiveTab("tab-1")}
                    >
                      Personal Information
                    </li>

                    <li
                      className={`tab-btn ${
                        activeTab === "tab-2" ? "active-btn" : ""
                      }`}
                      onClick={() => setActiveTab("tab-2")}
                    >
                      Billing and Payments
                    </li>

                    <li
                      className={`tab-btn ${
                        activeTab === "tab-3" ? "active-btn" : ""
                      }`}
                      onClick={() => setActiveTab("tab-3")}
                    >
                      Order History
                    </li>

                    <li
                      className={`tab-btn ${
                        activeTab === "tab-4" ? "active-btn" : ""
                      }`}
                      onClick={() => setActiveTab("tab-4")}
                    >
                      Wishlist
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="tabs-content">
                {activeTab === "tab-1" && (
                  <div className="tab active-tab" id="tab-1">
                    <div className="personal-info">
                      <h3>Personal Information</h3>
                      <p>
                        Manage your personal information, including phone
                        numbers and email adress where you can be contacted
                      </p>
                      <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <h6>Name</h6>
                            <span>Ridoy Rock</span>
                            <button type="button">Edit</button>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <h6>Date of Birth</h6>
                            <span>02 July 2000</span>
                            <button type="button">Edit</button>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <h6>Address</h6>
                            <span>Dhaka, Bangladesh</span>
                            <button type="button">Edit</button>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <h6>Email</h6>
                            <span>
                              <Link to="account.html">ridoyrock@gmail.com</Link>
                            </span>
                            <button type="button">Edit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab-2" && (
                  <div className="tab active-tab" id="tab-2">
                    <h3>Billing and Payments</h3>

                    <div className="payment-option">
                      <div className="bank-payment">
                        <div className="check-box mb_12">
                          <input
                            type="radio"
                            id="checkbox3"
                            name="same"
                            defaultChecked
                          />
                          <label htmlFor="checkbox3">
                            Direct Bank Transfer
                          </label>
                        </div>
                        <p>
                          Make your payment directly into our bank account.
                          Please use your Order ID as payment reference.
                        </p>
                      </div>

                      <ul className="other-payment">
                        <li>
                          <div className="check-box mb_12">
                            <input type="radio" id="checkbox4" name="same" />
                            <label htmlFor="checkbox4">Cash on Delivery</label>
                          </div>
                        </li>

                        <li>
                          <div className="check-box mb_12">
                            <input type="radio" id="checkbox5" name="same" />
                            <label htmlFor="checkbox5">
                              Credit/Debit Cards or Paypal
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "tab-3" && (
                  <div className="tab active-tab" id="tab-3">
                    <h3>Oder History</h3>
                    <div className="history-box">
                      <div className="single-history">
                        <div className="product-box">
                          <figure className="image-box">
                            <img
                              src="/assets/images/resource/history-1.png"
                              alt=""
                            />
                          </figure>
                          <div className="product-info">
                            <h6>CANON EOS 750D 24.2 MP In Best Price</h6>
                            <span>#X469626</span>
                            <h4>$999.99</h4>
                          </div>
                        </div>
                        <span className="text">Delivered</span>
                      </div>
                      <div className="single-history">
                        <div className="product-box">
                          <figure className="image-box">
                            <img
                              src="/assets/images/resource/history-2.png"
                              alt=""
                            />
                          </figure>
                          <div className="product-info">
                            <h6>Box Shinecon 3D Glass with Remote</h6>
                            <span>#X469625</span>
                            <h4>$149.99</h4>
                          </div>
                        </div>
                        <span className="text">Delivered</span>
                      </div>
                      <div className="single-history">
                        <div className="product-box">
                          <figure className="image-box">
                            <img
                              src="/assets/images/resource/history-3.png"
                              alt=""
                            />
                          </figure>
                          <div className="product-info">
                            <h6>8 KG Front Loading Washing</h6>
                            <span>#X469629</span>
                            <h4>$999.99</h4>
                          </div>
                        </div>
                        <span className="text">Delivered</span>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab-4" && (
                  <div className="tab active-tab" id="tab-4">
                    <h3>Wishlist</h3>
                    <p>No Wishlist</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
