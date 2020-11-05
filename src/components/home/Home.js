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