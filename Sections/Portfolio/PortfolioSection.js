import React, {useState} from "react";
import Container from "../../Components/Container/Container";
import StyledPortfolioSection from "./StyledPortfolioSection";
import {H2, H4} from "../../styles/ShareStyles";
import Card from "./Card";
import Link from "next/link";
import DATA from "../../Components/Data";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState();
  const [selectedCategory, setSelectedCategory] = useState(DATA.card);

  const HandleClickIndex = (index) => {
    setActiveIndex(index);
  };
  const HandleFilterData = (text) => {
    const filterData = DATA.card.filter((item) => item.category === text)
    setSelectedCategory(text === "All" ?DATA.card : filterData);
  };
  return (
    <StyledPortfolioSection id="portfolio">
      <Container>
        <H4 className="sub__title">Portfolio</H4>

        <H2 className="title">What I Do for My Clients</H2>
        <ul className="links">
          {DATA.portfolioLink.map(({id, to, text}, index) => {
            return (
              <li
                onClick={() => {
                  HandleClickIndex(index);
                  HandleFilterData(text);
                }}
                className={
                  activeIndex === index
                    ? "links__active links__item"
                    : "links__item"
                }
                key={id}
              >
                <Link href={to} className="links__item__link">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>

        <motion.div
          layout
          
          className="cards"
        >
          {selectedCategory.map(({to, img, title, description}, index) => {
            return (
              <div className="cards__card" key={index}>
                <Card
                  to={to}
                  img={img}
                  title={title}
                  description={description}
                />
              </div>
            );
          })}
        </motion.div>
      </Container>
    </StyledPortfolioSection>
  );
};

export default PortfolioSection;
