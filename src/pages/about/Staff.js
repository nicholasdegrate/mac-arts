import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

// staff pictures
import zo from "./staff_images/zo.jpg"
import mike from "./staff_images/Mike.png"
import jasna from "./staff_images/jasna.jpg"
import igor from "./staff_images/IgorToshevski.png"
import arno from "./staff_images/Arno.jpg"
import blagoj from "./staff_images/blagoj.jpg"


const Staff = () => {
    const [isZoFlipped, setIsZoFlipped] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)
    // const [isFlipped, setIsFlipped] = useState(false)
    // const [isFlipped, setIsFlipped] = useState(false)
    // const [isFlipped, setIsFlipped] = useState(false)
    // const [isFlipped, setIsFlipped] = useState(false)
    


    const handleZoFlip = () =>{
        setIsZoFlipped(!isZoFlipped)
        }
        const handleFlip = () =>{
            setIsFlipped(!isFlipped)
            }

    return (
    <>
    <ReactCardFlip isFlipped = {isZoFlipped} flipDirection="vertical">
        <StyledImage url={zo} onClick={handleZoFlip}/>
        <StyledBack onClick={handleZoFlip}/>
    </ReactCardFlip>
    <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical">
        <StyledImage url={mike}/>
        <StyledBack onClick={handleFlip}/>
    </ReactCardFlip>
    <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical">
        <StyledImage url={jasna}/>
        <StyledBack onClick={handleFlip}/>
    </ReactCardFlip>
    <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical">
        <StyledImage url={igor}/>
        <StyledBack onClick={handleFlip}/>
    </ReactCardFlip>
    <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical">
        <StyledImage url={arno}/>
        <StyledBack onClick={handleFlip}/>
    </ReactCardFlip>
    <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical">
        <StyledImage url={blagoj}/>
        <StyledBack onClick={handleFlip}/>
    </ReactCardFlip>
    </>
    
    )
  }




  const StyledImage = styled.div`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.35);
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;



const StyledBack = styled.div`
border-radius: 50%;
height: 150px;
width: 150px;
background-color: red;
`;

  export default Staff;