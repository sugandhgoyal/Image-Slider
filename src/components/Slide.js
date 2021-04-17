import React from "react";
import styled from "styled-components";

const Card = styled.div``;

const Name = styled.div`
  font-weight: 500;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: grey;
  margin: 3px 0;
`;

const Category = styled.div``;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 94%;
  margin-top: 230px;
  padding: 10px;
  justify-content: space-between;
  align-items: flex-start;
`;

const Slider = ({ image, name, price, category }) => {
  const backgroundImage = require(`../assets/${image}`);
  const styles = {
    backgroundImage: `url(${backgroundImage.default})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    float: "left",
    width: "300px",
    height: "300px",
    backgroundSize: "cover"
  };
  return (
    <Card className="slide" style={styles}>
      <CardDetails>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <Category>{category}</Category>
      </CardDetails>
    </Card>
  );
};

export default Slider;
