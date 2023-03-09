import React from 'react'

const NavItem = ({label, src}) => {
  return (
    <a href={src}>{label}</a>
  )
}

export default NavItem