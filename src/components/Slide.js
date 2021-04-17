import React from "react";

const Slider = ({ image }) => {
  const backgroundImage = require(`../assets/${image}`);
  const styles = {
    backgroundImage: `url(${backgroundImage.default})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    float: "left",
    width: `300px`,
    height: `300px`
  };
  return <div className="slide" style={styles}></div>;
};

export default Slider;
