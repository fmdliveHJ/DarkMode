import React from "react";
import styled from "styled-components";

const GlobalHeader = ({ toggleDark }) => {
  return (
    <Box className="GlobalHeader">
      <button onClick={(e) => toggleDark(0)}>light</button>
      <button onClick={(e) => toggleDark(1)}>dark</button>
      <button onClick={(e) => toggleDark(2)}>dark-yellow</button>
      <button onClick={(e) => toggleDark(3)}>dark-blue</button>
      header
    </Box>
  );
};

export default GlobalHeader;

const Box = styled.div`
  &.GlobalHeader {
    height: 80px;
    width: 100%;
    background-color: lightblue;
    button {
      min-width: 80px;
      height: 20px;
    }
  }
`;
