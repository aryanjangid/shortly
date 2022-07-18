import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Information from './information'
import copy from "copy-to-clipboard";
import background from '../../Assets/Meteor.png';

const LinkShortnerSection = styled.div`
  background-color:#f0f1f6;
  text-align:center;
  padding:2rem 2rem;
  @media only screen and (max-width: 600px){
    padding:1rem 1rem;
  }
`
const SearchDiv = styled.div`
  background-color:#fff;
  text-align:center;
  width:80%;
  margin:auto;
  padding:4rem 4rem;
  position:relative;
  top:-5rem;
  border-radius:0.5rem;
  @media only screen and (max-width: 600px){
    padding:2rem 1rem;
    width:100%
  }
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  form{
    display:flex;
    justify-content:space-between;

    @media only screen and (max-width: 600px){
      flex-direction: column;
    }
  }
  input{
    font-weight:500;
    color:#F37878;
    width:80%;
    height:3rem;
    padding:1.5rem 1rem;
    font-size:1.1rem;
    border-radius:0.5rem;
    border:0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media only screen and (max-width: 600px){
      width:100%;
      font-size:0.9rem;
      margin-bottom:1rem;
    }
  }
  input::placeholder{
    color:#F37878;
  }
  button{
    padding:0.1rem 2rem;
    border-radius:0.5rem;
    background-color:#2ad1d3;
    border:0px;
    color: white;
    font-weight:500;
    font-size:1rem;
    font-family: 'Poppins', sans-serif;
    cursor:pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    &:hover{
      background-color:#3a3053;
    }

    @media only screen and (max-width: 600px){
      padding:0.5rem 2rem;
      
    }
  }
  
`

const Links = styled.div`
  width:80%;
  background-color:white;
  margin:2rem auto;
  padding:1rem 4rem;
  display:flex;
  justify-content:space-between;
  position:relative;
  top:-5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius:0.5rem;
  p{
    font-weight:500;
    margin:auto 0;
    @media only screen and (max-width: 600px){
      margin-bottom:0.5rem;
      font-size:0.9rem;
    }
  }
  @media only screen and (max-width: 600px){
    width:100%;
    flex-direction: column;
    padding:0.7rem 1rem;
  }
`

const CopyLink = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  
  a{
    color:#2AD0D0;
    @media only screen and (max-width: 600px){
      margin-bottom:0.5rem;
    }
  }

  button {
    display: inline-block;
    padding: .75rem 1.25rem;
    border-radius: 0.5rem;
    border:0;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: .15rem;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background-color: #9be3e2;
    margin-left:2rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #9be3e2;
      border-radius: 1rem;
      z-index: -2;
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: #3a3053;
      transition: all .3s;
      border-radius: 0.5rem;
      z-index: -1;
    } 
    &:hover {
      color: #fff;
      &:before {
        width: 100%;
      }
    }

    @media only screen and (max-width: 600px){
      margin-left:0;
      widhth:100%;
    }

  }

  @media only screen and (max-width: 600px){
    width:100%;
    flex-direction: column;
    text-align:left;
  }

`


const linkShortner = () => {
  

  const [links, setLinks] = useState([]);
  const [done, setDone] = useState(false);
  const [longLink, setLongLink] = useState("");
  const [queryLink, setQueryLink] = useState("")
  const [copied, setcopied] = useState([]);


  const handleClick = async (e) => {
    e.preventDefault();
    fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`).then(response => response.json()).then(data => {
      setLinks([data['result']['full_short_link'], data['result']['full_short_link2']])
      setDone(true);
      setcopied(["copy", "copy"]);
      setQueryLink(longLink);
    })
  }

  const copyToClipboard = (link, index) => {
    copy(link);
    let updatedCopy = copied;
    updatedCopy[index] = 'Copied!';
    setcopied([...updatedCopy]);
  }

  return (
    <LinkShortnerSection>
      <SearchDiv>
        <form onsubmit="required()">
          <input type="text" placeholder="Shorten a link here." onChange={e => setLongLink(e.target.value)} />
          <button type="submit" onClick={handleClick}>Shorten It!</button>
        </form>
      </SearchDiv>
      <div>
        {done && links.length !== 0 ? (
          <>
            {
              links.map((link, index) => {
                return (<Links>
                  <p>{queryLink}</p>
                  <CopyLink>
                    <a target="_blank" href={link}>{link}</a>
                    <button onClick={() => copyToClipboard(link, index)} >{copied[index]}</button>
                  </CopyLink>
                </Links>)
              })
            }
          </>
        ) : ''}
      </div>
      <Information />
    </LinkShortnerSection >
  )
}

export default linkShortner