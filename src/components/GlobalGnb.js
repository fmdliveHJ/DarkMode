import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const GlobalGnb = () => {
  return (
    <Box className="GlobalGnb">
      <Link to="/MainBody">MainBody</Link>
      <Link to="/MainBodyOP">MainBodyOP</Link>
    </Box>
  );
};

export default GlobalGnb;

const Box = styled.div`
  &.GlobalGnb {
    height: 100vh;
    min-width: 80px;
    background-color: pink;
  }
`;
