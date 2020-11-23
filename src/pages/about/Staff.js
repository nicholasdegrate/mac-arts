import React, {useState} from 'react';
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
    <BordText>Board of Directors</BordText>
    <SRow>
        <Col size={3}>
    <ReactCardFlip isFlipped = {isZoFlipped} flipDirection="vertical">
        <StyledImage url={zo} onClick={handleZoFlip}/>
        <StyledBack onClick={handleZoFlip}>
        <Backtext>Hello <br /> <button onClick={learnMore}>Learn More</button></Backtext>
        </StyledBack>
    </ReactCardFlip>
        </Col>
        <Col size={3}>
    <ReactCardFlip isFlipped = {isJaFlipped} flipDirection="vertical">
        <StyledImage url={jasna} onClick={handleJaFlip}/>
        <StyledBack onClick={handleJaFlip}/>
    </ReactCardFlip>
        </Col>
        <Col size={3}>
    <ReactCardFlip isFlipped = {isMikeFlipped} flipDirection="vertical">
        <StyledImage url={mike} onClick={handleMikeFlip}/>
        <StyledBack onClick={handleMikeFlip}/>
    </ReactCardFlip>
        </Col>
    </SRow>
    <SRow>
    <Col size={3}>
    <ReactCardFlip isFlipped = {isIgFlipped} flipDirection="vertical">
        <StyledImage url={igor} onClick={handleIgFlip}/>
        <StyledBack onClick={handleIgFlip}/>
    </ReactCardFlip>
    </Col>
    <Col size={3}>
    <ReactCardFlip isFlipped = {isArFlipped} flipDirection="vertical">
        <StyledImage url={arno} onClick={handleArFlip}/>
        <StyledBack onClick={handleArFlip}/>
    </ReactCardFlip>
    </Col>
    <Col size={3}>
    <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical">
        <StyledImage url={blagoj} onClick={handleFlip}/>
        <StyledBack onClick={handleFlip}> </StyledBack>
    </ReactCardFlip>
    </Col>
    </SRow>
    <Row>
    <AddText>
        Advisory Board
    </AddText>
    </Row>
    <Row>
    <AddList>
    <ul>
        <li>
        Stephen K. Batalden, Arizona State University
        </li>
        <li>
        Risto Nikovski, Former Ambassador
        </li>
        <li>
        Duncan Perry, Ph. D., Dean of Research, Scranton University
        </li>
        <li>
        Andrew Rossos, Ph. D., History, Professor Emeritus, U. of Toronto
        </li>
    </ul>
    </AddList>
    </Row>
    </>
    
    )
  }


  const Backtext = styled.div`
  padding-top:50px;
  text-align: center;
  `
  const AddList = styled.div`
  justify-content:center;
  `
  const SRow = styled.div`
  display:flex;
  justify-content:center;
  margin-left: 20%;
  margin-bottom: 15px;
  `


 const Row = styled.div`
 display:flex;
 justify-content:center;
 `
 const Col = styled.div`
 flex: ${(props)=> props.size};
 
 `

 const BordText = styled.div`
 text-align: center;
 font-size: 4em;
 font-family: 'Roboto Condensed', sans-serif;
 margin-bottom: 2.5%
 `
 const AddText = styled.div`
 text-align: center;
 font-size: 3em;
 font-family: 'Roboto Condensed', sans-serif;
 margin-bottom: 2.5%;
 margin-top: 2.5%;
 `


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