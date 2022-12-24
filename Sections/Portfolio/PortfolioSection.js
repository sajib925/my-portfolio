import React from "react";
import Container from "../../Components/Container/Container";
import StyledPortfolioSection from "./StyledPortfolioSection";
import {H2, H4} from "../../styles/ShareStyles";
import Card from "./Card";
import img from "../../Images/portfolio/photo.jpg";
import Link from "next/link";

const PortfolioSection = () => {
  return (
    <StyledPortfolioSection id="portfolio">
      <Container>
        <H4 className="sub__title">Portfolio</H4>

        <H2 className="title">What I Do for My Clients</H2>
        <div className="links">
          <Link href="/" className="links__link">
            All
          </Link>
          <Link href="/" className="links__link">
            Youtube
          </Link>
          <Link href="/" className="links__link">
            Vimeo
          </Link>
          <Link href="/" className="links__link">
            Soundcloud
          </Link>
          <Link href="/" className="links__link">
            popup
          </Link>
          <Link href="/" className="links__link">
            Content
          </Link>
        </div>

        <div className="cards">
          <div className="cards__card">
            <Card
              to="https://mahade-vai-test.vercel.app/"
              img={img}
              title="Axe Droow"
              description="Youtube"
            />
          </div>
          <div className="cards__card">
            <Card
              to="https://portfolio-mu-nine-36.vercel.app/"
              img={img}
              title="Axe Droow"
              description="Youtube"
            />
          </div>
          <div className="cards__card">
            <Card
              to="https://pungent-rho.vercel.app/"
              img={img}
              title="Axe Droow"
              description="Youtube"
            />
          </div>
          <div className="cards__card">
            <Card
              to="https://facit-six.vercel.app/login"
              img={img}
              title="Axe Droow"
              description="Youtube"
            />
          </div>
          <div className="cards__card">
            <Card
              to="https://okiro-eight.vercel.app/"
              img={img}
              title="Axe Droow"
              description="Youtube"
            />
          </div>
          <div className="cards__card">
            <Card to="/" img={img} title="Axe Droow" description="Youtube" />
          </div>
        </div>
      </Container>
    </StyledPortfolioSection>
  );
};

export default PortfolioSection;
