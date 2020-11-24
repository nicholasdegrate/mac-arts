import { React } from 'react';
import styled from 'styled-components';
import lilts from '../../images/lilts.jpg';

const CurrentProject = () => {

  return (
    <Wrapper>
      <Row>
     <ProjText>
        Current Project
      </ProjText>
      </Row>
      <Row>
        <LiltsDiv />
      </Row>
      <Row>
    
          <Info>
            In remote villages through Macedonia, mothers and grandmothers sung acapela lullabies which were then reinterpreted by eleven artists worldwide, who by injecting a taste of their own musical heritage in the new arrangements, connected this obscure genre of Macedonia musical culture with word audiences.
          </Info>
        </Row>
        <Row>
          <Support>
            Support This Project
          </Support>
        </Row>
        


    </Wrapper>
  )
}

const Row = styled.div`
margin-bottom: 20px;
display:flex;
justify-content:center;
margin-left:10%;
`
const ProjText = styled.div`
font-family: 'Merriweather Sans', sans-serif;
text-align:center;
margin-bottom: 1rem;
padding-left: 100px;
padding-right: 100px;
padding-top: 10px;
padding-bottom 10px;
text-transform: uppercase;
color:white;
background: #FFD10B;
border-radius:15px;

`




const Wrapper = styled.div`
  text-align: center;
  padding: 1rem;  
  background: white;
`
const Flex = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`

const LiltsDiv = styled.div`
  height: 250px;
  width: 250px;
  background: url(${lilts}) no-repeat center;
  background-size: cover;
  flex-shrink: 0;
`
const Info = styled.div`
  padding: 1rem;
  text-align: justify;
`
const Support = styled.div`
font-family: 'Merriweather Sans', sans-serif;
text-align:center;
padding-left: 20px;
padding-right: 20px;
padding-top: 10px;
padding-bottom 10px;
text-transform: uppercase;
color:#FFD10B;
background: white;
border: 5px solid #FFD10B;
border-radius:30px;
`
export default CurrentProject