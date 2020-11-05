import { React } from 'react';
import styled from 'styled-components'
// import heroImage from '../../images/partings_large.jpg'
import heroImage from '../../images/heroImage.png'
const Hero = () => {

  return (
    <Wrapper>
          <Name>
          <strong>
            MACEDONIAN ARTS COUNCIL
          </strong>
        </Name>
    </Wrapper>
    )
}

const Wrapper = styled.div`
  background: url(${heroImage}) no-repeat center;
  background-size: cover;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Name = styled.div`
  // color: #FyFD00D;
  font-family: "Modern Antiqua";
  font-size: 36px;
  padding: 0 1rem;
`
export default Hero