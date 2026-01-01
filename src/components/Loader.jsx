import React from "react";

const Loader = () => {
  return (
    <div className="loader-wrap">
      <div className="preloader">
        <div className="preloader-close">
          <i className="icon-9"></i>
        </div>
        <div id="handle-preloader" className="handle-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="n" className="letters-loading">
                {" "}
                n{" "}
              </span>
              <span data-text-preloader="e" className="letters-loading">
                {" "}
                e{" "}
              </span>
              <span data-text-preloader="x" className="letters-loading">
                {" "}
                x{" "}
              </span>
              <span data-text-preloader="m" className="letters-loading">
                {" "}
                m{" "}
              </span>
              <span data-text-preloader="a" className="letters-loading">
                {" "}
                a{" "}
              </span>
              <span data-text-preloader="r" className="letters-loading">
                {" "}
                r{" "}
              </span>
              <span data-text-preloader="t" className="letters-loading">
                {" "}
                t{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
