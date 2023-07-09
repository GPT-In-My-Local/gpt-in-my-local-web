import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoogleTest from "../login/google";
import DropBox from "../dropbox/Dropbox";

const MainPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleTest />} />
        <Route path="user" element={<DropBox />} />
      </Routes>
    </BrowserRouter>
  );
};
export default MainPage;
