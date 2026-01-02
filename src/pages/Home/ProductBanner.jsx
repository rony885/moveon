import React from "react";
import { Link } from "react-router-dom";

const ProductBanner = () => {
  return (
    <section className="shop-one pb_70">
      <div className="large-container">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="shop-block-one">
              <div className="inner-box">
                <span className="text">Featured</span>
                <h2>Smart TV’s</h2>
                <h4>
                  <span>From</span> $99.99
                </h4>
                <div className="link-box">
                  <Link to="/shop-details">Shop now</Link>
                </div>
                <figure className="image r_0 b_10">
                  <img src="assets/images/shop/shop-7.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="shop-block-one">
              <div className="inner-box">
                <span className="text">Hot Sale</span>
                <h2>Kitchen Kits</h2>
                <h4>
                  <span>From</span> $50 Only
                </h4>
                <div className="link-box">
                  <Link to="/shop-details">Shop now</Link>
                </div>
                <figure className="image r_0 b_10">
                  <img src="/assets/images/shop/shop-8.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="shop-block-one">
              <div className="inner-box">
                <span className="text">Latest Deals</span>
                <h2>Smart Device</h2>
                <h4>
                  <span>From</span> $499.99
                </h4>
                <div className="link-box">
                  <Link to="/shop-details">Shop now</Link>
                </div>
                <figure className="image r_0 b_10">
                  <img src="assets/images/shop/shop-9.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
