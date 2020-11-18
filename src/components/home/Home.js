import React  from 'react';
import Hero from './Hero';
import HomeFilms from './HomeFilms';
import HomeProjects from './HomeProjects';
import HomeAboutUs from './HomeAboutUs';
import MissionStatement from './MissionStatement';
import styled from 'styled-components';
import Gallery from './Gallery';
import CurrentProject from './CurrentProject';
import Promoting from './Promoting';

const Home = () => {

  return (
    <>
    <Wrapper>
    <h1>Macedonian</h1>
    <ArtsText><A>A</A><R>R</R><T>T</T><S>S</S></ArtsText>
    <h1>Council</h1>
    </Wrapper>
      <MainFlex>
        <MissionStatement />
        <Gallery />
      </MainFlex>

     

      <Promoting />
      <CurrentProject />
      {/* <Hero /> */}
      <HomeProjects />
      <HomeFilms />
      <HomeAboutUs />
    </>
  )
    

}



const Wrapper = styled.div`
  font-family: 'Merriweather Sans', sans-serif;
  text-align:center;
  padding-bottom: 1rem;
  text-transform: uppercase;
  background:white
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
background: url(http://www.macedonianarts.org/images/slide1.jpg) 50%, 50%;
  
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



const MainFlex = styled.div`
  display: flex;
  height: 50vh;
  min-height: 400px;
  max-height: 750px;
  // flex-wrap: wrap;
  background: white;
  padding-bottom: 1rem;
`

export default Home