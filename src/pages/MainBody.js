import React from "react";
import styled from "styled-components";
const MainBody = () => {
  return <Box className="mainBody">MainBody</Box>;
};

export default MainBody;
const Box = styled.div`
  &.mainBody {
    height: calc(100% - 80px);
    background-color: lightcoral;
  }
`;
