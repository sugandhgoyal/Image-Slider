import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import Select from "./Select";

const SliderArrows = styled.div`
  position: absolute;
  width: 100%;
  z-index: 3;
  > .arrow.left {
    top: 400px;
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
    top: 400px;
    font-size: 60px;
  }
`;

const SliderItems = styled.div`
  height: 320px;
  justify-content: center;
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
  const categories = ["All", "Beauty", "Clothing", "Accessories"];
  const allProducts = [
    {
      url: "image1.jpeg",
      name: "Product name",
      price: "Rs. 500",
      category: "Beauty"
    },
    {
      url: "image2.jpg",
      name: "Product name",
      price: "Rs. 500",
      category: "Clothing"
    },
    {
      url: "image3.jpeg",
      name: "Product name",
      price: "Rs. 500",
      category: "Beauty"
    },
    {
      url: "image4.jpg",
      name: "Product name",
      price: "Rs. 500",
      category: "Accessories"
    },
    {
      url: "image5.jpeg",
      name: "Product name",
      price: "Rs. 500",
      category: "Beauty"
    },
    {
      url: "image6.jpeg",
      name: "Product name",
      price: "Rs. 500",
      category: "Accessories"
    }
  ];
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    if (products) {
      let allImages = document.getElementsByClassName("slide");
      if (allImages && allImages.length > 0 && allImages[1]) {
        allImages[1].style.boxShadow = "rgb(113 113 123) 7px 10px 14px 0px";
        allImages[1].style.height = "320px";
      }
    }
  }, [products]);

  const slideLeft = () => {
    let lastImage = products.slice(-1);
    let restImages = products.slice(0, -1);
    //Append last image at the starting of the array
    let imagesVal = [...lastImage, ...restImages];
    setProducts(imagesVal);
  };

  const slideRight = () => {
    let [firstImage, ...restImages] = products;
    //Append first image at the last of the array
    let imagesVal = [...restImages, firstImage];
    setProducts(imagesVal);
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
  const handleChange = event => {
    let newProducts = [...allProducts];
    if (event.target.value === "All") {
      setProducts(allProducts);
    } else {
      let imagesVal =
        newProducts &&
        newProducts.filter(product => product.category === event.target.value);
      setProducts(imagesVal);
    }
  };

  const renderSlides = () => {
    return (
      <>
        <SliderItems>
          {products &&
            products.length > 0 &&
            products.map((product, index) => {
              return (
                <Slide
                  image={product.url}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  key={index}
                />
              );
            })}
        </SliderItems>
      </>
    );
  };

  return (
    <div className="slider">
      <span>Filter Products By Category</span>
      <Select onChange={handleChange} categories={categories} />
      {products && products.length > 1 && renderNavigation()}
      {renderSlides()}
    </div>
  );
};

export default Slider;
