import React from 'react'
import styled from 'styled-components'
import {H4, P} from "../../styles/ShareStyles";
import Image from "next/image";
import Link from "next/link";
import THEME from "./../../styles/Theme";

const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;

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
  }

  .thumbnail {
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
  }
`;

const Card = ({to, img, title, description}) => {
  return (
    <StyledCard>
      <Link href={to} className="link"></Link>
      <div className="thumbnail">
        <Image src={img} alt="img" className="thumbnail__img" />
      </div>
      <div className="details">
        <H4 className="details__title">{title}</H4>
        <P className="details__description">{description}</P>
      </div>
    </StyledCard>
  );
}

export default Card