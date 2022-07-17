import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Section3 from './section3'

const Section = styled.div`
  background-color:#f0f1f6;
  text-align:center;
  padding:2rem 2rem;
`
const SearchDiv = styled.div`
  background-color:#fff;
  text-align:center;
  width:80%;
  margin:auto;
  padding:1rem 1rem;
  form{
    margin:1rem;
  }
  input{
    color:red;
    width:70%;
    height:3rem;
    padding:2rem 1rem;
    font-size:1.4rem;
    border-radius:1rem;
  }
  button{
    // width:10%;
    margin:0 2rem;
    padding:1rem 2rem;
    border-radius:1rem;
    background-color:#9be3e2;
    border:0px;
    color: black;
    font-weight:500;
    font-family: 'Poppins', sans-serif;
  }
  
`

const Section2 = () => {

  const [link, setlink] = useState("");
  const [done, setDone] = useState(false);
  const [longLink, setLongLink] = useState("")


  const handleClick = async (e) => {
    e.preventDefault();
    fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`).then(response => response.json()).then(data => setlink(data['result']['full_short_link']))
    console.log(link);
    setDone(true);
  }

  return (
    <Section>
      <SearchDiv>
        <form >
          <input type="text" placeholder="Shorten a link here.." name="search" required onChange={e => setLongLink(e.target.value)} />
          <button type="submit" onClick={handleClick}>Submit</button>
        </form>
      </SearchDiv>
      <div>
        {done ? (<a href={link}>Link</a>) : ''}
      </div>
      <Section3 />
    </Section>
  )
}

export default Section2