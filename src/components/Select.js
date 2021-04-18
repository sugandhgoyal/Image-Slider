import React from "react";
import styled from "styled-components";

const SelectComponent = styled.select`
  margin: 10px auto;
  padding: 10px;
  display: block;
`;

export default function Select({ onChange, categories }) {
  return (
    <SelectComponent name="categories" onChange={onChange}>
      {categories &&
        categories.map(category => (
          <option value={category}>{category}</option>
        ))}
    </SelectComponent>
  );
}
