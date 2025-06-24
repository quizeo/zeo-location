import React, { useRef } from "react";
import "./Modal.css";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";

interface ModalOverlayProps {
  className?: string;
  style?: React.CSSProperties;
  headerClass?: string;
  header?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  contentClass?: string;
  children?: React.ReactNode;
  footerClass?: string;
  footer?: React.ReactNode;
  show?: boolean;
  onCancel?: () => void;
}

const ModalOverlay = (props: ModalOverlayProps) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDom.createPortal(
    content,
    document.getElementById("modal-hook") as HTMLElement
  );
};

const Modal = (props: ModalOverlayProps) => {
  // Add this ref for CSSTransition
  const nodeRef = useRef(null);

  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel || (() => {})} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
        nodeRef={nodeRef} // Add this prop
      >
        <div ref={nodeRef}>
          <ModalOverlay {...props} />
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
