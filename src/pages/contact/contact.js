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
        <br/>
        <br/>
        <form action="mailto:info@macedonianarts.org">
        <label for="fname"><b>First Name</b></label>
        <FormWrap>
        <input  style={{width:'400px'}} type="text" placeholder="First Name" name="fname" required />
        </FormWrap>
        <br/>
        <label for="lname"><b>Last Name</b></label>
        <FormWrap>
        <input style={{width:'400px'}} type="text" placeholder="Last Name" name="lname" required />
        </FormWrap>
        <br />
        <label for="email"><b>Email</b></label>
        <FormWrap>
        <input style={{width:'400px'}}type="email" placeholder="Email" name="email" required />
        </FormWrap>
        <br/>
        <label for="message"><b>Message</b></label>
        <FormWrap>
        <input style={{height:'200px',width:'400px'}}type="text" placeholder="Write Something..." name="message" required />
        <br/>
        </FormWrap>
        <br />
        <input type="submit" value="Submit"></input>
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