// import React from 'react'
// import styled from 'styled-components';
// import Link from 'next/link';
// import { useState } from 'react';
// import LogoImg from '../Assets/logo.svg'

// export const NavbarContainer = styled.nav`
//   width: 100%;
//   height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
//   background-color: black;
//   display: flex;
//   flex-direction: column;
//   @media (min-width: 700px) {
//     height: 80px;
//   }
// `;

// export const LeftContainer = styled.div`
//   flex: 70%;
//   display: flex;
//   align-items: center;
//   padding-left: 5%;
// `;

// export const RightContainer = styled.div`
//   flex: 30%;
//   display: flex;
//   justify-content: flex-end;
//   padding-right: 50px;
// `;

// export const NavbarInnerContainer = styled.div`
//   width: 100%;
//   height: 80px;
//   display: flex;
// `;

// export const NavbarLinkContainer = styled.div`
//   display: flex;
// `;

// export const NavbarLink = styled(Link)`
//   color: white;
//   font-size: x-large;
//   font-family: Arial, Helvetica, sans-serif;
//   text-decoration: none;
//   margin: 10px;
//   @media (max-width: 700px) {
//     display: none;
//   }
// `;

// export const NavbarLinkExtended = styled(Link)`
//   color: white;
//   font-size: x-large;
//   font-family: Arial, Helvetica, sans-serif;
//   text-decoration: none;
//   margin: 10px;
// `;

// export const Logo = styled.img`
//   margin: 10px;
//   max-width: 180px;
//   height: auto;
// `;

// export const OpenLinksButton = styled.button`
//   width: 70px;
//   height: 50px;
//   background: none;
//   border: none;
//   color: white;
//   font-size: 45px;
//   cursor: pointer;
//   @media (min-width: 700px) {
//     display: none;
//   }
// `;

// export const NavbarExtendedContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   @media (min-width: 700px) {
//     display: none;
//   }
// `;

// const navbar2 = () => {
//     const [extendNavbar, setExtendNavbar] = useState(false);
//     return (
//       <NavbarContainer extendNavbar={extendNavbar}>
//         <NavbarInnerContainer>
//           <LeftContainer>
//             <NavbarLinkContainer>
//               <NavbarLink to="/"> Home</NavbarLink>
//               <NavbarLink to="/products"> Products</NavbarLink>
//               <NavbarLink to="/contact"> Contact Us</NavbarLink>
//               <NavbarLink to="/about"> About Us</NavbarLink>
//               <OpenLinksButton
//                 onClick={() => {
//                   setExtendNavbar((curr) => !curr);
//                 }}
//               >
//                 {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
//               </OpenLinksButton>
//             </NavbarLinkContainer>
//           </LeftContainer>
//           <RightContainer>
//             <Logo src={LogoImg}></Logo>
//           </RightContainer>
//         </NavbarInnerContainer>
//         {extendNavbar && (
//           <NavbarExtendedContainer>
//             <NavbarLinkExtended href="/"> Home</NavbarLinkExtended>
//             <NavbarLinkExtended href="/feature"> Feature</NavbarLinkExtended>
//             <NavbarLinkExtended href="/resources">Resources</NavbarLinkExtended>
//             <NavbarLinkExtended href="/pricing"> Pricing</NavbarLinkExtended>
//           </NavbarExtendedContainer>
//         )}
//       </NavbarContainer>
//     )
// }

// export default navbar2
