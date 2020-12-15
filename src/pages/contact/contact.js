import React from 'react';
import styled from 'styled-components'
import Waves from './background/waves.svg'

const Contact = () => {
    return(
        <Container>
        <Row>
        <Col size={5}>
        <ContactText><h1>Macedonia Arts Council</h1></ContactText>
        <ContactP>
        MAC Adress:<br/>
        380 Rector Place, Suite 21E<br></br>
        New York, NY, USA, 10280<br></br>
        Ph: (212) 799-0009<br></br>
        info@macedonianarts.org<br></br>
        </ContactP>
        </Col>
        <Col size={5}>
        
        <form action="mailto:info@macedonianarts.org">
        <label for="fname"><b>First Name</b></label>
        <FormWrap>
        <Input type="text" placeholder="First Name" name="fname" required />
        </FormWrap>
       
        <label for="lname"><b>Last Name</b></label>
        <FormWrap>
        <Input type="text" placeholder="Last Name" name="lname" required />
        </FormWrap>
       
        <label for="email"><b>Email</b></label>
        <FormWrap>
        <Input type="email" placeholder="Email" name="email" required />
        </FormWrap>
       
        <label for="message"><b>Message</b></label>
        <FormWrap>
        <Input style={{height:'200px'}}type="text" placeholder="Write Something..." name="message" required />
       
        </FormWrap>
       
        <Submit type="submit" value="Submit" />
        </form>
        </Col>
        </Row>
        </Container>

      
    )
}



const Row = styled.div`
  display:flex;
  text-align:center;
  transform: rotate(180deg)
`

const Container = styled.div`
background: url(${Waves});
transform: rotate(180deg);
overflow: hidden;
postion: fixed;

`

const Input = styled.input`
margin: 2.5%;
width: 400px ;
border-radius: 5px;

`
const Submit = styled.input`
transition: opacity .3s ease-in-out; 
margin: 2.5%;
width: 100px ;
height: 40px;
border-radius: 15px;
background: none;
text-transform: uppercase;
font-family: 'Merriweather Sans', sans-serif;
color:#9A3B3C;
border: 5px solid #9A3B3C;
cursor: pointer;
&:hover {
  background:#9A3B3C;
  color: white;
  transition: 0;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.25);
}

`



const Col = styled.div`
  flex: ${(props)=> props.size};
  margin: 2.5%;
`

const FormWrap = styled.div`
    justify-content:center;
`


const ContactText =styled.div`
font-family: 'Merriweather Sans', sans-serif;
text-align:center;
padding-bottom: 1rem;
text-transform: uppercase;
color:#9A3B3C;
`

const ContactP =styled.div`
margin-left:150px;
font-family: 'Merriweather Sans', sans-serif;
text-align:start;
padding-bottom: 1rem;
text-transform: uppercase;
color:#9A3B3C;
`



export default Contact