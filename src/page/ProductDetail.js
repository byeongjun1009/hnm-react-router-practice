import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

  const {id} = useParams();

  return (
    <div>
        <h1>제품상세페이지 {id}</h1>
    </div>
  )
}

export default ProductDetail