import React, { useEffect, useState } from "react";
import GlobalGnb from "../components/GlobalGnb";
import GlobalHeader from "../components/GlobalHeader";
import MainBody from "./MainBody";
import styled from "styled-components";
import MainBodyOP from "./MainBodyOP";
import { Route, Routes } from "react-router-dom";

const MainView = () => {
  const [dark, setDark] = useState("");
  const toggleDark = (e) => {
    // setDark((prev) => !prev);
    console.log("e", e);

    switch (e) {
      case 0:
        setDark("light");
        return;
      case 1:
        setDark("dark");
        return;
      case 2:
        setDark("yellow");
        return;
      case 3:
        setDark("blue");
        return;
      default:
        setDark("light");
        return;
    }
  };

  return (
    <Wrapper className={`wrapper ${dark}`}>
      <GlobalGnb />
      <div style={{ width: "100%" }}>
        <GlobalHeader toggleDark={toggleDark} />
        <Routes>
          <Route path="/MainBody" element={<MainBody />}>
            MainBody
          </Route>
          <Route path="/MainBodyOP" element={<MainBodyOP />}>
            MainBodyOP
          </Route>
        </Routes>
      </div>
    </Wrapper>
  );
};

export default MainView;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
