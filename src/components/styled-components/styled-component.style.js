import styled, { css } from 'styled-components';


/************************* 
   ! GLOBAL STYLING

*************************/
const maxWidth = '1400px';

const breakpoints = {
    sm: 500,
    md: 700,
    lg: 900,
    xl: 1200,
}
/* 

    ! MEDIA QUERIES

*/
const MediaQueries = key => {
    return style =>
        `@media and screen and (min-width: ${breakpoints[key]}px) {
            ${style}
        }`
}

/*

   ! HEADING AND TEXTS 

*/

// styled h1 came be interpreted in h1, h2, etc if need
const HeadingH1 = styled.h1`
    // standard
    font-size: 2rem;
    white-space: nowrap;
    font-weight: 500;
    color: #9A3B3D;
    // optional
    ${({ primary }) =>
        primary && css`
        color: #000;
        font-weight: ${({ fontWeight }) => fontWeight};
        font-size: ${({ fontSize }) => fontSize};
    `
    }
`;

export const Heading = ({ primary, fontSize, fontWeight, children }) => {
    return (
        <HeadingH1
            primary={primary}
            fontSize={fontSize}
            fontWeight={fontWeight}
        >
            {children}
        </HeadingH1>)
}


export const p = styled.p`
    font-size: 1rem;
    width: 100%;
    max-width: 400px;
    color: "#9A3B3D !important";
    ${({ primary }) =>
        primary && css`
        color: #000;
    `}
`;

export const para = ({ primary, children }) => {
    return (
        <p
            primary={primary}
        >
            {children}
        </p>)
}

/*************************

   ! LAYOUT

*************************/

/* 
    # general container

    use case: 
        should be used to create max-width of a devices and margin/padding around edges
*/
export const MainContainer = styled.div`
    width: 95%;
    max-width: '${maxWidth}';
    padding: .5em;
    margin: auto;
    // for child element
    position: relative;

    /* 
        current use page: contact.js
     */
    .waveBg {
    position: absolute;
    top: 0;
    z-index: -1;
    pointer-events: none;
  }
`;