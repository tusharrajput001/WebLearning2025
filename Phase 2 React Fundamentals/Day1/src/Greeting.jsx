import React from "react";

const Greeting = ({ name, message }) => {
  return (
    <div
      style={{
        width: "500px",
        border: "2px solid gray",
        height: "20rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50px",
        boxShadow: "inherit",
        fontFamily: "monospace",
      }}
    >
      Hello {name} your message is {message}.
    </div>
  );
};

export default Greeting;
