
import React from "react";
import Header from "../src/Header";
import Content from "../src/Content";

import { Outlet } from "react-router-dom";
function App() {
    return (
      <>
        <Header />
        <Outlet />
       
        {/* <Content /> */}

      
      </>
    );
}
export default App;