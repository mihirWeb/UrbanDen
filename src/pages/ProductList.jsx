import styled from "@emotion/styled"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { mobile } from "../../responsive.js";

const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
     @media only screen and (max-width: 500px){ display: flex; flex-direction: column;}
`;

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
     @media only screen and (max-width: 500px){ margin-right: 0px;}
`;

const Select = styled.select`
    padding: 5px 10px;
    margin-right: 20px;
     @media only screen and (max-width: 500px){ margin: 10px 0px; width: 100%}
`;

const Option = styled.option``;

const ProductList = () => {

  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState(["newest"]);

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value
    })
  }

  const handleSort = (e) => {
    setSort(e.target.value);
  }

  return (
    <Container>
        <Announcements />
        <Navbar />
        <Title>{category}</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products: </FilterText>
            <Select name="color" onChange={handleFilter}>
            <Option>
              Color
            </Option>
            <Option value="white">White</Option>
            <Option value="black">Black</Option>
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="green">Green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
            </Filter>

            <Filter><FilterText>Sort Products: </FilterText>
          <Select name="sort" onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
            </Filter>

        </FilterContainer>
        <Products category={category} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList
