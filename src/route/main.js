import React from "react";
import GoogleTest from "../login/google";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const MainPage = () => {
    

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<GoogleTest />}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
export default MainPage;