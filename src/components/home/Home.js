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
    <ArtsText>Arts</ArtsText>
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
    font-size: 150px;
    text-transform: uppercase;
    letter-spacing: 20px;
    font-weight: 1000;
    top:50%;
    left: 50%;
    
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