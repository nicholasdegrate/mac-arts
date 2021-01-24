import React  from 'react';
import Hero from './Hero';
import HomeFilms from './HomeFilms';
import HomeProjects from './HomeProjects';
import HomeAboutUs from './HomeAboutUs';
import MissionStatement from './MissionStatement';
import styled from 'styled-components';
import Gallery from './Gallery';
import CurrentProject from './CurrentProject';
import CompletedProject from './CompletedProject';
import Promoting from './Promoting';
import FilterBar from '../../components/layout/FilterBar';
import Featured from "./Featured";
import FeatSmall1 from "./FeatSmall1"
import FeatSmall2 from "./FeatSmall2"


const Home = () => {

  return (
    <>
      <Wrapper>
        <Styledtext>Macedonian</Styledtext>
        <ArtsText>
          <A>A</A><R>R</R><T>T</T><S>S</S>
        </ArtsText>
        <Styledtext>Council</Styledtext>
      </Wrapper>
      <MissionStatement />
      <Row>
        <Col size={3}>
          <CurrentProject />
        </Col>
        <Col size ={3}>
          <CompletedProject />
        </Col>
      </Row>
      <Row>
        <Wrapper>
          <h1 style={{color:"#9A3B3C"}}>1994-2021</h1>
        </Wrapper>
      </Row>
      <Row><FilterBar page={"home"} /></Row>
      <Row>
        <Col size={2}>
           <Featured />
        </Col>
        <Col size={2}>
          <Row>
          <FeatSmall1/>
          </Row>
          <Row>
         <FeatSmall2/>
          </Row>
        </Col>
      </Row>
    </>
  )
    

}

const Row = styled.div`
  display:flex;
  justify-content:center;
`


const Col = styled.div`
  flex: ${(props)=> props.size};
`

const Styledtext = styled.div `
  font-size: 96px;

`

const Wrapper = styled.div`
  font-family: 'Merriweather Sans', sans-serif;
  text-align:center;
  text-transform: uppercase;
  background:white
  `

const ArtsText =styled.div`
  margin-top: -5%;
  margin-bottom: -5%;
  display:flex;
  justify-content: center;
  font-size: 260px;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  letter-spacing: 20px;
  font-weight: 1100;
  top:50%;
  left: 50%;
`




const A = styled.div`
  background: url(http://www.macedonianarts.org/images/slide10.jpg) 50%, 50%;
    
  background-size:contain;
  -webkit-text-fill-color:
  transparent;
  -webkit-background-clip:text;
`

const R = styled.div`
  background: url(http://www.macedonianarts.org/images/slide5.jpg) 50%, 50%;
    
  background-size:contain;
  -webkit-text-fill-color:
  transparent;
  -webkit-background-clip:text;

`
const T = styled.div`
  background: url(http://www.macedonianarts.org/images/slide1.jpg) 1000%, 90%;
    
  background-size:contain;
  -webkit-text-fill-color:
  transparent;
  -webkit-background-clip:text;
`
const S = styled.div`
background: url(http://www.macedonianarts.org/images/slide2-2.jpg) 50%, 50%;
  
background-size:contain;
-webkit-text-fill-color:
transparent;
-webkit-background-clip:text;

`


export default Home