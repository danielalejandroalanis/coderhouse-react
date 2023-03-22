import React from 'react'
import NavItem from './NavItem'
import styles from "./NavComponent.module.css"
export const NavBarComponent = () => {
  return (
    <nav className={styles.nav}>
      <header>Tienda Daniel</header>
      <div className={styles.navItems}>
        <NavItem label="Home" src="/" />
        <NavItem label="Ofertas" src="/ofertas" />
        <NavItem label="Producto" src="/products" />
        <NavItem label="Mujer" src="#" />
      </div>
    </nav>
  )
}