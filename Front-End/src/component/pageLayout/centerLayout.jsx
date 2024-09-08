import React from "react";
import NavigationBar from "../navigationBar/navigationBar";
import SideBar from "../sideBar/sideBar";
import "../../index.css";
import RightLayout from "./rightLayout";
function CenterLayout({ children }) {
  return (
    <>
      <NavigationBar />
      <SideBar />
      <div className=" no-scrollbar mt-20 ml-64 mr-360px pt-5 min-h-screen z-1">
        {children}
      </div>
    </>
  );
}

export default CenterLayout;
