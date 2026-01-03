import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const newsItems = [
    {
      id: 1,
      img: "assets/images/news/news-1.jpg",
      category: "Virtual",
      author: "Alex Beniwal",
      title:
        "Feel like you’re actually experiencing the action in real life with the VR",
      delay: "00ms",
    },
    {
      id: 2,
      img: "assets/images/news/news-2.jpg",
      category: "Mobile",
      author: "Haris Gulati",
      title: "Smartphones have largely replaced personal digital assistant",
      delay: "200ms",
    },
    {
      id: 3,
      img: "assets/images/news/news-3.jpg",
      category: "Virtual",
      author: "Alex Hels",
      title:
        "It sports crisp, transparent visuals and uses Link 5.7-inch 1080p OLED",
      delay: "400ms",
    },
    {
      id: 4,
      img: "assets/images/news/news-4.jpg",
      category: "Wireless",
      author: "Mical Von",
      title: "Wireless communications is the transmission of voice and data",
      delay: "600ms",
    },
  ];

  return (
    <section className="news-section pb_45">
      <div className="large-container">
        {/* Section Title */}
        <div className="sec-title">
          <h2>Latest News</h2>
          <Link to="/blog">View All News</Link>
        </div>

        {/* News Blocks */}
        <div className="row clearfix">
          {newsItems.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 news-block" key={index}>
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay={item.delay}
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/blog-details">
                        <img src={item.img} alt={item.title} />
                      </Link>
                    </figure>
                  </div>
                  <div className="lower-content">
                    <ul className="post-info">
                      <li className="category">
                        <Link to="/blog-details">{item.category}</Link>
                      </li>
                      <li>
                        By <Link to="/blog-details">{item.author}</Link>
                      </li>
                    </ul>
                    <h3>
                      <Link to="/blog-details">{item.title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
