import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.png";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Հայկական ուտեստններ</h1>
          <Link to="/menu">
            <button>Պատվիրել</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;