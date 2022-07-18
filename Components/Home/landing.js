import React from 'react'
import Image from 'next/image'
import img from '..//../Assets/peopleWorking.svg';
import styled from 'styled-components'

const Landing=styled.div`
    text-align: center;
`

const Heading=styled.h1`
    text-align: center;
    font-size:4.5rem;
    margin-top:2rem;
    font-family: 'Poppins', sans-serif;
    font-weight:800;
    letter-spacing:0.2rem;
    color:#383838;

    @media only screen and (max-width: 600px){
        font-size:2.5rem;
        margin-top:2rem;
        padding:0 1rem;
        font-weight:800;
    }

`
const Images=styled(Image)`
    height:50px;
`


const landing = () => {
  return (
    <Landing>
      <Heading>MORE THAN JUST<br/> SHORTER LINKS</Heading>
      <div>
        <Images src={img}></Images>
      </div>
    </Landing>
  )
}

export default landing
