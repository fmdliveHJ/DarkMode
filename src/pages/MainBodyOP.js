import React from "react";
import styled from "styled-components";
const MainBodyOP = () => {
  return <Box className="mainBody">MainBodyOP</Box>;
};

export default MainBodyOP;
const Box = styled.div`
  &.mainBody {
    height: calc(100% - 80px);
    background-color: lightgrey;
  }
`;
