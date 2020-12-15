/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from 'styled-components';

const Year = ({year, width}) => (
  <div css={css`display: flex; justify-content: center;`}>
    <div css={css`width: 780px;`}>
      <RedTab width={width}>
        {year}
      </RedTab>
    </div>
  </div>
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

  margin: 0 1rem;

  @media (max-width: 767px) {
    margin: auto;

  }
`

export default Year;