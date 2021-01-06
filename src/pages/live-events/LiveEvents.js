import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import FilterBar from '../../components/navbar/FilterBar';
import Year from '../../components/project/Year';
import P2006_2007 from './2006-2007/P2006-2007';
import P2004_2005 from './2004-2005/P2004_2005';
import P2004 from './2004/P2004';
import P2003 from './2003/P2003';
import P2001 from './2001/P2001';
import P2000 from './2000/P2000';
import P1995 from './1995/P1995';
import P1994 from './1994/P1994';

const LiveEvents = () => {

return (
  <>

    <div style={{position: "fixed", top: "4rem", width: "100%"}}>
      <FilterBar selected={"Live Events"} />
    </div>
    <div css={css`margin: 5rem`}/>
    <Year year="2006-2007" />
    <P2006_2007 />
    <div css={css`margin: 5rem`}/>
    <Year year="2004-2005" />
    <P2004_2005 />
    <div css={css`margin: 2rem`}/>
    <Year year="2004" />
    <P2004 />
    {/* <div css={css`margin: 2rem`}/>
    <Year year="2003" />
    <P2003 />
    <Year year="2001" />
    <P2001 />
    <Year year="2000" />
    <P2000 /> */}
    {/* <Year year="1995" />
    <P1995 /> */}
    <Year year="1994" />
    <P1994 />
  </>
)
}

export default LiveEvents

