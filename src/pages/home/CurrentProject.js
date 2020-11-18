import { React } from 'react';
import styled from 'styled-components';
import lilts from '../../images/lilts.jpg';

const CurrentProject = () => {

  return (
    <Wrapper>

      <div>
        Current Project: Lilts
      </div>
      <Flex>
        <LiltsDiv />
        <div>
          <Info>
            In remote villages through Macedonia, mothers and grandmothers sung acapela lullabies which were then reinterpreted by eleven artists worldwide, who by injecting a taste of their own musical heritage in the new arrangements, connected this obscure genre of Macedonia musical culture with word audiences.
          </Info>
          <Support>
            Support This Project
          </Support>
        </div>
      </Flex> 

    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 300px;
  // border: 1px solid green;
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
  padding: 1rem;
`
export default CurrentProject