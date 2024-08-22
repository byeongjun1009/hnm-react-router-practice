import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAll = ({ productList }) => {

    return (
        <div className='product-all'>
            <Container>
                <Row>
                    {productList.map((menu) => (
                        <Col lg={3}><ProductCard item={menu} /></Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll