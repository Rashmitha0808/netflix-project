import React from "react";
import { Container } from "react-bootstrap";

const Star = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding:'4px',
    fontSize:'0.9rem',
    alignItems: "center",
    height: "100vh",
    width: "100%",
    color: "white",
  
  };
  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "4rem" }}>Coming Soon....</h1>
      <p style={{ fontSize: "1.5rem" }}>
        Something exciting is coming your way. Stay tuned!
      </p>
    </div>
  );
};

export default Star;
