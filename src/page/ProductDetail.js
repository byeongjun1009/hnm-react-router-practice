import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = ({ productList }) => {

  const { id } = useParams();

  const item = productList.find(item => item.id === id);

  return (
    <div className='product-detail'>
      <Container>
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
    </div>
  )
}

export default ProductDetail