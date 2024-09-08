import React from "react";
import NavigationBar from "../navigationBar/navigationBar";
import SideBar from "../sideBar/sideBar";
import "../../index.css";
import CenterLayout from "./centerLayout";
function RightLayout({ children }) {
  return (
    <>
      <div className="z-9 p-3 w-300px fixed top-24 box-border right-10 bottom-0 overflow-y-auto no-scrollbar">
        <>{children}</>
      </div>
    </>
  );
}

export default RightLayout;
