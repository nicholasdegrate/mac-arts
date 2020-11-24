import React from 'react';
import styled from 'styled-components';

const P2012 = () => (
  <Wrapper>
    <div>
        <img src="http://macedonianarts.org/images/2012a.jpg" align="left" style={{margin: "0 20px 20px 0"}} />
        <div style={{textAlign: "center", transform: "translateY(-30px)"}} >CATENA MUNDI JEWELRY COLLECTION</div>
        Inspired by an old attribute to the biblical land of Macedonia, the collection was named Catena Mundi, which means “lock of the world.”   The reference has been made because the land of Macedonia connects the tectonic plates of Europe and Asia.
      <p> 
        A crossroad for conquerors and the birthplace of one of the world’s great alphabets, the Cyrillic, Macedonia’s          cultural beauty encompasses fresco arts, woodcarving, and the filigree art which was the inspiration for this collection.
      </p>
      <p>Young Macedonian brides wore hand carved silver jewelry on their wedding day that reflected the simplicity and strength of the Macedonian woman and the enduring cultural spirit of the land.</p>
      <p>The collection was developed exclusively for the Macedonian Arts Council.</p>
      <p>© ™ 2012  MAC</p>
    </div>
    
    <div style={{zIndex: "-1"}}>
      <video width="100%" height="auto;" controls="true">
        <source src="http://macedonianarts.org/images/2012catena.mp4" type="video/mp4" />
      </video>
      <div>
      About the Artist
  Holiday Manning is an artist who lives on a small farm on the outskirts of Phoenix, Arizona. She create one of a kind pieces, mostly bohemian-style jewelry that she markets at art fairs and sells wholesale to boutiques. She believes in making quality, statement pieces that are beautiful, have depth, meaning, texture, pattern, and whimsy.
      </div>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex: 2;
  }
`
export default P2012