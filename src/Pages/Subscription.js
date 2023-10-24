import React from "react";
import { MdOutlineDone } from "react-icons/md";
import "../css/Subscription.css";
const Subscription = () => {
  return (
    <div className="main_subsrciption">
      <h1>Choose the plan that’s right for you</h1>
      <div className="para_subsription">
        <div className="elements_para_sub">
          <MdOutlineDone className="icons_sub" />
          Watch all you want. Ad-free.
        </div>
        <div className="elements_para_sub">
          <MdOutlineDone className="icons_sub" />
          Recommendations just for you.
        </div>
        <div className="elements_para_sub">
          <MdOutlineDone className="icons_sub" />
          Change or cancel your plan anytime
        </div>
      </div>

      <div className="icons_subscription">
        <div className="mobile_sub" style={{ backgroundColor: "#e95353" }}>
          Mobile
        </div>

        <div className="basic_sub" style={{ backgroundColor: "#e95353" }}>
          {" "}
          Basic
        </div>
        <div className="standard_sub" style={{ backgroundColor: "#d26f6f" }}>
          Standard
        </div>
        <div className="premium_sub" style={{ backgroundColor: "#f91a1a" }}>
          Premium
        </div>
      </div>

      <div className="lists_subscription">
        <div className="list_sub">
          <div className="header">Monthly price</div>
          <div className="price">$149</div>
          <div className="price">$149</div>
          <div className="price">$149</div>
          <div className="price">$149</div>
        </div>
        <div className="list_sub">
          <div className="header">Video quality</div>
          <div className="price">Good</div>
          <div className="price">Good</div>
          <div className="price">Better</div>
          <div className="price">Best</div>
        </div>

        <div className="list_sub">
          <div className="header">Resolution</div>
          <div className="price">480p</div>
          <div className="price">720p</div>
          <div className="price">1080p</div>
          <div className="price">4K+HDR</div>
        </div>
        <div className="list_sub">
          <div className="header">Devices you can use to watch</div>
          <div className="price">Phone Tablet</div>
          <div className="price">Phone Tablet</div>
          <div className="price">Phone Tablet</div>
          <div className="price">Phone Tablet</div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
