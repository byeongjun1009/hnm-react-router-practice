import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

  const { id } = useParams();

  const [item, setProduct] = useState(null);

  const getProdectDetail = async () => {
    let url = `https://my-json-server.typicode.com/byeongjun1009/hnm-react-router-practice/products/${id}`
    let res = await fetch(url)
    let data = await res.json()
    setProduct(data)
  }

  useEffect(() => {
    getProdectDetail()
  }, [])

  return (
    <Container className='product-detail'>
      <Row>
        <Col lg={7}>
          <img src={item?.img} alt="" />
        </Col>
        <Col>
          <h3>{item?.title}</h3>
          <div>{item?.price}원</div>
          <Button>구매하기</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail