import { React } from 'react';
import styled from 'styled-components';
import newLogo from '../../images/newlogo.jpg'
const MissionStatement = () => {
  return ( 
  <div>
    <Statement>
    Our main objective is to introduce to 
    people worldwide the rich traditions, language, 
    literature, and art of a nation whose diverse cultural 
    threads are interwoven into the ethnic tapestries of the world.

    </Statement>

    <Textbox1>
      Dedicated
      to the promotion and affirmation 
      of Macedonian cultural heritage, one project at a time.
     </Textbox1>
  </div>
    )
}

const Name = styled.div`
  // font-family: "Modern Antiqua";
  font-size: 24px;
  padding-bottom: 1rem;
  text-align: center;
  color: #D82126;
  height: 100px;
  width: 500px;
  background: url(${newLogo}) center no-repeat;
  background-size: cover;
 
`
const Statement = styled.div`
  text-align:center;
  display:flex;
  padding-left:25%;
  padding-right:25%;
  padding-bottom: 5%;
  background: white;
`

const Textbox1 = styled.div`
  width:100%;
  text-align:center;
  color:white;
  background-color: #9A3B3C;
  padding:20px;
`

export default MissionStatement
