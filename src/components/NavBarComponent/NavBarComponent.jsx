import React from "react";
import NavItem from "./NavItem";
import styles from "./NavComponent.module.css";
import { SearchBarComponent } from "../";

export const NavBarComponent = () => {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <div className={styles.navItems}>
            <NavItem label="Home" src="#" />
            <NavItem label="Ofertas" src="#" />
            <NavItem label="Hombre" src="#" />
            <NavItem label="Mujer" src="#" />
            <SearchBarComponent type="text" value="default" />
          </div>
        </nav>
      </header>
    </>
  );
};
