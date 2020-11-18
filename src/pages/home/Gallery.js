import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mask from '../../images/golden_mask.jpg'
import heroImage from '../../images/heroImage.png'
//http://www.panacomp.net/wp-content/uploads/2015/11/golden_mask.jpg

const images = [
  mask,
  heroImage
]

const Gallery = () => {
  const [ image, setImage ] = useState();

  useEffect(() => {
   setImage(images[(Math.floor(Math.random() * images.length))])
  }, [])

  return (
    <Wrapper>
      <MaskDiv image={image}/>
    </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 40vw;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 1rem 0;
`

const MaskDiv = styled.div`
  height: 400px;
  width: 400px;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  flex-shrink: 0;
`
export default Gallery