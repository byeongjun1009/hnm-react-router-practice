import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
    let searchQuery=query.get('q') || "";
      let url = `https://my-json-server.typicode.com/byeongjun1009/hnm-react-router-practice/products?q=${searchQuery}`;
      let response = await fetch(url)
      let data = await response.json();
      setProductList(data)
    }
    
    // api 호출 항상 useEffect에서 함.
    useEffect(() => {
      getProducts()
    }, [query])

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