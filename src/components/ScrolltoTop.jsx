// import React from "react";

// const ScrolltoTop = () => {
//   return (
//     <div className="scroll-to-top">
//       <svg className="scroll-top-inner" viewBox="-1 -1 102 102">
//         <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
//       </svg>
//     </div>
//   );
// };

// export default ScrolltoTop;

import React, { useEffect, useState, useRef } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathRef = useRef(null);
  const pathLengthRef = useRef(0);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();
    pathLengthRef.current = pathLength;

    // Initial setup of SVG stroke
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength.toString();
    path.style.transition = "stroke-dashoffset 10ms linear";

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const dashOffset = pathLength - (scrollTop * pathLength) / docHeight;
      path.style.strokeDashoffset = dashOffset;

      // Show button after 50px scroll
      setIsVisible(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? "scroll-top-active" : ""}`}
      onClick={scrollToTop}
      style={{ cursor: "pointer" }}
    >
      <svg className="scroll-top-inner" viewBox="-1 -1 102 102">
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
};

export default ScrollToTop;
