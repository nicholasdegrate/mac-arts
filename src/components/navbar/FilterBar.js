import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router";

const categories = [
  { name: "Audio", smName: "Audio", link: '/audio' },
  { name: "Publishing", smName: "Books", link: '/publishing' },
  { name: "Video", smName: "Video", link: '/video' },
  { name: "Art Exhibits", smName: "Art",  link: '/art-exhibits' },
  { name: "Live Events", smName: "Events", link: '/live-events' },
  { name: "Education", smName: "Education", link: '/education' },
]

const FilterBar = ({selected}) =>{
  return(
    <Wrapper>
      <Row>
        {categories.map(category => (
          <Col size={2}>
            <Link to={category.link} >
              <FilterTab selected={selected} name={category.name}>{category.name}</FilterTab>
            </Link>
          </Col>
        ))}
      </Row>
      <RowSm>
      {categories.map(category => (
        <ColSm>
          <Link to={category.link} >
            <FilterTabSm selected={selected} name={category.name}>{category.name}</FilterTabSm>
          </Link>
        </ColSm>
        ))}
      </RowSm>
      <RowMobile>
        {categories.map(category => (
            <Link to={category.link} >
              <ColMobile selected={selected} name={category.name}>
                {category.smName}
              </ColMobile>
            </Link> 
        ))}
      </RowMobile>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background: #9A3B3D;
  display: flex;
  justify-content: center;
  border-radius: 0 0 5px 5px;
`
const Row = styled.div`
  // margin-bottom: 20px;
  display:flex;
  justify-content: space-evenly;
  background: #9A3B3D;
  // padding: 1em;
  padding: 1em 0;
  border-radius: 0 0 5px 5px;
  width: 100%;
  max-width: 1200px;
  z-index: 999;
  @media (max-width: 1023px) {
    display: none;
  }
`

const Col = styled.div`
  // flex: ${(props)=> props.size};
  max-width: 150px;
  width: 100%;
  flex-shrink: 0;
`
const ColSm = styled.div`
  // flex: ${(props)=> props.size};
  max-width: 100px;
  width: 100%;
  flex-shrink: 0;
`
const ColMobile = styled.div`
  // flex: ${(props)=> props.size};
  max-width: 80px;
  width: 100%;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 900;
  ${props => (props.selected === props.name) 
    ? "color: white;"
    : "color: #CC8625;"
  }
`

const FilterTab = styled.div`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 12px;
  font-weight: 900;
  text-align:center;
  // margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom 10px;
  // text-transform: uppercase;
  color:#9A3B3C;
  ${props => (props.selected === props.name) 
    ? "background: #CC8625; color: white; "
    : "background: white;"
  }
  border: 2px solid #FFD10B;
  border-radius:30px;

`
const FilterTabSm = styled.div`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 12px;
  font-weight: 900;
  text-align:center;
  padding: 5px;
  // text-transform: uppercase;
  color:#9A3B3C;
  ${props => (props.selected === props.name) 
    ? "background: #CC8625; color:#CC8625; "
    : "background: white;"
  }
  border: 2px solid #FFD10B;
  border-radius:30px;

`

const RowSm = styled.div`
  // margin-bottom: 20px;
  display:flex;
  justify-content: space-evenly;
  background: #9A3B3D;
  // padding: 1em;
  padding: 1em 0;
  border-radius: 0 0 5px 5px;
  width: 100%;
  max-width: 1200px;
  z-index: 999;
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`

const RowMobile = styled.div`
  display:flex;
  justify-content: space-evenly;
  background: #9A3B3D;
  // padding: 1em;
  padding: 1em 0;
  border-radius: 0 0 5px 5px;
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`
export default FilterBar;
