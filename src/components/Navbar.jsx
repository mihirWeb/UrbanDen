import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styled from '@emotion/styled';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: Center 

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: Center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: Center;
    margin-left: 25px;
    padding: 5px
`

const Input = styled.input`
  border: none;
`

const Logo = styled.h1`
  font-weight: bold;
  font-size: 
`

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
`

const Navbar = () => {

  const cartItems = useSelector(state => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
            <Input />
            <Search style={{color: "grey", fontSize: 16}}/>
            </SearchContainer>
        </Left>

        <Center>
          <Logo>UrbanDEN.</Logo>
        </Center>
        
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <Link to={'/cart'}>
          <MenuItem>
            <Badge badgeContent={cartItems} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
