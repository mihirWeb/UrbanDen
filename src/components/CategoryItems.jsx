import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import { mobile } from '../../responsive.js'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
     @media only screen and (max-width: 412px){ height: 40vh;}
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${'' /*  @media only screen and (max-width: 412px){ flex-direction: row; } */}
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;

`

const CategoryItems = ({item}) => {
  return (
    <Container>
    <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Link>
    </Container>
  )
}

export default CategoryItems
