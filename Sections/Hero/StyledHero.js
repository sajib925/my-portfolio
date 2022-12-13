import styled from "styled-components";
import media from "./../../styles/Responsive";
import THEME from './../../styles/Theme';

const StyledHero = styled.section`
  padding-bottom: 100px;
  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    flex-wrap: wrap;

    ${media.up("lg")} {
      flex-wrap: nowrap;
      flex-direction: row;
    }
  }

  .left {
    width: 100%;
    text-align: center;

    ${media.up("lg")} {
      width: 50%;
      text-align: start;
    }

    .title {
      margin-bottom: 20px;

      &__style {
        color: ${THEME.colors.extraColor};
      }
    }

    .description {
      margin-bottom: 35px;
    }
  }
  .right {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;

    ${media.up("lg")} {
      width: 50%;
      padding-left: 80px;
      margin-bottom: 0;
    }
    &__img {
      width: auto;
      max-width: 300px;
      max-height: 300px;
      margin: 0 auto;

      ${media.up("sm")} {
        max-width: 400px;
        max-height: 400px;
      }

      ${media.up("lg")} {
        margin: 0 0 0 auto;
      }

      ${media.up("xxl")} {
        max-width: 600px;
        max-height: 600px;
      }
    }
  }
`;

export default StyledHero;
