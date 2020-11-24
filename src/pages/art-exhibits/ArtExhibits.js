import React from 'react';
import FilterBar from '../../components/navbar/FilterBar';
import P2002 from './2002/P2002';
import Year from '../../components/project/Year';
import P2012 from './2012/P2012';

const ArtExhibits = () => (
  <>
    <div style={{position: "fixed", top: "4rem", width: "100%"}}>
      <FilterBar selected={"Art Exhibits"} />
    </div>
    <div style={{height: "4rem"}} />
    <div style={{padding: "1em"}}>
      <Year year={2012} width={"104px"}/>
      <P2012 />
      <div style={{padding: "3rem"}} />
      <Year year={2002} />
      <P2002 />

    </div>
  </>
)


export default ArtExhibits

