import React from 'react'
import styled from "@emotion/styled"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    &:hover {
        opacity: 1;
    }
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

`

// const Circle = styled.div`
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     background-color: white;
//     position: absolute;
// `
const Image = styled.img`
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`


const ProductItem = (props) => {
    const item = props.item;
    console.log(item);
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
            <Link to={`/product/${item._id}`}>
                <SearchOutlined />
            </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>    
    </Container>
  )
}

export default ProductItem