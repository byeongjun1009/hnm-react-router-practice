import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {

  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${ item?.id }`)
  }

  return (
    <div className='product-card' onClick={ showDetail }>
        <img src={ item?.img } alt="" />
        <div>{ item?.choice? "Conscious Choice": " " }</div>
        <div>{ item?.title }</div>
        <div>\{ item?.price }</div>
        <div className='new-tag'>{ item?.new ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard