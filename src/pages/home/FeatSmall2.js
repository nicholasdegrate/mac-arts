import { React } from 'react';
import styled from 'styled-components';


const FeatSmall2 = () => {

    const Downloadit = () =>{
        console.log("Download")
    }

  return (
    <Wrapper>
          <Row>
        <FeatDiv />
        </Row>
          <Row>
          <Download onClick={Downloadit}>
              Download Now
          </Download>
          </Row>
        

    </Wrapper>
  )
}

const Row = styled.div`

  margin-bottom: 20px;
  display:flex;
  justify-content:center;
`


const Wrapper = styled.div`
  text-align: center;
  padding: 1rem;  
  background: white;
`


const FeatDiv = styled.div`
  height: 206px;
  width: 398px;
  background-size: cover;
  flex-shrink: 0;
`
const Download = styled.div`
  font-family: 'Merriweather Sans', sans-serif;
  text-align:center;
  margin-top:5%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom 10px;
  text-transform: uppercase;
  color:#D4D4B0;
  background: white;
  border: 5px solid #D4D4B0;
  border-radius:30px;
`
export default FeatSmall2