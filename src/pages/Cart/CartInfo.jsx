import React from "react";
import { Link } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    img: "assets/images/shop/cart-4.png",
    name: "CANON EOS 750D 24.2 MP",
    price: 133,
    quantity: 2,
  },
  {
    id: 2,
    img: "assets/images/shop/cart-5.png",
    name: "Box Shinecon 3D Glass with Remote",
    price: 167.98,
    quantity: 1,
  },
  {
    id: 3,
    img: "assets/images/shop/cart-6.png",
    name: "8 KG Front Loading Washing",
    price: 143,
    quantity: 1,
  },
  {
    id: 4,
    img: "assets/images/shop/cart-7.png",
    name: "Sony Bluetooth-compatible Speaker",
    price: 150,
    quantity: 1,
  },
];

const shippingOptions = [
  { id: 1, label: "Free Shipping", price: 0, checked: true },
  { id: 2, label: "Flat Rate", price: 10, checked: false },
  { id: 3, label: "Local Delivery", price: 20, checked: false },
];

const CartInfo = () => {
  return (
    <>
      <section className="page-title pt_20 pb_18">
        <div className="large-container">
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </section>

      <section className="cart-section pb_80">
        <div className="large-container">
          <div className="sec-title centred pb_30">
            <h2>Your Cart</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="target-price mb_30">
                <p>
                  Add <span>$89.99</span> to cart and get free shipping
                </p>
                <div className="progress-box">
                  <div className="bar">
                    <div
                      className="bar-inner count-bar"
                      data-percent="70%"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="table-outer mb_30">
                <table className="cart-table">
                  <thead className="cart-header">
                    <tr>
                      <th>product</th>
                      <th>price</th>
                      <th>quantity</th>
                      <th>total</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="product-column">
                          <div className="product-box">
                            <figure className="image-box">
                              <img src={item.img} alt={item.name} />
                            </figure>
                            <h6>
                              <Link to="/shop-details">{item.name}</Link>
                            </h6>
                          </div>
                        </td>
                        <td>${item.price}</td>
                        <td className="qty">
                          <div className="item-quantity">
                            <input
                              className="quantity-spinner"
                              type="text"
                              value={item.quantity}
                              name="quantity"
                              readOnly
                            />
                          </div>
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button className="cancel-btn">
                            <i className="icon-9"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
              <div className="total-cart mb_30">
                <div className="title-box">
                  <h4>Subtotal</h4>
                  <h5>$726.98</h5>
                </div>

                <div className="shipping-cost mb_40">
                  <h4>Shipping</h4>
                  <ul className="cost-list">
                    {shippingOptions.map((option) => (
                      <li key={option.id}>
                        <div className="check-box">
                          <input
                            className="check"
                            type="radio"
                            id={`checkbox${option.id}`}
                            name="same"
                            defaultChecked={option.checked}
                          />
                          <label htmlFor={`checkbox${option.id}`}>
                            {option.label}
                          </label>
                        </div>
                        <span className="price">+$20.00</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="shipping-calculator">
                  <h4>Calculate Shipping</h4>
                  <div className="form-group">
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
                  <div className="form-group">
                    <input
                      type="text"
                      name="zip"
                      placeholder="Postcode / ZIP"
                    />
                  </div>
                  <div className="form-group">
                    <button className="theme-btn cart-btn" type="button">
                      Update Cart <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>

                <div className="total-box">
                  <h4>Total</h4>
                  <h5>$756.98</h5>
                </div>
                <div className="btn-box">
                  <button className="theme-btn" type="button">
                    Proceed to Checkout<span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="coupon-box">
            <div className="form-group">
              <input type="text" name="coupon" placeholder="Apply Coupon" />
              <button type="button">
                <i className="icon-22"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartInfo;
