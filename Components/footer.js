import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link';
import facebook from '../Assets/icon-facebook.svg'
import twitter from '../Assets/icon-twitter.svg'
import pinterest from '../Assets/icon-pinterest.svg'
import instagram from '../Assets/icon-instagram.svg'
import { css } from 'styled-components';

const Footer = styled.div`
    background-color:#232027;
    display:flex;
    padding:2rem;
    color: #fff;

    @media only screen and (max-width: 600px){
        flex-direction: column;
        text-align: center;
    }
`

const Col1 = styled.div`
    margin:0 2rem;
    padding-left:5rem;
    width:30%;
    h1{ 
        font-family: 'Poppins', sans-serif;
    }
    @media only screen and (max-width: 600px){
        width:100%;
        margin:0;
        padding:0;
        text-align: center;
    }
`
const Social = styled.div`
    ${({ mobile }) => mobile ?
        css`
        display:flex;
        `:
        css`
        display:none;
        `
    };
    @media only screen and (max-width: 600px){
        margin:0 2rem;
        justify-content:center;
        align-items: center;
        ${({ mobile }) => mobile ?
        css`
        display:none;
        `:
        css`
        display:flex;
        `
        };
    }
`

const Col2 = styled.div`
    margin:0 2rem;
    padding 1rem 2rem;
`
const Linkes = styled.div`
    margin-right:1rem;
    cursor:pointer;
`

const Heading = styled.h1`
    font-size:1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight:700;
`
const SubLinks = styled.h5`
    font-size:1rem;
    margin:0.8rem 0;
    font-weight:500;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    color:grey;
    &:hover{
        color:#2acfcf;
    }
`

const footer = () => {
    return (
        <Footer>
            <Col1>
                <h1>Shortly</h1>
                <Social mobile>
                    <Linkes><Link href="/"><Image src={facebook}></Image></Link></Linkes>
                    <Linkes><Link href="/"><Image src={twitter}></Image></Link></Linkes>
                    <Linkes><Link href="/"><Image src={pinterest}></Image></Link></Linkes>
                    <Linkes><Link href="/"><Image src={instagram}></Image></Link></Linkes>
                </Social>
            </Col1>
            <Col2>
                <Heading>Features</Heading>
                <SubLinks>Link Shorting</SubLinks>
                <SubLinks>Branded Linkes</SubLinks>
                <SubLinks>Analytics</SubLinks>
            </Col2>
            <Col2>
                <Heading>Resouces</Heading>
                <SubLinks>Blog</SubLinks>
                <SubLinks>Developers</SubLinks>
                <SubLinks>Support</SubLinks>
            </Col2>
            <Col2>
                <Heading>Company</Heading>
                <SubLinks>About</SubLinks>
                <SubLinks>Our Team</SubLinks>
                <SubLinks>Careers</SubLinks>
                <SubLinks>Contact</SubLinks>
            </Col2>
            <Social>
                    <Linkes><Link href="/"><Image src={facebook}></Image></Link></Linkes>
                    <Linkes><Link href="/"><Image src={twitter}></Image></Link></Linkes>
                    <Linkes><Link href="/"><Image src={pinterest}></Image></Link></Linkes>
                    <Linkes><Link href="/"><Image src={instagram}></Image></Link></Linkes>
            </Social>
        </Footer>
    )
}

export default footer
