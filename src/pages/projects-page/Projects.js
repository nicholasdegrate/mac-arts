import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Projects = () => {

    return (
    <>
        <ProjectText>Projects & Events</ProjectText>  
        <ProjText>Sort by Category</ProjText>
        <Card color="red">
          <CardContent>
            Hello there
          </CardContent>
        </Card>
        

    </>
    )
  }


  const Card = styled.div`
  display: flex;
  width: 100px;
  height: 150px;
  border: 3px solid ${props => props.color};
  border-radius: 15px;
  justify-content: space-around;
  color: ${props => props.color};
`;

const CardContent = styled.div`
  align-self: center;
`;

const ProjText = styled.div`
margin-top: 2.5%;
text-align: center;
font-size: 3em;
font-family: 'Roboto Condensed', sans-serif;
margin-bottom: 2.5%
`
const ProjectText =styled.div`
    display:flex;
    justify-content: center;
    font-size: 4em;
    font-family: 'Roboto Condensed', sans-serif;
    color:white;
    background-color: #9A3B3C;
    text-transform: uppercase;
    letter-spacing: 20px;
    font-weight: 1100;
    top:50%;
    left: 50%;
`



  export default Projects;