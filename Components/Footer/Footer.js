import Link from 'next/link';
import React from 'react'
import StyledFooter from './StyledFooter';
import {H2, P} from "../../styles/ShareStyles"
import SocialIcons from './../SocialIcons/SocialIcons';
import Container from './../Container/Container';

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <Container>
        <div className="social__links">
          <H2 className="social__links__title">Connect with me</H2>
          <SocialIcons className="links" />
        </div>

        <P className="copyright">
          Developed with love by 
          <Link href="/" className="copyright__link">
            Sajib Ahmed
          </Link>
           © 2022
        </P>
      </Container>
    </StyledFooter>
  );
}

export default Footer