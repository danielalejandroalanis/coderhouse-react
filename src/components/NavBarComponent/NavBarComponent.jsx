import React, { useContext } from "react";
import NavItem from "./NavItem";
import styles from "./NavComponent.module.css";

import { CartComponent } from "../CartComponent/CartComponent";
import { ThemeContext } from "../../context";

import { Button } from "react-bootstrap";

export const NavBarComponent = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.nav}>
      <header>Tienda Daniel</header>
      <div className={styles.navItems}>
        <NavItem label="Home" src="/" />
        <NavItem label="Productos" src="/products" />
        <NavItem label="Ofertas" src="/ofertas" />
        <NavItem label={<CartComponent />} src="/cart" />
        <Button onClick={() => setIsDarkTheme(!isDarkTheme)}>
          {isDarkTheme ? "Light" : "Dark"}
        </Button>
      </div>
    </nav>
  );
};
