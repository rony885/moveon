import React from "react";
import AboutInfo from "./AboutInfo";
import VideoStyle from "./VideoStyle";
import Clients from "./Clients";
import AppsSection from "./AppsSection";
import Testimonial from "./Testimonial";
import InstagramSection from "./InstagramSection";
import HighlightsSection from "../../components/HighlightsSection";

const About = () => {
  return (
    <div>
      <AboutInfo />
      <VideoStyle />
      <Clients />
      <AppsSection />
      <Testimonial />
      <InstagramSection />
      <HighlightsSection />
    </div>
  );
};

export default About;
