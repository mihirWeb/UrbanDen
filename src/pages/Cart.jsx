import { Add, Remove } from "@mui/icons-material";
import styled from "@emotion/styled";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, removeSingleProduct } from "../Redux/cartRedux";
import {Link} from "react-router-dom"
// import {mobile} from "../../responsive.js"
import { addSingleProduct } from "../Redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
   @media only screen and (max-width: 480px){ padding: 10px;}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
 @media only screen and (max-width: 480px){ display: none;}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
   @media only screen and (max-width: 480px){ flex-direction: column;}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
   @media only screen and (max-width: 480px){ flex-direction: column;}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (max-width: 480px){
    font-size: 13px;
  }
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px){
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
  }
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 480px){
    margin-bottom: 10px;
    margin-top: 8px;
  }
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
   @media only screen and (max-width: 480px){ margin: 5px 15px}
  `;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
   @media only screen and (max-width: 480px){ margin-bottom: "20px"}  
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.a`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  // console.log(cart);

  const handleAddBtn = (id) => {
    dispatch(addSingleProduct(id));
  }

  const handleRemoveBtn = (id) => {
    dispatch(removeSingleProduct(id));
  }
  

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to={'/products'}><TopButton>CONTINUE SHOPPING</TopButton></Link>
          <TopTexts>
            <TopText>Shopping Bag({cart.quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <span>
              <Product>
              <Link to={`/product/${product._id}`} style={{textDecoration: "none", color: "black"}} >
                <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title.toUpperCase()}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              </Link>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add onClick={() => handleAddBtn(product._id)} style={{cursor: "pointer"}}/>
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove onClick={() => handleRemoveBtn(product._id)} style={{cursor: "pointer"}}/>
                </ProductAmountContainer>
                <ProductPrice>{product.price}</ProductPrice>
              </PriceDetail>
              </Product>
            <Hr />
              </span>
            ))}
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ {cart.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ {cart.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;