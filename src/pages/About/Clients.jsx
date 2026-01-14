import React from "react";
import { Link } from "react-router-dom";

const Clients = () => {
  const clientLogos = [
    "/assets/images/clients/clients-1.png",
    "/assets/images/clients/clients-2.png",
    "/assets/images/clients/clients-3.png",
    "/assets/images/clients/clients-4.png",
    "/assets/images/clients/clients-5.png",
    "/assets/images/clients/clients-6.png",
    "/assets/images/clients/clients-7.png",
    "/assets/images/clients/clients-8.png",
    "/assets/images/clients/clients-9.png",
    "/assets/images/clients/clients-10.png",
    "/assets/images/clients/clients-11.png",
    "/assets/images/clients/clients-12.png",
  ];

  return (
    <section className="clients-section pt_70 pb_150">
      <div className="large-container">
        <div className="sec-title">
          <h2>Shop by Brands</h2>
          <Link to="/">View All Brands</Link>
        </div>
        <ul className="clients-list clearfix">
          {clientLogos.map((logo, index) => (
            <li key={index}>
              <Link to="/">
                <img src={logo} alt={`Client ${index + 1}`} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
