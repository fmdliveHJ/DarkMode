import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const MainBody = () => {
  return (
    <Box className="mainBody">
      MainBody <Link to="/home">home</Link>
    </Box>
  );
};

export default MainBody;
const Box = styled.div`
  &.mainBody {
    height: calc(100% - 80px);
    background-color: lightcoral;
  }
`;
