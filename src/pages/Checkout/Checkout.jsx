import React from "react";
import { Link } from "react-router-dom";
import HighlightsSection from "../../components/HighlightsSection";

const Checkout = () => {
  return (
    <>
      <section className="page-title pt_20 pb_18">
        <div className="large-container">
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Checkout</li>
          </ul>
        </div>
      </section>

      <section className="checkout-section pb_80">
        <div className="large-container">
          <div className="sec-title centred pb_30">
            <h2>Checkout</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 col-sm-12 billing-column">
              <div className="billing-content mr_30">
                <h3>Billing Details</h3>
                <div className="form-inner">
                  <form>
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 field-column">
                        <div className="form-group">
                          <label>
                            First Name<span>*</span>
                          </label>
                          <input type="text" name="fname" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 field-column">
                        <div className="form-group">
                          <label>
                            Last Name<span>*</span>
                          </label>
                          <input type="text" name="lname" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 field-column">
                        <div className="form-group">
                          <label>
                            Email Address<span>*</span>
                          </label>
                          <input type="email" name="email" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 field-column">
                        <div className="form-group">
                          <label>
                            Phone Number<span>*</span>
                          </label>
                          <input type="text" name="phone" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 field-column">
                        <div className="form-group">
                          <label>
                            Country<span>*</span>
                          </label>
                          <div className="select-box">
                            <select className="wide">
                              <option data-display="Select Country">
                                Select Country
                              </option>
                              <option value="1">Australia</option>
                              <option value="2">Belgium</option>
                              <option value="3">Canada</option>
                              <option value="4">China</option>
                              <option value="5">France</option>
                              <option value="6">Germany</option>
                              <option value="7">Malaysia</option>
                              <option value="8">Mexico</option>
                              <option value="9">Russia</option>
                              <option value="10">Switzerland</option>
                              <option value="11">Turkey</option>
                              <option value="12">United Kingdom</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 field-column">
                        <div className="form-group">
                          <label>
                            Address<span>*</span>
                          </label>
                          <input type="text" name="address" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 field-column">
                        <div className="form-group">
                          <label>
                            Town / City<span>*</span>
                          </label>
                          <input type="text" name="city" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 field-column">
                        <div className="form-group">
                          <label>
                            Postcode / ZIP<span>*</span>
                          </label>
                          <input type="text" name="zip" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 field-column">
                        <div className="form-group">
                          <div className="check-box">
                            <input
                              className="check"
                              type="checkbox"
                              id="checkbox1"
                            />
                            <label for="checkbox1">Create an account?</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="other-address">
                  <h3>Shipping Address</h3>
                  <div className="check-box">
                    <input className="check" type="checkbox" id="checkbox2" />
                    <label for="checkbox2">
                      Ship to Link different address
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 order-column">
              <div className="order-box">
                <h3>Order Summary</h3>
                <div className="order-info">
                  <div className="title-box">
                    <span className="text">PROduct</span>
                    <span className="text">total</span>
                  </div>
                  <div className="order-product">
                    <div className="single-item">
                      <div className="product-box">
                        <figure className="image-box">
                          <img src="assets/images/shop/checkout-1.png" alt="" />
                        </figure>
                        <h6>CANON EOS 750D 24.2 MP In Best Price</h6>
                      </div>
                      <h4>$999.99</h4>
                    </div>
                    <div className="single-item">
                      <div className="product-box">
                        <figure className="image-box">
                          <img src="assets/images/shop/checkout-2.png" alt="" />
                        </figure>
                        <h6>Box Shinecon 3D Glass with Remote</h6>
                      </div>
                      <h4>$149.99</h4>
                    </div>
                    <div className="single-item">
                      <div className="product-box">
                        <figure className="image-box">
                          <img src="assets/images/shop/checkout-3.png" alt="" />
                        </figure>
                        <h6>8 KG Front Loading Washing</h6>
                      </div>
                      <h4>$999.99</h4>
                    </div>
                  </div>
                  <ul className="cost-box">
                    <li>
                      <h4>
                        <span>Subtotal</span>
                      </h4>
                      <h4>$2149.97</h4>
                    </li>
                    <li>
                      <h4>
                        <span>Free Shipping</span>
                      </h4>
                      <h4>
                        <span>$0</span>
                      </h4>
                    </li>
                  </ul>
                  <div className="total-box">
                    <h4>
                      <span>Total</span>
                    </h4>
                    <h4>$2149.98</h4>
                  </div>
                  <div className="payment-option">
                    <div className="bank-payment">
                      <div className="check-box mb_12">
                        <input
                          className="check"
                          type="radio"
                          id="checkbox3"
                          name="same"
                          checked
                        />
                        <label for="checkbox3">Direct Bank Transfer</label>
                      </div>
                      <p>
                        Make your payment directly into our bank account. Please
                        use your Order ID as payment reference.
                      </p>
                    </div>
                    <ul className="other-payment">
                      <li>
                        <div className="check-box mb_12">
                          <input
                            className="check"
                            type="radio"
                            id="checkbox4"
                            name="same"
                          />
                          <label for="checkbox4">Cash on Delivery</label>
                        </div>
                      </li>
                      <li>
                        <div className="check-box mb_12">
                          <input
                            className="check"
                            type="radio"
                            id="checkbox5"
                            name="same"
                          />
                          <label for="checkbox5">
                            Credit/Debit Cards or Paypal
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-box pt_30">
                    <button type="submit" className="theme-btn">
                      Make Payment<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
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

export default Checkout;
