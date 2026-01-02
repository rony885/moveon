import React from "react";
import { Link } from "react-router-dom";

const ProductOthers = () => {
  return (
    <section className="shop-three pb_50">
      <div className="large-container">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
            <div className="shop-block-three">
              <div className="inner-box">
                <span className="text">Music</span>
                <h2>Bluetooth Speaker</h2>
                <h4>
                  <span>Starting From</span> $99.99
                </h4>
                <div className="link-box">
                  <Link to="/shop-details">Shop now</Link>
                </div>
                <figure className="image r_0 b_10 float-bob-y">
                  <img src="assets/images/shop/shop-16.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
            <div className="shop-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Link to="/shop-details">
                    <img src="assets/images/shop/shop-17.png" alt="" />
                  </Link>
                </figure>
                <h4>
                  <Link to="/shop-details">
                    Wireless Bluetooth Headphone Stereo
                  </Link>
                </h4>
                <h5>$83.99</h5>
              </div>
            </div>
            <div className="shop-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Link to="/shop-details">
                    <img src="assets/images/shop/shop-18.png" alt="" />
                  </Link>
                </figure>
                <h4>
                  <Link to="/shop-details">
                    64 GB Camera CCTV Micro SD Memory Card
                  </Link>
                </h4>
                <h5>
                  $12.99 <del>$14.99</del>
                </h5>
              </div>
            </div>
            <div className="shop-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Link to="/shop-details">
                    <img src="assets/images/shop/shop-19.png" alt="" />
                  </Link>
                </figure>
                <h4>
                  <Link to="/shop-details">
                    Voice Calling Smartwatch Men Health
                  </Link>
                </h4>
                <h5>$39.99</h5>
              </div>
            </div>
            <div className="shop-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Link to="/shop-details">
                    <img src="assets/images/shop/shop-20.png" alt="" />
                  </Link>
                </figure>
                <h4>
                  <Link to="/shop-details">
                    Apple TV HD A1625 32GB 4th Generation TV
                  </Link>
                </h4>
                <h5>$499.99</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
            <div className="shop-block-three alternat-2">
              <div className="inner-box">
                <span className="text">Laptop</span>
                <h2>Windows Laptop</h2>
                <h4>
                  <span>Starting From</span> $999.99
                </h4>
                <div className="link-box">
                  <Link to="/shop-details">Shop now</Link>
                </div>
                <figure className="image r_0 b_10 float-bob-y">
                  <img src="assets/images/shop/shop-25.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
            <div className="shop-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Link to="/shop-details">
                    <img src="assets/images/shop/shop-21.png" alt="" />
                  </Link>
                </figure>
                <h4>
                  <Link to="/shop-details">
                    Xiaomi Mi 4S 55 Inches 4K UHD Smart Television
                  </Link>
                </h4>
                <h5>$249.99</h5>
              </div>
            </div>
            <div className="shop-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Link to="/shop-details">
                    <img src="assets/images/shop/shop-22.png" alt="" />
                  </Link>
                </figure>
                <h4>
                  <Link to="/shop-details">
                    1.2V Rechargeable Battery, 4300mAh- Sony
                  </Link>
                </h4>
                <h5>
                  $16.99 <del>$19.99</del>
                </h5>
              </div>
            </div>
            <div className="shop-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Link to="/shop-details">
                    <img src="assets/images/shop/shop-23.png" alt="" />
                  </Link>
                </figure>
                <h4>
                  <Link to="/shop-details">
                    AV Log Beginner 14" 2-in-1 Convertible Laptop
                  </Link>
                </h4>
                <h5>$789.99</h5>
              </div>
            </div>
            <div className="shop-block-four">
              <div className="inner-box">
                <figure className="image-box">
                  <Link to="/shop-details">
                    <img src="assets/images/shop/shop-24.png" alt="" />
                  </Link>
                </figure>
                <h4>
                  <Link to="/shop-details">
                    Vintage 1970s Sony AVC-1420 Video
                  </Link>
                </h4>
                <h5>
                  $199.99 <del>$219.99</del>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOthers;
