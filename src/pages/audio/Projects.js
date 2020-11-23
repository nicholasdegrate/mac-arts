import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FilterBar from '../../components/navbar/FilterBar';
import Proj1920 from './2019-2020/2019-2020'

const Projects = () => {

  return (
    <>
        <ProjectText>Projects & Events</ProjectText>  
        <ProjText>Sort by Category</ProjText>
        <FilterBar />
        <Row>
        <Col flex={4}><Proj1920 /></Col>
        <Col flex={4}><Proj1920 /></Col>
        <Col flex={4}><Proj1920 /></Col>
        </Row>
        <Row>
        <Col flex={4}><Proj1920 /></Col>
        <Col flex={4}><Proj1920 /></Col>
        <Col flex={4}><Proj1920 /></Col>
        </Row>
        <Row>
        <Col flex={4}><Proj1920 /></Col>
        <Col flex={4}><Proj1920 /></Col>
        <Col flex={4}><Proj1920 /></Col>
        </Row>
    </>

    )
  }


  const Row = styled.div`
 display:flex;
 justify-content:space-between;
 `
 const Col = styled.div`
 flex: ${(props)=> props.size};
 
 `

const ProjText = styled.div`
  margin-top: 2.5%;
  text-align: center;
  font-size: 2em;
  font-family: 'Merriweather Sans', sans-serif;
  text-transform: uppercase;
`
const ProjectText =styled.div`
  display:flex;
  justify-content: center;
  font-size: 4em;
  font-family: 'Merriweather Sans', sans-serif;
  color:white;
  background-color: #9A3B3C;
  text-transform: uppercase;
  letter-spacing: 20px;
  font-weight: 1100;
  top:50%;
  left: 50%;
`

export default Projects;
