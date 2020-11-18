import { React } from 'react';
import {Link } from "@reach/router"
import styled from 'styled-components';
import logo from '../../images/logo.png'
import facebook from '../../icons/facebook.svg'
import pintrest from '../../icons/pintrest.svg'
import twitter from '../../icons/twitter.svg'
import youtube from '../../icons/youtube.svg'


const Navbar = () => {
  
  return (
    <>
      <Wrapper>
        <Left>
          {/* <Logo /> */}
          <LogoImage src={logo} />
          <Name>
            <strong>
              macedonian arts
              <div style={{fontSize: "16px", fontWeight: '400'}}>
                council
              </div>
            </strong>
          </Name>
        </Left>
        <Right>
        <div>
          <Link to="/">
            HOME
          </Link>
      
          </div>
          <div>
          <Link to="/projects">
            PROJECTS
          </Link>
      
          </div>
          <div>
          <Link to="/about">
            ABOUT US
          </Link>
      
          </div>
          <div>
            PRESS
          </div>
          <div>
            CONTACT
          </div>
          <Social>
            <SocialImage image={facebook} />
            <SocialImage image={twitter} />
            <SocialImage image={youtube} />
            <SocialImage image={pintrest} />
          </Social>
        </Right>
      </Wrapper>
      <ClearFix />
    </>
  )
}

const Wrapper = styled.div`
  position: fixed;
  z-index:1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background: white;
`
const Left = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-shrink: 0;
  width: 300px;

`
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  padding: 1.5rem;
  font-family: "Merriweather Sans";
  font-weight: 600;
  font-size: 18px;
`
const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`
const LogoImage = styled.img`
  height: 40px;
  width: 40px;
`
const Name = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 0 1rem;
  font-family: "Merriweather Sans";
`
const SocialImage = styled.div`
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  height: 30px;
  width: 30px;
`
const ClearFix = styled.div`
  width: 100%;
  height: 5rem;
`
export default Navbar

const Colors = {
  // #F5F5F5
  // #FFD00D
}