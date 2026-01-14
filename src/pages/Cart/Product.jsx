import React, { useRef } from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    category: "Mobile",
    title: "Iphone 12 Red Color Veriant",
    price: 92.99,
    oldPrice: 83.99,
    img: "/assets/images/shop/shop-10.png",
    discount: "-6%",
    rating: 2,
    inStock: true,
  },
  {
    id: 2,
    category: "Gaming",
    title: "Video Game Stick Lite 4K Console",
    price: 29.99,
    oldPrice: null,
    img: "/assets/images/shop/shop-11.png",
    discount: "Hot",
    rating: 4,
    inStock: true,
  },
  {
    id: 3,
    category: "Storage",
    title: "32GB Camera CCTV Micro SD Memory Card",
    price: 12.99,
    oldPrice: null,
    img: "/assets/images/shop/shop-12.png",
    discount: null,
    rating: 5,
    inStock: false,
  },
  {
    id: 4,
    category: "Music",
    title: "Sony Bluetooth-compatible Speaker Extra",
    price: 45.99,
    oldPrice: null,
    img: "/assets/images/shop/shop-13.png",
    discount: "Hot",
    rating: 2,
    inStock: true,
  },
  {
    id: 5,
    category: "Music",
    title: "JBL Speaker with Bluetooth Built-in Battery",
    price: 59.99,
    oldPrice: null,
    img: "/assets/images/shop/shop-14.png",
    discount: null,
    rating: 5,
    inStock: true,
  },
  {
    id: 6,
    category: "Power",
    title: "Boss Inverter Welding Machine",
    price: 359.99,
    oldPrice: null,
    img: "/assets/images/shop/shop-15.png",
    discount: null,
    rating: 4,
    inStock: true,
  },
];

const Product = () => {
  const carouselRef = useRef();

  const nextSlide = () => {
    carouselRef.current.next();
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  return (
    <Wrapper>
      <section className="shop-two pb_50">
        <div className="large-container">
          <div className="sec-title" style={{ position: "relative" }}>
            <h2>Today’s popular picks</h2>

            <div
              className="carousel-buttons"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                onClick={prevSlide}
                className="carousel-btn"
                aria-label="Previous"
              >
                <i className="fas fa-angle-left"></i>
              </button>

              <button
                onClick={nextSlide}
                className="carousel-btn"
                aria-label="Next"
              >
                <i className="fas fa-angle-right"></i>
              </button>
            </div>
          </div>

          <OwlCarousel
            ref={carouselRef}
            className="shop-carousel owl-theme"
            loop
            margin={20}
            nav={false} // Hide default buttons
            dots={false}
            responsive={{
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 4 },
            }}
          >
            {products.map((product) => (
              <div className="shop-block-two" key={product.id}>
                <div className="inner-box">
                  <div className="image-box">
                    {product.discount && (
                      <span
                        className={`discount-badge ${
                          product.discount === "Hot" ? "hot" : "sale"
                        }`}
                      >
                        {product.discount}
                      </span>
                    )}

                    <ul className="option-list">
                      <li>
                        <Link
                          to={product.img}
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
                      <img src={product.img} alt={product.title} />
                    </figure>
                  </div>

                  <div className="lower-content">
                    <span className="text">{product.category}</span>
                    <h4>
                      <Link to="/shop-details">{product.title}</Link>
                    </h4>
                    <h5>
                      ${product.price}
                      {product.oldPrice && <del>${product.oldPrice}</del>}
                    </h5>

                    <ul className="rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <li key={i}>
                          <i className="icon-11"></i>
                        </li>
                      ))}
                      <li>
                        <span>({product.rating})</span>
                      </li>
                    </ul>

                    <span
                      className={
                        product.inStock ? "product-stock" : "product-stock-out"
                      }
                    >
                      <img
                        src={`/assets/images/icons/${
                          product.inStock ? "icon-1.png" : "icon-2.png"
                        }`}
                        alt=""
                        style={{ width: "20px", height: "30px" }}
                      />{" "}
                      {product.inStock ? "In Stock" : "Stock Out"}
                    </span>

                    <div className="cart-btn">
                      <button
                        type="button"
                        className={`theme-btn ${!product.inStock ? "not" : ""}`}
                      >
                        {product.inStock ? "Add to Cart" : "Not Available"}
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
          </OwlCarousel>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .carousel-btn {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid #e5e5e5;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .carousel-btn i {
    font-size: 18px;
    color: #111;
  }

  .carousel-btn:hover {
    background: #111;
    border-color: #111;
  }

  .carousel-btn:hover i {
    color: #fff;
  }

  .discount-badge {
    position: absolute;
    left: 0;
    top: 7px;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    border-radius: 50px;
    text-transform: uppercase;
  }

  .discount-badge.sale {
    background-color: #10cb23; /* Green for -6% */
  }

  .discount-badge.hot {
    background-color: #ff0000; /* Red for Hot */
  }
`;

export default Product;
