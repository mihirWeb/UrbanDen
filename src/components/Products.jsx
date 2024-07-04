import React from 'react'
import styled from "@emotion/styled";
import { popularProducts } from '../data';
import ProductItem from './ProductItem';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map(item => (
            <ProductItem item={item} key={item.key}/>
        ))}      
    </Container>
  )
}

export default Products
