import React from "react";
import styled from "styled-components";

const GlobalGnb = () => {
  return <Box className="GlobalGnb">GlobalGnb</Box>;
};

export default GlobalGnb;

const Box = styled.div`
  &.GlobalGnb {
    height: 100vh;
    min-width: 80px;
    background-color: pink;
  }
`;
