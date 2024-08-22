import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ authenticate, productList }) => {
  return (
    authenticate == true ? <ProductDetail productList={ productList } /> : <Navigate to="/login" />
  )
}

export default PrivateRoute