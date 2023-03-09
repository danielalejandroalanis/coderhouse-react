import React from "react";
import { NavBarComponent } from "../components";

export const MainLayout = ({ children }) => {
  const mainLayoutStyles = {
    backgroundColor: "#1f1b24",
    color: "white",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
  };
  const navWrapperStyles = {
    height: "10vh",
    width: "100vw",
  }
  const childrenStyles = {
    height: "90vh",
    width: "100vw",
  }
  return (
    <div style={mainLayoutStyles}>
      <div className={navWrapperStyles}>
        <NavBarComponent />
      </div>
      <div style={childrenStyles}>{children}</div>
    </div>
  );
};
