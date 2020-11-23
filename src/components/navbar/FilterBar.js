import React from "react"
import styled from "styled-components"

const FilterBar = () =>{
  return(
    <Row>
      <Col size={2}>
        <FilterTab>Audio</FilterTab>
      </Col>
      <Col size={2}>
        <FilterTab>Publishing</FilterTab>
      </Col>
      <Col size={2}>
        <FilterTab>Video</FilterTab>
      </Col>
      <Col size={2}>
        <FilterTab>Art Exhibits</FilterTab>
      </Col>
      <Col size={2}>
        <FilterTab>Live Events</FilterTab>
      </Col>
      <Col size={2}>
        <FilterTab>Education</FilterTab>
      </Col>
    </Row>
  )
}

const Row = styled.div`
  margin-bottom: 20px;
  display:flex;
  justify-content:center;
`

const Col = styled.div`
  flex: ${(props)=> props.size};
`

const FilterTab = styled.div`
  font-family: 'Merriweather Sans', sans-serif;
  text-align:center;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom 10px;
  text-transform: uppercase;
  color:#9A3B3C;
  background: white;
  border: 5px solid #FFD10B;
  border-radius:30px;
`

export default FilterBar;
