import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import img from '..//../Assets/icon-brand-recognition.svg';

const Statistics=styled.div`
    text-align: center;
    margin:2rem 0;
    
`

const Heading=styled.h1`
    font-size:2.2rem;
    @media only screen and (max-width: 600px){
        margin-top:4rem;
    }
`

const SubHeading=styled.p`
    padding:0 4rem; 
    @media only screen and (max-width: 600px){
        padding:0;
    }
`

const Boxes=styled.div`
    display:flex;
    margin:4rem 0;
    @media only screen and (max-width: 600px){
        flex-direction:column;
    }
`

const Card=styled.div`
    background-color:#fff;
    text-align: left;
    padding:1.5rem; 
    border-radius:1rem;
    h2{
        color: black;
        margin-top:-40px;
    }
    @media only screen and (max-width: 600px){
        text-align: center;
    }
`

const ImgDiv=styled.div`
    width: 80px;
    border-radius:50%;
    padding:1.2rem;
    background-color: #3a2c51;
    position: relative;
    top:-3.7rem;
    left:0.3rem;
    @media only screen and (max-width: 600px){
        left:auto;
        margin:auto;
    }
`

const Line=styled.div`
    background-color:#9be3e2;
    width:40%;
    height:1rem;
    align-items: center;
    margin:auto;
    @media only screen and (max-width: 600px){
        height:7rem;
        width:4%;
    }
`

const section3 = () => {
  return (
    <Statistics>
        <Heading>Advanced Statistics</Heading>
        <SubHeading>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</SubHeading>
        <Boxes>
            <Card>
                <ImgDiv>
                    <Image src={img}></Image>
                </ImgDiv>
                <h2>Brand Recognition</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </Card>
            <Line></Line>
            <Card>
                <ImgDiv>
                    <Image src={img}></Image>
                </ImgDiv>
                <h2>Brand Recognition</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </Card>
            <Line></Line>
            <Card>
                <ImgDiv>
                    <Image src={img}></Image>
                </ImgDiv>
                <h2>Brand Recognition</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </Card>
        </Boxes>
    </Statistics>
  )
}

export default section3
