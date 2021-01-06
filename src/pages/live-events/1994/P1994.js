import { Flex, StyledH3, Wrapper } from '../liveEventsStyles';

const P1994 = () => (
  <Wrapper>
    <StyledH3>Luncheon - Reception</StyledH3>
    <Flex>
      <div>
        <div>
          <img src="http://macedonianarts.org/images/1994_2.jpg" />
        </div>
        <img src="http://macedonianarts.org/images/1994_1.jpg" />
      </div>
      <div> 
        <div>
          <video width="100%" height="100%" controls>
            <source src="http://macedonianarts.org/images/1994Speach.mp4" type="video/mp4" />
            <object data="" width="100%" height="100%">
            <embed width="100%" height="100%" src="http://macedonianarts.org/images/1994Speach.mp4" />
            </object>
          </video>
        </div>  
        <div>
          <video width="100%" height="100%" controls>
            <source src="http://macedonianarts.org/images/1994Song.mp4" type="video/mp4" />
            <object data="" width="100%" height="100%">
            <embed width="100%" height="100%" src="http://macedonianarts.org/images/1994Song.mp4" />
            </object>
          </video>
        </div>     
      </div>
    </Flex>
  </Wrapper>
)

export default P1994;
