import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const ProductDetail = () => {

  function formatCurrency(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const { id } = useParams();

  const [item, setProduct] = useState(null);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1)
  const [shoppingCart, setshoppingCart] = useState(null)

  const getProdectDetail = async () => {
    let url = `https://my-json-server.typicode.com/byeongjun1009/hnm-react-router-practice/products/${id}`
    let res = await fetch(url)
    let data = await res.json()
    setProduct(data)
  }

  const handleSelect = (eventKey) => {
    setSize(eventKey)
  }

  useEffect(() => {
    getProdectDetail()
  }, [])

  const minusQuantity = () => {
    if (quantity > 1) {
      let num = quantity - 1
      setQuantity(num)
    }
  }

  const plusQuantity = () => {
    let num = quantity + 1
    setQuantity(num)
  }

  const shipToShopingCart = () => {
    
  }

  return (
    <Container className='product-detail'>
      <Row>
        <Col>
          <img src={item?.img} alt="" />
        </Col>
        <Col className='product-detail-col2'>
          <div style={{ fontFamily: "sans-serif" }}>
            <h3>{item?.title}</h3>
            <hr />
          </div>
          <div>
            <div style={{ fontFamily: "cursive", fontSize: "30px" }}>
              <strong><sup>\</sup>{item ? formatCurrency(item?.price) : ""}</strong>
            </div>
            <div style={{ marginTop: "20px" }}>
              <DropdownButton id="dropdown-basic-button" title={size == "" ? "사이즈 선택" : `${size}  `} onSelect={handleSelect} variant="light">
                {item?.size.map((size) => (
                  <Dropdown.Item eventKey={size}>{size}</Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
          </div>
          <div className='selectQuantity'>
            <button className='selectQuantity-btn' onClick={minusQuantity}>-</button>
            <div>{quantity}</div>
            <button className='selectQuantity-btn' onClick={plusQuantity}>+</button>
          </div>
          {size ?
            <div>
              <hr />
              <h5>선택된 항목:</h5>
              <strong>
                \ {quantity * item?.price ? formatCurrency(quantity * item?.price) : ""}
              </strong>
            </div>
            : ""
          }
          <button className='product-detail-col2-add-btn'>
            <FontAwesomeIcon icon={faShoppingCart} /> 장바구니에 추가하기</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail