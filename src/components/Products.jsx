import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import { popularProducts } from '../data';
import ProductItem from './ProductItem';
import axios from "axios";

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    @media only screen and (max-width: 500px){
      padding: 0 0;
      width: 100vw;
      position: relative;
      flex-direction: row;
    }
`

const Products = (props) => {
  // console.log(category, filters, sort);
  const category = props.category;
  const filters = props.filters;
  const sort = props.sort;
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async() => {
      try {
        const res = await axios.get(category? `https://urbandenapi.onrender.com/api/v2/products?category=${category}`: "https://urbandenapi.onrender.com/api/v2/products");
        setProducts(res.data);
        // console.log("setProducts: "+ products);
      } catch (error) {
        
      }
    }
    getProducts();
  }, [category]);


  useEffect(() => {
    category &&
      setFilterProducts(
        products.filter((item) => {
          return Object.entries(filters).every(([key, value]) => item[key] && item[key].includes(value));
        }))
      // : setProducts(
      //   products.filter((item) => Object.entries(filters).every(([key, value]) => item[key] && item[key].includes(value)))
      // )
  }, [category, products, filters])


    useEffect(() => {
      if(category){
        if(sort === "newest"){
          setFilterProducts((prev) => 
            [...prev].sort((a,b) => a.createdAt - b.createdAt)
          )
        } else if(sort === "asc"){
          setFilterProducts((prev) => 
            [...prev].sort((a,b) => a.price - b.price)
          )
        } else if(sort === "desc"){
          setFilterProducts((prev) => 
            [...prev].sort((a,b) => b.price - a.price)
          )
        }
      } else{
        if(sort === "newest"){
          setProducts((prev) => 
            [...prev].sort((a,b) => a.createdAt - b.createdAt)
          )
        } else if(sort === "asc"){
          setProducts((prev) => 
            [...prev].sort((a,b) => a.price - b.price)
          )
        } else if(sort === "desc"){
          setProducts((prev) => 
            [...prev].sort((a,b) => b.price - a.price)
          )
        }
      }
    }, [sort]);

  // useEffect(() => {
  //   let filteredProducts = products;
  
  //   if (Object.keys(filters).length > 0) {
  //     filteredProducts = filteredProducts.filter((item) => {
  //       return Object.entries(filters).every(([key, value]) => item[key] && item[key].includes(value));
  //     });
  //   }
  
  //   if (sort === "newest") {
  //     filteredProducts = filteredProducts.sort((a, b) => a.createdAt - b.createdAt);
  //   } else if (sort === "asc") {
  //     filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  //   } else if (sort === "desc") {
  //     filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  //   }
  
  //   if (category) {
  //     setFilterProducts(filteredProducts);
  //   } else {
  //     setProducts(filteredProducts);
  //   }
  // }, [category, products, filters, sort]);

  useEffect(() => {
    console.log(filterProducts);
  }, [filterProducts]);

  return (
    <Container>
        {category
        ? filterProducts.map(item => (<ProductItem item={item} key={item.key} style={{flexBasis: "50%"}} />))
        : products.map(item => (<ProductItem item={item} key={item.key} style={{flexBasis: "50%"}}/>))
        }    
        {
          products.length === 0 && <h1 style={{textAlign: "center"}}>"{category} are out of stock :("</h1>
        }  
    </Container>
  )
}

export default Products
