import styled from '@emotion/styled';

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledH3 = styled.h1`
  text-align: center;
  font-family: "Cardo";
`;


export const StyledP = styled.p`
  width: 380px;
`;

export const Wrapper = styled.div`
  max-width: 850px;
  font-family: "Lato";
  margin: 1rem;
   
  img { 
    margin: 0 0rem 1rem 0;
    max-width: 320px;
  }

  video {
    margin: 0 1rem 1rem 0;
  }

  @media (min-width: 420px) {
    img { 
      margin: 0 1rem 1rem 0;
      max-width: 100%;
    }

    video {
      width: 400px;
    }
  }

  @media(min-width: 832px) {
    margin: auto;
  }
`;
