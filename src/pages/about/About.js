import React from 'react';
import Staff from "./Staff"
import styled from 'styled-components';


const About = () => {

    return (
    <>
    
        <ProjectText>About Us</ProjectText>
      
        <StateText>
            The Macedonian Arts Council involves a group of volunteers worldwide, who donate their time, talent and efforts to projects that cater to the Arts Council’s mission’ objective, to promote and affirm Macedonian cultural heritage.The Council’s projects are conceptualized and selected based on a single premise: that they preserve, promote and uphold Macedonian cultural heritage, on an ongoing basis. Permanent ethnographic collection and landmarks, documentary programs that celebrate accomplished individuals of Macedonian decent and music projects that promote Macedonian musical heritage, are some of the projects on the organization’s agenda.The Board of directors and the Advisory Board work closely in support of the projects approved for funding. The daily operations of the Council are managed by the Executive Director.
        </StateText>
        
      
        <Staff />
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






const StateText =styled.div`
display:flex;
justify-content: center;
font-size: 25px;
font-family: 'Roboto Condensed', sans-serif;
color:#9A3B3C;
background-color: white;
padding-top:5%;
padding-left:5%;
padding-right:5%;
padding-bottom:5%
`



  export default About;