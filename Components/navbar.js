import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: grey;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #2ad1d3;
  }
`;

const Nav = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: 768px){
    justify-content: space-between;
  }
`;

const CompanyName = styled.a`
  
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  cursor: pointer;
  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 1.7rem;
    cursor: pointer;
    color:#383838;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: grey;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
        <Link href="/">
        <CompanyName href="">
            <span>Shortly</span>
        </CompanyName>
        </Link>
      
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link href="/resources"><MenuLink href="">Resources</MenuLink></Link>
        <Link href="/pricing"><MenuLink href="">Pricing</MenuLink></Link>
        <Link href="/feature"><MenuLink href="">Feature</MenuLink></Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;
