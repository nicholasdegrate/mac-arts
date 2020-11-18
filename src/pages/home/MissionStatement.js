import { React } from 'react';
import styled from 'styled-components';
import newLogo from '../../images/newlogo.jpg'
const MissionStatement = () => {
  return ( 
    <Wrapper>
      
      <div>
        <Name>
          <strong> 
          {/* Macedonian Arts Council */}
          </strong>
        </Name>
        <Statement>
          Dedicated
          to the promotion and affirmation 
          of Macedonian cultural heritage. 
          Our main objective is to introduce to 
          people worldwide the rich traditions, language, 
          literature, and art of a nation whose diverse cultural 
          threads are interwoven into the ethnic tapestries of the world.
        </Statement>
      </div>
    </Wrapper>
    
    )
}

const Wrapper = styled.div`
  width: 50vw;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid tan;
  
`
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
  text-align: justify;
`
export default MissionStatement