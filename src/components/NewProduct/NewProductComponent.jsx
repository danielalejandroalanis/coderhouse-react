import React from 'react'
import { Button } from 'react-bootstrap'

export const NewProductComponent = ({newProduct, onClick}) => {
    
  return (
    <Button className='btn-primary' onClick={onClick}>NewProductComponent</Button>
  )
}
