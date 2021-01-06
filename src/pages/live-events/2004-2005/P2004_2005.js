import styled from '@emotion/styled';

const P2004_2005 = () => (

  <Wrapper>
    <StyledH3>THE MEDALISTS</StyledH3>
    <p>Each year <span><b>The National Ethnic Coalition of Organizations</b></span> presents 
    the <span><b>Ellis Island Medals of Honor</b></span>. Designed to pay homage to the immigrant experience, as well as for individual achievement, the medal is awarded to U.S. citizens from various ethnic backgrounds. 
    The honorees are remarkable Americans who exemplify outstanding qualities in both their personal 
    and professional lives, while continuing to preserve the richness of their particular ethnic heritage.&nbsp;&nbsp;&nbsp;&nbsp;<span id="firstparurl"><b>www.neco.org</b></span></p>
    <div>
      <StyledH2><b>NECO 1997</b></StyledH2>
      <Picture>
        <img src="http://macedonianarts.org/images/Neco2004_1.jpg"/>
        <p>
          Michael Ilitch<br />
          Macedonian<br />
          Chairman of the Board<br />
          <i>Little Caesars Enterprises</i><br />
          Nominated by the Ilitch Family
        </p>
      </Picture>
    </div>
    <div>
      <StyledH2><b>NECO 2004</b></StyledH2>
      <FlexWrap>
        <Picture>
          <img src="http://macedonianarts.org/images/Neco2004_5.jpg"/>
          <p>Mike Zafirovski<br />Macedonian</p>
        </Picture>
        <Picture>
          <img src="http://macedonianarts.org/images/Neco2004_6.jpg"/>
          <p>Frederick A. Zito<br />Italian</p>
        </Picture>
        <Picture>
          <img src="http://macedonianarts.org/images/Neco2004_7.jpg"/>
          <p>John P. Walsh<br />Irish</p>
        </Picture>
        <Picture>
          <img src="http://macedonianarts.org/images/Neco2004_8.jpg"/>
          <p>Gerri Warren-Merric<br />African</p>
        </Picture>
      </FlexWrap>
      <Flex>
        <img src="http://macedonianarts.org/images/Neco2004_9.jpg" />
        <img src="http://macedonianarts.org/images/Neco2004_10.jpg" />
        <img src="http://macedonianarts.org/images/Neco2004_11.jpg" />
        <img src="http://macedonianarts.org/images/Neco2004_12.jpg" />
      </Flex>
    </div>
    <div>
      <StyledH2><b>NECO 2005</b></StyledH2>
      <FlexWrap>
        <Picture>
          <img src="http://macedonianarts.org/images/Neco2004_13.jpg"/>
          <p>Mike Zafirovski<br />Macedonian</p>
        </Picture>
        <Picture>
          <img src="http://macedonianarts.org/images/Neco2004_14.jpg"/>
          <p>Frederick A. Zito<br />Italian</p>
        </Picture>
        <Picture>
          <img src="http://macedonianarts.org/images/Neco2004_15.jpg"/>
          <p>John P. Walsh<br />Irish</p>
        </Picture>
        <Picture>
          <img src="http://macedonianarts.org/images/Neco2004_16.jpg"/>
          <p>Gerri Warren-Merric<br />African</p>
        </Picture>
      </FlexWrap>
      <Flex>
        <img src="http://macedonianarts.org/images/Neco2004_17.jpg" />
        <img src="http://macedonianarts.org/images/Neco2004_18.jpg" />
        <img src="http://macedonianarts.org/images/Neco2004_19.jpg" />
        <img src="http://macedonianarts.org/images/Neco2004_20.jpg" />
        <img src="http://macedonianarts.org/images/Neco2004_21.jpg" />
        <img src="http://macedonianarts.org/images/Neco2004_22.jpg" />
      </Flex>
    </div>
  </Wrapper>
)

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  margin: auto;
  justify-content: center;
  align-items: center;

  @media(min-width: 460px) {
    justify-content: space-between;
  }
`;

const Picture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledH3 = styled.h1`
  text-align: center;
  font-family: "Cardo";
`;

const StyledH2 = styled.h2`
  text-align: center;
  font-family: "Cardo";
`;

const Wrapper = styled.div`
  max-width: 800px;
  font-family: "Lato";
  margin: 1rem;

  @media(min-width: 832px) {
    margin: auto;
  }
  
  img { 
    margin: 0 1rem 1rem 0;
    max-width: 320px;
  }

  @media (min-width: 420px) {
    img { 
      max-width: 100%;
    }

    video {
      width: 400px;
    }
  }
`

export default P2004_2005;
