import React from 'react'
import NavItem from './NavItem'
import styles from "./NavComponent.module.css"
export const NavBarComponent = () => {
  return (
    <nav className={styles.nav}>
      <header>Tienda Daniel</header>
      <div className={styles.navItems}>
        <NavItem label="Home" src="#" />
        <NavItem label="Ofertas" src="#" />
        <NavItem label="Hombre" src="#" />
        <NavItem label="Mujer" src="#" />
      </div>
    </nav>
  )
}