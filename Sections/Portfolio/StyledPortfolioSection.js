import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from './../../styles/Theme';

const StyledPortfolioSection = styled.section`
  padding-top: 50px;

  ${media.up("md")} {
    padding-top: 70px;
  }

  ${media.up("lg")} {
    padding-top: 100px;
  }

  .sub__title {
    color: ${THEME.colors.mainColor};
    text-align: center;
    margin-bottom: 5px;
    color: ${THEME.colors.extraColor};
  }

  .title {
    text-align: center;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 35px;
    row-gap: 20px;
    margin-top: 60px;
    margin-bottom: 55px;

    &__link {
      color: ${THEME.colors.whiteColor};
      font-family: ${THEME.fonts.fontFamilyExtra};
      font-weight: ${THEME.weight.weightMedium};
      transition: all 0.3s ease;

      &:hover {
        color: ${THEME.colors.extraColor};
      }
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    &__card {
      margin: 0 0 13px;

      width: 100%;
      ${media.up("md")} {
        width: calc(50% - 15px);
      }
      ${media.up("lg")} {
        width: calc(33.33% - 15px);
      }
    }
  }
`;

export default StyledPortfolioSection