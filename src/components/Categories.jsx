import React from 'react'
import CategoryItems from './CategoryItems'
import { categories } from '../data'
import styled from '@emotion/styled'
import { mobile } from '../../responsive.js'

const Container =  styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
     @media only screen and (max-width: 500px){ padding: 0px; flex-direction: column;}
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <CategoryItems item={item} key={item.key} />
        ))}
      
    </Container>
  )
}

export default Categories
