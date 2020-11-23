import React from 'react';
import styled from 'styled-components';

const P2002 = () => (
  <Wrapper>
    <video width="100%" height="auto;" controls="true">
      <source src="http://macedonianarts.org/images/2002LakePrespa.mp4" type="video/mp4" />
    </video>
    <div style={{padding: "1rem"}}>
        Lake Prespa  and the  'Large City'  island
      
      <p>
        <span style={{color: "#880000"}}><i>DOORS</i></span> was a collaborative Internet-based art project initiated in 2003 when Internet laboratories were installed
          in three local high schools in border villages in Macedonia, Greece and Albania and secondary school children
          were introduced to the power of wireless communication and digital technology. Using cell phones donated by
          Motorola, children in the villages of Ljubojno, Goricë e Vogël (original Slav name <i>Dolna Gorica</i>) and Άγιος
          Γερμανός (Agios Germanos; original Slav name <i>German</i>) in the remote villages photographed local doors to
          document the disappearing local architecture.
      </p>
      <p>
        These children share common borders and similar cultural and historical pasts, their lives forever intertwined and mutually affected by the geographic proximity and the economic conditions in which they live. The also offered an opportunity for individual excellence and initiative in a team setting, as all of the participating children participated in the selection of the doors to be photographed and the final photographs to be used for the virtual exhibit.
      </p>
      <p>
        In its initial stages, Doors was funded by <i>Schools Online</i>, a US-based non-profit organization committed to the
        idea of “connecting children on the Internet, one school at the time.” In 2004, <i>The Video Professor Inc.</i>,
        <i>Mobimak</i> and <i>The Dominic Foundation</i> joined as sponsors of <i>Doors</i>.
      </p>
      <p>
        These companies’ commitment to the world community and their leadership in building a better world for future generations will ring especially true for these children living in one of the most remote, and cut-off from the modern world. Through “the doors of the Internet”, these children were introduced to the digital world.
      </p>
    </div>
    <div style={{textAlign: "center"}}>
      <strong>OPEN DOORS</strong>
      <p>The village of <i>Ljubojno</i> - REPUBLIC OF MACEDONIA</p>
    </div>
    <Pictures>

    </Pictures>
  </Wrapper>
)

const Wrapper = styled.div``

const Pictures = styled.div`
  @media min-width: 678
`
export default P2002