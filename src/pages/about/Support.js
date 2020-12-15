import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';


// staff pictures
import pav from "./staff_images/pavlina.jpg"
import ham from "./staff_images/HAMOD_006.jpeg"
import den from "./staff_images/Denice.jpg"
import meg from "./staff_images/meg.jpg"



const Support = () => {
    const [isZoFlipped, setIsZoFlipped] = useState(false)
    const [isMikeFlipped, setIsMikeFlipped] = useState(false)
    const [isJaFlipped, setIsJaFlipped] = useState(false)
    const [isIgFlipped, setIsIgFlipped] = useState(false)
    const [bio, setBio] = useState(false)
   
    const handleJaFlip = () =>{
        setIsJaFlipped(!isJaFlipped)
        }
    const handleIgFlip = () =>{
        setIsIgFlipped(!isIgFlipped)
        }
    const handleZoFlip = () =>{
        setIsZoFlipped(!isZoFlipped)
        }
    const handleMikeFlip = () =>{
        setIsMikeFlipped(!isMikeFlipped)
        }
        const bioHover = (e) => {
            setBio(!bio)
        }
    
        const bioLeave = (e) => {
            setBio(!bio)
        }






    

    return (

    <>
    <hr />
    <SRow>
        <Col size={3}>
    <ReactCardFlip isFlipped = {isZoFlipped} flipDirection="vertical">
        <StyledImage url={pav} onClick={handleZoFlip}/>
        <StyledBack onClick={handleZoFlip} onMouseEnter={bioHover} onMouseLeave ={bioLeave}>
        <Backtext>
            <p>Pavlina Proevska</p>
            <Bio style={bio ? {display:"block"}: {display:"none"}} >
            A native of Macedonia, Pavlina Proevska studied public relations in Paris, and was a producer for CBS News and a field producer for the USA Cable Networks. An independent film producer since 1986, she has produced two feature films, The Magic Snowman, a children’s Christmas tale (endorsed by UNICEF and dedicated to the world's children) and Happy Hell Night, a supernatural thriller. She is presently in post-production for the documentary films My American Pilgrimage, The Promise of Perfume, and Arts Whisperings. Ms. Proevska is in pre-production of The Magic Snowman II, and a romantic comedy slated for April 2019.Pavlina Proevska is the Founder and Executive Director of the Macedonian Arts Council.
            </Bio>
        </Backtext>
        </StyledBack>
    </ReactCardFlip>
        </Col>
        <Col size={3}>
    <ReactCardFlip isFlipped = {isJaFlipped} flipDirection="vertical">
        <StyledImage url={den} onClick={handleJaFlip}/>
        <StyledBack onClick={handleJaFlip} onMouseEnter={bioHover} onMouseLeave ={bioLeave}>
        <Backtext>
            <p>Denise Rivera</p>
            <Bio style={bio ? {display:"block"}: {display:"none"}} >
                Denise Rivera is in charge of E-Publishing and Public Relations for the Arts Council. She holds an M.A. degree in Liberal Studies from The Graduate Center, CUNY.Because of her great interest in international relations and politics, she has selected International Studies as her field of concentration. Denise has been affiliated with the Macedonian Arts Council since September 2017.
            </Bio>
        </Backtext>
        </StyledBack>
    </ReactCardFlip>
        </Col>
        <Col size={3}>
    <ReactCardFlip isFlipped = {isMikeFlipped} flipDirection="vertical">
        <StyledImage url={ham} onClick={handleMikeFlip}/>
        <StyledBack onClick={handleMikeFlip} onMouseEnter={bioHover} onMouseLeave ={bioLeave}>
        <Backtext>
            <p>Hamod Meshkat</p>
            <Bio style={bio ? {display:"block"}: {display:"none"}} >
            Hamod Meshkat is a Tax Accountant-Enrolled Agent and a former Financial Analyst. He holds an MBA in Finance from Baruch College and is presently working on becoming a Certified Public Accountant.Born in New York he has a keen appreciation of world cultures and has been affiliated with the Macedonian Arts Council since 2013.
            </Bio>
        </Backtext>
        </StyledBack>
    </ReactCardFlip>
        </Col>
    <Col size={3}>
    <ReactCardFlip isFlipped = {isIgFlipped} flipDirection="vertical">
        <StyledImage url={meg} onClick={handleIgFlip}/>
        <StyledBack onClick={handleIgFlip} onMouseEnter={bioHover} onMouseLeave ={bioLeave}>
        <Backtext>
            <p>Megan Ribovich</p>
            <Bio style={bio ? {display:"block"}: {display:"none"}} >
            Based in Colorado, Megan Ribovich is in charge of social media marketing efforts and serves as a film production coordinator for the Macedonian Arts Council media projects. She holds an MBA degree in marketing from University of Colorado Denver.With a true passion for cultural arts and the entertainment industry as a whole, she has been volunteering at the Council since 2019.
            </Bio>
        </Backtext>
        </StyledBack>
    </ReactCardFlip>
    </Col>
    </SRow>
    </>
    
    )
  }


  const Backtext = styled.div`
  padding-top:25px;
  text-align: center;
  `
  const SRow = styled.div`
  display:flex;
  justify-content:center;
  margin-left: 20%;
  margin-bottom: 15px;
  `
 const Col = styled.div`
 flex: ${(props)=> props.size};
 
 `
  const StyledImage = styled.div`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.35);
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;
const Bio = styled.p`
cursor: pointer;
width: 400px;
color: #9A3B3C;
`;



const StyledBack = styled.div`
border-radius: 50%;
height: 100px;
width: 100px;
color:white;
background-color: #9A3B3C;
`;



  export default Support;