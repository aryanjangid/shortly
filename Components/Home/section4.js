import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';

const Section=styled.div`
    background-color:blue;
    padding:2rem;
    color:white;
    text-align:center;
    padding-bottom:3rem;
    h1{
        margin:1rem 0;
    }
`

const StyledLink=styled.div`
    background-color:#9be3e2;
    text-align:center;
    width:fit-content;
    margin:auto;
    cursor: pointer;
    justify-content: center;
    padding:1rem 2rem;
    border-radius: 0.5rem;
    font-family: 'Poppins', sans-serif;
`

const section4 = () => {
  return (
    <Section>
        <h1>Boost your link today</h1>
        <Link href="/"><StyledLink>Get Started</StyledLink></Link>
    </Section>
  )
}

export default section4
