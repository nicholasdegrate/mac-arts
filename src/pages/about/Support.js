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
    const [isFlipped, setIsFlipped] = useState(false)
    const [isJaFlipped, setIsJaFlipped] = useState(false)
    const [isIgFlipped, setIsIgFlipped] = useState(false)
    const [isArFlipped, setIsArFlipped] = useState(false)
   
    const handleJaFlip = () =>{
        setIsJaFlipped(!isJaFlipped)
        }
    const handleIgFlip = () =>{
        setIsIgFlipped(!isIgFlipped)
        }
    const handleArFlip = () =>{
        setIsArFlipped(!isArFlipped)
        }
    const handleZoFlip = () =>{
        setIsZoFlipped(!isZoFlipped)
        }
    const handleMikeFlip = () =>{
        setIsMikeFlipped(!isMikeFlipped)
        }
    const handleFlip = () =>{
        setIsFlipped(!isFlipped)
        }
   
    const learnMore = () =>{
        console.log("Learn More")
        setIsZoFlipped(isZoFlipped)
    }

    return (

    <>
    <hr />
    <SRow>
        <Col size={3}>
    <ReactCardFlip isFlipped = {isZoFlipped} flipDirection="vertical">
        <StyledImage url={pav} onClick={handleZoFlip}/>
        <StyledBack onClick={handleZoFlip}>
        <Backtext>Hello <br /> <button onClick={learnMore}>Learn More</button></Backtext>
        </StyledBack>
    </ReactCardFlip>
        </Col>
        <Col size={3}>
    <ReactCardFlip isFlipped = {isJaFlipped} flipDirection="vertical">
        <StyledImage url={den} onClick={handleJaFlip}/>
        <StyledBack onClick={handleJaFlip}/>
    </ReactCardFlip>
        </Col>
        <Col size={3}>
    <ReactCardFlip isFlipped = {isMikeFlipped} flipDirection="vertical">
        <StyledImage url={ham} onClick={handleMikeFlip}/>
        <StyledBack onClick={handleMikeFlip}/>
    </ReactCardFlip>
        </Col>
    <Col size={3}>
    <ReactCardFlip isFlipped = {isIgFlipped} flipDirection="vertical">
        <StyledImage url={meg} onClick={handleIgFlip}/>
        <StyledBack onClick={handleIgFlip}/>
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
  height: 75px;
  width: 75px;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.35);
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;



const StyledBack = styled.div`
border-radius: 50%;
height: 75px;
width: 75px;
background-color: red;
`;



  export default Support;