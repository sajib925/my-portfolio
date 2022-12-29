import React from "react";
import styled from "styled-components";
import {H4, P} from "../../styles/ShareStyles";
import Image from "next/image";
import Link from "next/link";
import THEME from "./../../styles/Theme";
import { motion } from 'framer-motion';

const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  &:hover {
    .thumbnail__img {
      transform: scale(1.2);
    }
  }
  &:hover {
    .details {
      transform: translateY(0);
    }
  }

  .link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1111;
  }

  .thumbnail {
    width: 100%;
    height: 334px;

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }

  .details {
    position: absolute;
    z-index: 2;
    bottom: 20px;
    left: 20px;
    right: 20px;
    background-color: ${THEME.colors.yankeesBlue};
    padding: 20px;
    border-radius: 12px;
    transform: translateY(125%);
    transition: all 0.3s ease;
    text-align: center;
  }
`;

const Card = ({to, img, title, description}) => {
  return (
    <motion.div
      layout
      initial={{x: 20, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      exit={{x: -20, opacity: 0}}
      transition={{duration: 0.3}}
    >
      <StyledCard>
        <Link href={to} className="link" target="_blank"></Link>
        <div className="thumbnail">
          <Image
            src={img}
            alt="img"
            className="thumbnail__img"
            width="auto"
            height="auto"
          />
        </div>
        <div className="details">
          <H4 className="details__title">{title}</H4>
          <P className="details__description">{description}</P>
        </div>
      </StyledCard>
    </motion.div>
  );
};

export default Card;
