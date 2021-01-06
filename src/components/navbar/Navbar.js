import { useState, useRef, useEffect } from 'react';
import { Link } from "@reach/router"
import styled from 'styled-components';
import logo from '../../images/logo.png'
import facebook from '../../icons/facebook.svg'
import pintrest from '../../icons/pintrest.svg'
import twitter from '../../icons/twitter.svg'
import youtube from '../../icons/youtube.svg'
import HamburgerMenu from 'react-hamburger-menu';

const Navbar = () => {
  const [ open, setOpen ] = useState(false)
  const bgrRef = useRef(null)
  
  useEffect(() => {
    const clickOutside = (e) => {
      if (bgrRef.current && !bgrRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", clickOutside)

    return () => {
      document.removeEventListener("mousedown", clickOutside)
    }
  }, [bgrRef])

  return (
    <>
      <Wrapper>
        <Left>
          <LogoImage src={logo} />
          <Link to="/">
            <Name>            
              <strong>
                macedonian arts
                <div style={{fontSize: "16px", fontWeight: '400'}}>
                  council
                </div>
              </strong>
            </Name>
          </Link>
        </Left>
        <Right>
          <div>
            <Link to="/about"> ABOUT US </Link>
          </div>
          <div>
            <Link to="/press"> PRESS </Link>
          </div>
          <div>
            <Link to="/contact"> CONTACT </Link>
          </div>
          <Social>
            <SocialImage image={facebook} />
            <SocialImage image={twitter} />
            <SocialImage image={youtube} />
            <SocialImage image={pintrest} />
          </Social>
        </Right>
        <Bgr
          ref={bgrRef}
          onBlur={() => setOpen(!open)}
        >
          <StyledHamburgerMenu>
          <HamburgerMenu
            isOpen={open}
            menuClicked={() => setOpen(!open)}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
            />
          </StyledHamburgerMenu>
          <Dropdown open={open}>
            <DropdownItem onClick={() => setOpen(false)} >
              <Link to="/about">
                <DropdownItemText>
                  ABOUT US 
                </DropdownItemText>
              </Link>
            </DropdownItem>
            <DropdownItem onClick={() => setOpen(false)} >
              <Link to="/press">
                <DropdownItemText>
                  PRESS 
                </DropdownItemText>
              </Link>
            </DropdownItem>
            <DropdownItem onClick={() => setOpen(false)}>
              <Link to="/contact">
                <DropdownItemText>
                  CONTACT 
                </DropdownItemText>
              </Link>
            </DropdownItem>
            <Social>
              <SocialImage image={facebook} />
              <SocialImage image={twitter} />
              <SocialImage image={youtube} />
              <SocialImage image={pintrest} />
            </Social>            
          </Dropdown>
        </Bgr>        
      </Wrapper>
      <ClearFix />
    </>
  )
}

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 4rem;
  background: rgba(255, 209, 11, 0.9);
  height: calc(100vh - 3.5rem - 3px); 
  transition: 0.5s ease-in;
  min-width: 200px;
  width: 40vw;
  margin: 0 -100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props => props.open && `
    margin: 0;
    transition: 0.4s ease-in;
  `}
`

const DropdownItem = styled.div`
  display: flex;
  justify-content: flex-end;
  width:  60%;
  margin: 2rem;
  cursor: pointer;
  font-size: 24px;
`

const DropdownItemText = styled.div`
  &:hover {
    color: white;
  }
`

const StyledHamburgerMenu = styled.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
`
const Bgr = styled.div`
  margin-right: 1.5rem;

  @media(min-width: 849px) {
    display: none;
  }
`

const Wrapper = styled.div`
  position: fixed;
  z-index:1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  background: white;
`

const Left = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-shrink: 0;
  width: 300px;

  @media (max-width: 768px) {
    width: 250px;
    padding: 1.5rem 0.5rem;
  }
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

  @media (max-width: 850px) {
    display: none;
  }
`

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;

  @media (max-width: 850px) {
    margin-top: 2rem;
    width: 60%;
    min-width: 150px;
  }
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
  cursor: pointer;

  @media (max-width: 850px) {
    &:hover {
      filter: invert(1);
    }
  }
`

const ClearFix = styled.div`
  width: 100%;
  height: 4rem;
`

export default Navbar
