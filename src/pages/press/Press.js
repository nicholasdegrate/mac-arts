import React from 'react';
import styled from 'styled-components'



//images
import Article1 from "./press images/article1.jpg"
import Article2 from "./press images/article2.jpg"
import Article3 from "./press images/article3.jpg"
import Article4 from "./press images/article4a1.jpg"
import Article4a from "./press images/article4a2.jpg"
import Article5 from "./press images/article5.jpg"
import Article6 from "./press images/article6.jpg"
import Article7 from "./press images/article7.jpg"
import Article8 from "./press images/article8.jpg"
import Article9 from "./press images/article9.jpg"
import Article10 from "./press images/article10.jpg"
import Article11 from "./press images/article11.jpg"
import Article12 from "./press images/article12.jpg"
import Article15 from "./press images/article15.jpg"
import Article16 from "./press images/article16.jpg"
import ArticleA1 from "./press images/articlea1.jpg"
import ArticleA2 from "./press images/articlea2.jpg"
import ArticleB1 from "./press images/articleb1.jpg"
import ArticleB2 from "./press images/articleb2.jpg"
import ArticleC1 from "./press images/articlec1.jpg"
import ArticleC2 from "./press images/articlec2.jpg"


const Press = () => {
   
const articles =[
    Article1,
    Article2,
    Article3,
    Article4,
    Article4a,
    Article5,
    Article6,
    Article7,
    Article8,
    Article9,
    Article10,
    Article11,
    Article12,
    Article15,
    Article16,
    ArticleA1,
    ArticleA2,
    ArticleB1,
    ArticleB2,
    ArticleC1,
    ArticleC2,
    


]   

const renderArticles = () =>{
    return articles.map((article,i)=>(
        <Row>
        <PressImage  key ={i} url={article} />
        </Row>
    ))
}


return(
    <div>
    <Wrapper>
    <h1>Macedonian</h1>
    <ArtsText>
      <P>P</P><R>R</R><E>E</E><S1>S</S1><S2>S</S2>
    </ArtsText>
    <h1>Council</h1>
  </Wrapper>
    
    {renderArticles()}
   
   


    </div>
)
    
}

const Row = styled.div`
  display:flex;
  justify-content:center;
`

const Wrapper = styled.div`
  font-family: 'Merriweather Sans', sans-serif;
  text-align:center;
  padding-bottom: 1rem;
  text-transform: uppercase;
  background:white;
  color:#9A3B3C;
  `

  const ArtsText =styled.div`
  display:flex;
  justify-content: center;
  font-size: 150px;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  letter-spacing: 20px;
  font-weight: 1100;
  top:50%;
  left: 50%;
`


const P = styled.div`
  background: url(${Article1}) 50%, 50%;
    
  background-size:contain;
  -webkit-text-fill-color:
  transparent;
  -webkit-background-clip:text;
`

const R = styled.div`
  background: url(${Article2}) 50%, 50%;
    
  background-size:contain;
  -webkit-text-fill-color:
  transparent;
  -webkit-background-clip:text;

`
const E = styled.div`
  background: url(${Article3}) 1000%, 90%;
    
  background-size:contain;
  -webkit-text-fill-color:
  transparent;
  -webkit-background-clip:text;
`
const S1 = styled.div`
background: url(${Article4}) 50%, 50%;
  
background-size:contain;
-webkit-text-fill-color:
transparent;
-webkit-background-clip:text;

`

const S2 = styled.div`
background: url(${Article4a}) 50%, 50%;
  
background-size:contain;
-webkit-text-fill-color:
transparent;
-webkit-background-clip:text;

`


const PressImage = styled.div`
    height:600px;
    width:600px;
    margin:2.5%;
    border: solid  #9A3B3C 5px;
    border-radius: 15px;
    background-image: url(${(props) => props.url});
`;



export default Press