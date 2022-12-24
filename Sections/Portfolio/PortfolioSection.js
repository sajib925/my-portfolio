import React from "react";
import Container from "../../Components/Container/Container";
import StyledPortfolioSection from "./StyledPortfolioSection";
import {H2, H4} from "../../styles/ShareStyles";
import Card from "./Card";
import portfolio from "../../Images/portfolio/portfolio.png";
import pungent from "../../Images/portfolio/pungent.png";
import minimog from "../../Images/portfolio/baby-store.png";
import okiro from "../../Images/portfolio/okiro.png";
import grover from "../../Images/portfolio/grover.png";
import login from "../../Images/portfolio/login.png";
import Link from "next/link";

const PortfolioSection = () => {
  console.log(grover);
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
            E-Commerce
          </Link>
          <Link href="/" className="links__link">
            Landing
          </Link>
          <Link href="/" className="links__link">
            Blog
          </Link>
          <Link href="/" className="links__link">
            Portfolio
          </Link>
          <Link href="/" className="links__link">
            Dashboard
          </Link>
        </div>

        <div className="cards">
          <div className="cards__card">
            <Card
              to="https://mahade-vai-test.vercel.app/"
              img={minimog}
              title="Minimog"
              description="Live Preview"
            />
          </div>
          <div className="cards__card">
            <Card
              to="https://portfolio-mu-nine-36.vercel.app/"
              img={portfolio}
              title="Portfolio"
              description="Live Preview"
            />
          </div>
          <div className="cards__card">
            <Card
              to="https://pungent-rho.vercel.app/"
              img={pungent}
              title="Pungent"
              description="Live Preview"
            />
          </div>
          <div className="cards__card">
            <Card
              to="https://facit-six.vercel.app/"
              img={login}
              title="Dashboard"
              description="Live Preview"
            />
          </div>
          <div className="cards__card">
            <Card
              to="https://okiro-eight.vercel.app/"
              img={okiro}
              title="Okiro"
              description="Live Preview"
            />
          </div>
          <div className="cards__card">
            <Card
              to="https://grover.vercel.app/"
              img={grover}
              title="Grover"
              description="Live Preview"
            />
          </div>
        </div>
      </Container>
    </StyledPortfolioSection>
  );
};

export default PortfolioSection;
