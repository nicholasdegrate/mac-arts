import React from 'react';
import styled from 'styled-components';
//images
// import Domanica from '../../images/logo_domanica2.png';
// import Amazon from '../../images/logo_amazon2.png';
// import Neco from '../../images/logo_neco2.jpg';
// import Nyfa from '../../images/logo_nyfa2.png';
// import PlanetGreen from '../../images/logo_planetgreen2.png'


const Footer = () => (
  <Wrapper className='footer'>
    <MacInfo>
      Contact Information <br />
    380 Rector Place, Suite 21E<br />
    New York, NY, USA, 10280<br />
    Ph: (212) 799-0009<br />
    info@macedonianarts.org<br />
    </MacInfo>
    <NonProfitBox>
      <a href="http://www.domanicafoundation.org/">
        {/* <NonPImage src={Domanica} /> */}
      </a>
      <a href="https://smile.amazon.com/ref=smi_ext_ch_13-3686047_dl?_encoding=UTF8&ein=13-3686047&ref_=smi_chpf_redirect&ref_=smi_ext_ch_13-3686047_cl">
        {/* <NonPImage src={Amazon} /> */}
      </a>
      <a href="https://www.eihonors.org/">
        {/* <NonPImage src={Neco} /> */}
      </a>
      <a href="https://www.nyfa.org/" >
        {/* <NonPImage src={Nyfa} /> */}
      </a>
      <a href="https://www.planetgreenrecycle.com/fundraising?purl=macedonianarts">
        {/* <NonPImage src={PlanetGreen} /> */}
      </a>
    </NonProfitBox>
  </Wrapper>
)


const Wrapper = styled.div`
  display:flex;
  background-color:#ede2cd;
  width: 100%;
  height: 10%;
  bottom: 0;
  justify-content:space-between;

`;

const NonProfitBox = styled.div`
padding-top: 3%;
color: white;
text-align: end;
justify-content: center;
flex-grow:2;
`

const MacInfo = styled.div`
margin:1em;
text-align: start;
justify-content: center;
text-transform: uppercase;
font-size: 12px;
margin-left:2.5%;
`

const NonPImage = styled.img`
height: 25px;
margin-right:2.5%;
color: white;
text-align: end;
justify-content: center;
`

export default Footer;