import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import { useState } from "react";

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      {isDrawerOpen && <Backdrop onClick={() => setIsDrawerOpen(false)} />}

      <SideDrawer show={isDrawerOpen} onClick={() => setIsDrawerOpen(false)}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="main-navigation__menu-btn"
        >
          <span />
          <span />
          <span />
        </button>

        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>

        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
