import { React } from 'react';
import styled from 'styled-components';
import _1 from "../../images/2007_thumbnail2.jpg";
import _2 from '../../images/2014_thumbnail1.jpg';
import _3 from '../../images/2015_thumbnail2.jpg';
import _4 from '../../images/InDistress.jpg';
import chevronRight from '../../icons/chevronRight.svg'

const HomeProjects = () => {

  return (
    <Wrapper>
      <Title>
        Projects
      </Title>
      <Flex>
        <ProjectDiv>
          2017-2018
          <ProjectImage img={_1}/>
          Partings
        </ProjectDiv>
        <ProjectDiv>
          2016-2020
          <ProjectImage img={_2}/>
          My American Pilgrimage
        </ProjectDiv>
        <ProjectDiv>
          2015
          <ProjectImage img={_3}/>
          Art Whisper
        </ProjectDiv>
        <ProjectDiv>
          2019-2020
          <ProjectImage img={_4}/>
          In Distress
        </ProjectDiv>  
        <ChevronDiv img={chevronRight} />
      </Flex>    
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: #F5F5F5;
  text-align: center;
  background: #00122D;
  padding: 3rem 3rem;
`
const Title = styled.div`
  font-size: 36px;
`
const Flex = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  padding-top: 3rem;
  align-items: center;
`
const ProjectDiv = styled.div`
  flex-shrink: 0;
`
const ProjectImage = styled.div`
  // border: 1px solid red;
  background: url(${props => props.img}) no-repeat center;
  background-size: cover;
  height: 200px;
  width: 200px;
  border-radius: 10px;
`
const ChevronDiv = styled.div`
  background: url(${chevronRight}) no-repeat center;
  background-size: cover;
  width: 50px;
  height: 100px;
  padding-left: 3rem;  
`
export default HomeProjects
