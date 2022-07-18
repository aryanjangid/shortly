import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import background from '../../Assets/Meteor.png'
import Image from 'next/image';


const Section=styled.div`
    background-color:#232027;
    color:white;
    text-align:center;
    position:relative;
    h1{
      text-align:center;
      white-space:nowrap;
        margin:1rem;
        position:absolute;
        top:20%;
        left:50%;
        transform:translate(-50%, -50%);
        z-index:1;

        @media only screen and (max-width: 600px){
          font-size:1.8rem;
          text-align:center;
          left:46%;
        }
    }
    div{
      position:absolute;
      margin-top:3rem;
      top:45%;
      left:50%;
      transform:translate(-50%, -50%);
    }
`

const StyledLink=styled.a`
    background-color:#9be3e2;
    text-align:center;
    width:fit-content;
    margin:auto;
    cursor: pointer;
    justify-content: center;
    padding:1rem 2rem;
    border-radius: 0.5rem;
    font-family: 'Poppins', sans-serif;
    margin-top:1rem;
`



const CallToAction = () => {

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  return (
    <Section>
      {useWindowSize().width<600?<Image alt='backgrundimage' width={1000} src={background}></Image>:<Image alt='backgrundimage' width={3000} src={background}></Image>}
        
        <h1>Boost your link today</h1>
        <div>
          <Link href="/"><StyledLink>Get Started</StyledLink></Link>
        </div>
    </Section>
  )
}

export default CallToAction;
