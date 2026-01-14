import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <section className="page-title pt_20 pb_18">
        <div className="large-container">
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Sign up</li>
          </ul>
        </div>
      </section>

      <section className="sign-section pb_80">
        <div className="large-container">
          <div className="sec-title centred pb_30">
            <h2>Create Your Account</h2>
          </div>
          <div className="form-inner">
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" name="phone" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" required />
              </div>
              <div className="form-group message-btn">
                <button type="submit" className="theme-btn">
                  Sign Up<span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <span className="text">or</span>
              <ul className="social-links clearfix">
                <li>
                  <Link to="/sign-up">
                    <img src="assets/images/icons/icon-8.png" alt="" />
                    Continue with Google
                  </Link>
                </li>
                <li>
                  <Link to="/sign-up">
                    <img src="assets/images/icons/icon-9.png" alt="" />
                    Continue with Facebook
                  </Link>
                </li>
              </ul>
            </form>
            <div className="other-option">
              <div className="check-box">
                <input className="check" type="checkbox" id="checkbox1" />
                <label for="checkbox1">Remember me</label>
              </div>
            </div>
            <div className="lower-text centred">
              <p>
                Already have an account? <Link to="/login">Login Here</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
