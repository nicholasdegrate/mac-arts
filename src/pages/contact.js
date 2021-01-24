import React, { Fragment } from 'react';
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import { Flex, Box, useMediaQuery } from '@chakra-ui/react';

// components
import { ContactForm } from '../components/Form';
import {
  MainContainer,
  para,
  Heading
} from
  '../components/styled-components/styled-component.style';

const Contact = () => {

  const [margin] = useMediaQuery('(min-width: 700px)');

  // Display none on footer as it is a duplicate of contact information

  return (
    <Fragment>
      {/* 
          React-Helmet 

          # is metadata per page to improve SEO
        
        */}
      <Helmet>
        <link rel="images" href="%PUBLIC_URL%/waves.svg" />
      </Helmet>
      <MainContainer>
        {/* 
          
          I decided to use Flex from chakra individual case
          
        */}
        <Flex
          height='calc(100vh - 200px)'
          width='100%'
          minHeight='600px'
          maxWidth='1400px'
          margin="auto"
          mt={margin ? 0 : 10}
          direction={['column', 'column', 'row', 'row']}
          alignItems='center'
          justifyContent='space-evenly'
        >
          <Box
            width='400px'
          >
            <Heading>Macedonia Arts Council</Heading>
            <para>
              Address:<br />
              380 Rector Place, Suite 21E<br></br>
              New York, NY, USA, 10280<br></br>
              Phone: (212) 799-0009<br></br>
              Email: info@macedonianarts.org<br></br>
            </para>
          </Box>
          <Box
            width='400px'
            mt={margin ? 20 : 0}
          >
            <ContactForm />
          </Box>
        </Flex>
        <img class='waveBg' src={process.env.PUBLIC_URL + '/icons/wave.svg'} alt='room' />
      </MainContainer>
    </Fragment >


  )
}

export default Contact;