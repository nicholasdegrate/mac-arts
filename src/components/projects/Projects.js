import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Projects = () => {

    return (
    <>
        <ProjectText>Projects & Events</ProjectText>
    </>
    )
  }


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