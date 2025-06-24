import React, { useRef } from "react";
import "./SideDrawer.css";
import ReactD0M from "react-dom";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props: {
  children: React.ReactNode;
  show?: boolean;
  onClick: () => void;
}) => {
  const nodeRef = useRef(null);
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <aside ref={nodeRef} className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactD0M.createPortal(
    content,
    document.getElementById("drawer-hook")!
  );
};

export default SideDrawer;
