import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import distress from "../pro_images/Distress.jpg"


const Proj1920 = () => {

    return (
    <>
        <Card color="#9A3B3C">
            <CardContent>
                <CardHeader>2019 - 2020</CardHeader>
          <CardImage url={distress} />
          <CardText>Our main objective is introducing to people worldwide the rich traditions, language, literature, and art of a nation whose diverse cultural threads are interwoven into the ethnic tapestries of the world.  Project Descriptoin</CardText>

          </CardContent>
        </Card>
    </>
    )
  }





  const CardContent = styled.div`
  justify-content:center;
  `

  const CardText = styled.div`
  justify-content:center;
  max-width:322px;
  margin-left:35px;
  margin-top: 30px;
  `
  const CardHeader = styled.div`
  padding:10px;
  display:flex;
  justify-content: center;
  color:white;
  width:370px;
  border-radius: 10px 10px 0px 0px;
  background: #9A3B3C;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom:30px
  `
  const Card = styled.div`
  display: flex;
  transition: 0.3s;
  width: 385px;
  height: 525px;
  border: 3px solid ${props => props.color};
  border-radius: 15px;
  justify-content: space-around;
  margin-bottom:30px;
  color: ${props => props.color};
`;

const CardImage = styled.div`
margin-left:30px;
  display:flex;
  justify-content: center;
  width: 325px;
  height: 270px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
`;





  export default Proj1920;