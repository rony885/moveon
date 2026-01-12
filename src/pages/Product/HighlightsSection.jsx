import React from "react";

const highlightsData = [
  {
    icon: "icon-23",
    title: "Same day Product Delivery",
  },
  {
    icon: "icon-17",
    title: "100% Customer Satisfaction",
  },
  {
    icon: "icon-25",
    title: "Help and access is our mission",
  },
  {
    icon: "icon-38",
    title: "100% quality Car Accessories",
  },
  {
    icon: "icon-27",
    title: "24/7 Support for Clients",
  },
];

const HighlightsSection = () => {
  return (
    <section className="highlights-section inner-highlights">
      <div className="large-container">
        <div className="inner-container clearfix">
          {/* Background Shape */}
          <div
            className="shape"
            style={{
              backgroundImage: "url('/assets/images/shape/shape-5.png')",
            }}
          />

          {/* Highlights Items */}
          {highlightsData.map((item, index) => (
            <div className="highlights-block-one" key={index}>
              <div className="inner-box">
                <div className="icon-box">
                  <i className={item.icon}></i>
                </div>
                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
