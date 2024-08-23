import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

  const { id } = useParams();

  const [item, setProduct] = useState(null);
  const [size, setSize] = useState("");

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

  return (
    <Container className='product-detail'>
      <Row>
        <Col>
          <img src={item?.img} alt="" />
        </Col>
        <Col className='product-detail-col2'>
          <div>
            <h3>{item?.title}</h3>
          </div>
          <div>
            {size == "" ?
              <DropdownButton id="dropdown-basic-button" title="사이즈 선택" onSelect={handleSelect} variant="light">
                {item?.size.map((size) => (
                  <Dropdown.Item eventKey={size}>{size}</Dropdown.Item>
                ))}
              </DropdownButton>
              : ""}
          </div>
          <div>
            {size ? size : ""}
          </div>
          <div>{item?.price}원</div>
          <Button className='product-detail-col2-add-btn'>추가하기</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail