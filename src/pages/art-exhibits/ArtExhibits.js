import React from 'react';
     /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FilterBar from '../../components/layout/FilterBar';
import P2005 from '../art-exhibits/2005/P2005';
import Year from '../../components/project/Year';
import P2008 from '../art-exhibits/2008/P2008';
import P2009 from '../art-exhibits/2009/P2009';
import P2010 from '../art-exhibits/2010/P2010';
import P2002 from '../art-exhibits/2002/P2002';
import P2012 from '../art-exhibits/2012/P2012';

const ArtExhibits = () => (
  <>
    <div style={{position: "fixed", top: "4rem", width: "100%"}}>
      <FilterBar selected={"Art Exhibits"} />
    </div>
    <div css={css`margin: 5rem`}/>
    <Year year="2012" />
    <P2012 />
    <Year year="2010" />
    <P2010 />
    <Year year="2009" />
    <P2009 />
    <Year year="2008" />
    <P2008 />
    <Year year="2005" />
    <P2005 />
    <Year year="2002" />
    <P2002 />
  </>
)

export default ArtExhibits



