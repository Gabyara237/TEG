import React from "react";
import "./FeaturedInfo.scss";

export function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredLeft">
          <span className="featuredTitle">Peru</span>
          <div className="featuredNumberContainer">
            <span className="featuredNumber"> 20</span>
            <span className="featuredNumberRate"> 3 new engineers </span>
          </div>
          See more
        </div>
      </div>

      <div className="featuredItem">
        <div className="featuredLeft">
          <span className="featuredTitle">Chile</span>
          <div className="featuredNumberContainer">
            <span className="featuredNumber"> 12</span>
            <span className="featuredNumberRate"> 3 new engineers</span>
          </div>
          See more
        </div>
      </div>

      <div className="featuredItem">
        <div className="featuredLeft">
          <span className="featuredTitle">Argentina</span>
          <div className="featuredNumberContainer">
            <span className="featuredNumber"> 2</span>
            <span className="featuredNumberRate"> 3 new engineers</span>
          </div>
          See more
        </div>
      </div>
    </div>
  );
}
