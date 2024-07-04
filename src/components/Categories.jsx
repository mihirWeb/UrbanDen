import React from 'react'
import CategoryItems from './CategoryItems'
import { categories } from '../data'
import styled from '@emotion/styled'

const Container =  styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
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
