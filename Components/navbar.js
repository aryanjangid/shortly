import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components';
import Link from 'next/link';

const Navbar = styled.div`
    color: #000;
    display:flex;
    justify-content: space-between;
    padding:20px 10px;
`;

const StyledLink=styled.a`
    padding:0 2rem;
`;

const navbar = () => {
    return (
        <Navbar>
            <div>
                <Link href="/" passHref>
                    <StyledLink>Shortly</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/feature' passHref>
                    <StyledLink>Feature</StyledLink>
                </Link>
                <Link href='/resources' passHref>
                    <StyledLink>Resources</StyledLink>
                </Link>
                <Link href='/pricing' passHref>
                    <StyledLink>Pricing</StyledLink>
                </Link>
            </div>
        </Navbar>
    )
}

export default navbar
