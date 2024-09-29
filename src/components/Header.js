import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
          At Little Lemon, we believe in the power of simplicity, freshness, and flavor. 
          Nestled in the heart of the city, our restaurant offers a warm, inviting atmosphere where every meal feels like a delightful escape. 
          Whether you're craving zesty citrus-inspired dishes, farm-fresh salads, or classic comfort food with a twist, we’ve got something to excite your taste buds.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
