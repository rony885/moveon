import React from "react";
import { Link } from "react-router-dom";

const brands = [
  { id: 1, img: "/assets/images/clients/clients-1.png" },
  { id: 2, img: "/assets/images/clients/clients-2.png" },
  { id: 3, img: "/assets/images/clients/clients-3.png" },
  { id: 4, img: "/assets/images/clients/clients-4.png" },
  { id: 5, img: "/assets/images/clients/clients-5.png" },
  { id: 6, img: "/assets/images/clients/clients-6.png" },
  { id: 7, img: "/assets/images/clients/clients-7.png" },
  { id: 8, img: "/assets/images/clients/clients-8.png" },
  { id: 9, img: "/assets/images/clients/clients-9.png" },
  { id: 10, img: "/assets/images/clients/clients-10.png" },
  { id: 11, img: "/assets/images/clients/clients-11.png" },
  { id: 12, img: "/assets/images/clients/clients-12.png" },
];

const ClientsSection = () => {
  return (
    <section className="clients-section pb_70">
      <div className="large-container">
        <div className="sec-title">
          <h2>Shop by Brands</h2>
          <Link to="/">View All Brands</Link>
        </div>

        <ul className="clients-list clearfix">
          {brands.map((brand) => (
            <li key={brand.id}>
              <Link to="/">
                <img src={brand.img} alt="Brand Imagee" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClientsSection;
