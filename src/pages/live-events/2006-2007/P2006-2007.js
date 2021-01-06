import styled from '@emotion/styled';

const P2006_2007 = () => (
  <Wrapper>
    <Name>Dedication Ceremony: September 9, 2006</Name>	
    <Flex>
      <div>
        <a name="ceremony" />
        <video width="100%" controls>
          <source src="http://macedonianarts.org/images/2006Director.mp4" type="video/mp4" />
          <object data width="100%" >
            <embed width="100%" src="http://macedonianarts.org/images/2006Director.mp4" />
          </object>
        </video>
      </div>
      <img src="http://macedonianarts.org/images/ceremony1.jpg" />
      <img src="http://macedonianarts.org/images/ceremony6.png"  />
      <img src="http://macedonianarts.org/images/ceremony3.jpg" />
      <img src="http://macedonianarts.org/images/ceremony5.jpg" />
      <img src="http://macedonianarts.org/images/ceremony4.jpg" />
      <img src="http://macedonianarts.org/images/ceremony8.jpg" />
      <img src="http://macedonianarts.org/images/ceremony10.jpg" />
      <img src="http://macedonianarts.org/images/ceremony12.jpg" />
      <img src="http://macedonianarts.org/images/ceremony13.jpg" />                
    </Flex>
  </Wrapper>
);

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;


const Name = styled.div`
  font-family: 'Cardo', serif;
  font-size: 1.0em;
  font-weight: 400;
  line-height: 1em;
  margin: 10px 0 0 0;
  color: #494949;
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 780px;
  margin: auto;

  img { 
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
`;

export default P2006_2007;
