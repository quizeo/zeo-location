import React from "react";
import "./SideDrawer.css";
import ReactD0M from "react-dom";

const SideDrawer = (props: { children: React.ReactNode }) => {
  const content = <aside className="side-drawer">{props.children}</aside>;

  return ReactD0M.createPortal(
    content,
    document.getElementById("drawer-hook")!
  );
};

export default SideDrawer;
