import React from 'react'
import Button from '../../../Components/Button/Button';
import StyledHero from './StyledHero';
import Container from './../../../Components/Container/Container';
import { H1, H4 } from '../../../styles/ShareStyles';
import Image from 'next/image';
import img from "../../../Images/hero/avatar.png"

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <div className="inner">
          <div className="left">
            <H1>Sajib Ahmed</H1>
            <H4>Web Developer based In Bangladesh</H4>
            <Button className="btn" text="Submit Now" />
          </div>
          <div className="right">
            <Image src={img} alt="man img" className='right__img' />
          </div>
        </div>
      </Container>
    </StyledHero>
  );
}

export default Hero