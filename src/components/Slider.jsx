import styled from "@emotion/styled"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { sliderItems } from "../data.js"
import { useState } from "react"
import { Link } from "react-router-dom"
import { mobile } from "../../responsive.js"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    ${'' /* background-color: coral; */}
    position: relative;
    overflow: hidden;
     @media only screen and (max-width: 412px){ display: none;}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    ${'' /* To center the items vertically :-*/}
    top: 0;
    bottom: 0;
    margin: auto;

    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #${props=> props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    height: 80%;
    margin: 0 auto;
    width: 50vw;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    width: 50vw;
`

const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px; 
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {

        if(direction === "left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex<2 ? slideIndex+1 : 0)
        }

    }


  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
            <Slide bg={item.bg} key={item.key} >
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        {item.title}
                    </Title>
                    <Description>
                        {item.desc}
                    </Description>
                    <Link to={'/products'}>
                    <Button>
                        SHOP NOW
                    </Button>
                    </Link>
                </InfoContainer>
            </Slide>
        ))}
        </Wrapper>
        <Arrow direction ="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
