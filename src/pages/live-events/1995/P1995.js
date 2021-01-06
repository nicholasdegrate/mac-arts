import { Flex, Wrapper } from '../liveEventsStyles';

const P1995 = () => (
  <Wrapper>
    <Flex>
      <div>
        <div>
          <img src="http://macedonianarts.org/images/1995_1.jpg" />
        </div>
        <img src="http://macedonianarts.org/images/1995_2.jpg" />
      </div>
      <div> 
        <div>
          <video width="100%" height="100%" controls>
            <source src="http://macedonianarts.org/images/1995Choir.mp4" type="video/mp4" />
            <object data="" width="100%" height="100%">
            <embed width="100%" height="100%" src="http://macedonianarts.org/images/1995Choir.mp4" />
            </object>
          </video>
        </div>  
        <div>
          <video width="100%" height="100%" controls>
            <source src="http://macedonianarts.org/images/1995Choir.mp4" type="video/mp4" />
            <object data="" width="100%" height="100%">
            <embed width="100%" height="100%" src="http://macedonianarts.org/images/1995Choir.mp4" />
            </object>
          </video>
        </div>     
      </div>
    </Flex>
  </Wrapper>
)

export default P1995;
