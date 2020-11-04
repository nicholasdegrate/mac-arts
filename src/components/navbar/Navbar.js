import { React } from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png'

const Navbar = () => {
  
  return (
    <>
      <Wrapper>
        <Logo />
        <Name>
          <strong>
            MACEDONIAN 
            <div>
              ARTS COUNCIL
            </div>
          </strong>
        </Name>
      </Wrapper>
      <ClearFix />
    </>
  )
}

const Wrapper = styled.div`
  position: fixed;
  z-index:1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  background: white;
  padding: 0 1rem;
`
const Logo = styled.div`
  background: url(${logo}) no-repeat center;
  background-size: cover;
  height: 30px;
  width: 30px;

`
const Name = styled.div`
  font-size: 16px;
  padding: 0 1rem;
`
const ClearFix = styled.div`
  width: 100%;
  height: 3rem;
`
export default Navbar

const Colors = {
  // #F5F5F5
  // #FFD00D
}