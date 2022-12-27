import React from 'react'
import img from "../../Images/hero/my-image.png"
import Container from '../../Components/Container/Container';
import { H1, H4 } from '../../styles/ShareStyles';
import StyledHero from './StyledHero';
import Button from './../../Components/Button/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <StyledHero id="hero">
      <Container>
        <div className="inner">
          <div className="left">
            <H1 className="title">
              Sajib <span className="title__style"> Ahmed</span>
            </H1>
            <H4 className="description">Web Developer based In Bangladesh</H4>
            <Button className="btn" href="#footer" text="Get Connected" />
          </div>
          <div className="right">
            <Image src={img} alt="man img" className="right__img" width="auto" height="auto"/>
          </div>
        </div>
      </Container>
    </StyledHero>
  );
}

export default Hero