import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg";

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>GreenLife - Houseplants For Your Home</h1>
      <p>We bring the best plants to brighten your living space 🌿</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
