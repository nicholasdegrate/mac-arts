import React from 'react';
import styled from 'styled-components';


const Year = ({year, width}) => (
  <RedTab width={width}>
    {year}
  </RedTab>
)

const RedTab = styled.div`
  padding: 0.8rem;
  background: #9A3B3D;
  color: white;
  border-radius: 5px 5px 0 0;
  ${props => props.width ? `width: ${props.width}` : "width: 83px"};
  text-align: center;
  font-size: 18px;

  @media (max-width: 320px) {
    font-size: 16px;
  }

`
export default Year