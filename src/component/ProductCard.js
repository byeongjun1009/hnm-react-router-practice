import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {

  function formatCurrency(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${ item?.id }`)
  }

  return (
    <div className='product-card' onClick={ showDetail }>
        <img src={ item?.img } alt="" />
        <div><u>{ item?.choice? "Conscious Choice!": " " }</u></div>
        <div>{ item?.title }</div>
        <h3 style={{ marginBottom:"10px" }}>\{ item ? formatCurrency(item?.price) : "" }</h3>
        <div className='new-tag'>{ item?.new ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard