import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const InstagramSection = () => {
  const images = [
    "/assets/images/resource/instagram-1.jpg",
    "/assets/images/resource/instagram-2.jpg",
    "/assets/images/resource/instagram-3.jpg",
    "/assets/images/resource/instagram-4.jpg",
    "/assets/images/resource/instagram-5.jpg",
    "/assets/images/resource/instagram-6.jpg",
  ];

  const carouselOptions = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 },
    },
  };

  return (
    <section className="instagram-section">
      <div className="outer-container">
        <OwlCarousel className="owl-theme" {...carouselOptions}>
          {images.map((img, index) => (
            <div className="instagram-block-one" key={index}>
              <div className="inner-box">
                <figure className="image-box">
                  <img src={img} alt={`Instagram ${index + 1}`} />
                </figure>
                <div className="text-box">
                  <Link to="#">
                    <img
                      src="/assets/images/icons/icon-10.svg"
                      alt="Instagram Icon"
                      style={{ width: "30px", height: "30px" }}
                    />
                    Follow us on Instagram
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default InstagramSection;
