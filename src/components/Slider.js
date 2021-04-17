import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import styled from "styled-components";

const SliderArrows = styled.div`
  position: absolute;
  width: 100%;
  z-index: 3;
  > .arrow.left {
    top: 150px;
    left: 0;
    font-size: 60px;
  }
  a {
    cursor: pointer;
    display: block;
    opacity: 0.8;
    position: absolute;
  }
  > .arrow.right {
    right: 0;
    top: 150px;
    font-size: 60px;
  }
`;

const SliderItems = styled.div`
  height: 320px;
  width: 80%;
  margin: 20% auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: center;
  .slide {
    height: 300px;
    background-size: cover;
    background-position: center;
    border: 1px solid #eee8e8;
    margin-bottom: 20px;
  }
`;

const Slider = () => {
  const [images, setimages] = useState([
    "image1.png",
    "image2.jpg",
    "image3.png",
    "image4.jpg",
    "image5.jpg"
  ]);

  useEffect(() => {
    if (images) {
      let allImages = document.getElementsByClassName("slide");
      if (allImages && allImages.length > 0) {
        allImages[1].style.boxShadow = "rgb(113 113 123) 7px 10px 14px 0px";
        allImages[1].style.height = "320px";
      }
    }
  }, [images]);

  const slideLeft = () => {
    let last = images.slice(-1);
    let rest = images.slice(0, -1);
    let imagesVal = [last, ...rest];
    setimages(imagesVal);
  };

  const slideRight = () => {
    let [first, ...rest] = images;
    let imagesVal = [...rest, first];
    setimages(imagesVal);
  };

  const renderNavigation = () => {
    return (
      <SliderArrows>
        <a className="arrow left" onClick={() => slideLeft()}>
          ❮
        </a>
        <a className="arrow right" onClick={() => slideRight()}>
          ❯
        </a>
      </SliderArrows>
    );
  };
  const renderSlides = () => {
    return (
      <SliderItems>
        {images &&
          images.length > 0 &&
          images.map((image, index) => {
            return <Slide image={image} width={300} height={300} key={index} />;
          })}
      </SliderItems>
    );
  };

  return (
    <div className="slider">
      {renderNavigation()}
      {renderSlides()}
    </div>
  );
};

export default Slider;
