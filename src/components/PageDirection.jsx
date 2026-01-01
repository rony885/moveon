import React from "react";

const PageDirection = () => {
  return (
    <div className="page_direction">
      <div className="demo-rtl direction_switch">
        <button className="rtl">RTL</button>
      </div>
      <div className="demo-ltr direction_switch">
        <button className="ltr">LTR</button>
      </div>
    </div>
  );
};

export default PageDirection;
