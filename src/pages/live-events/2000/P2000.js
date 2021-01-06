import { Flex, Wrapper } from '../liveEventsStyles';

const P2000 = () => (
  <Wrapper>
    <Flex>
      <img src="http://macedonianarts.org/images/2000_1.jpg" />
      <video width="100%" height="100%" controls>
        <source src="http://macedonianarts.org/images/2000Rehearsal.mp4" type="video/mp4" />
        <object data="" width="100%" height="100%">
        <embed width="100%" height="100%" src="http://macedonianarts.org/images/2000Rehearsal.mp4" />
        </object>
      </video>
      <img src="http://macedonianarts.org/images/2000_2.jpg" /> 
      <img src="http://macedonianarts.org/images/2000_3.jpg" />
      <img src="http://macedonianarts.org/images/2000_4.jpg" />
      <img src="http://macedonianarts.org/images/2000_5.jpg" />
    </Flex>
  </Wrapper>
)

export default P2000;
