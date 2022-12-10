import styled from "styled-components";
import media from "../../../styles/Responsive";

const StyledHero = styled.section`
  height: 100vh;
  width: 100%;
  .inner {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    ${media.up("lg")} {
      flex-wrap: nowrap;
    }
  }

  .left {
  }
  .right {
    width: 50%;
    padding-left: 80px;
    &__img {
      ${media.up("lg")} {
        max-width: 400px;
        max-height: 400px;
      }
      ${media.up("xxl")} {
        max-width: 600px;
        max-height: 600px;
      }
    }
  }
`;

export default StyledHero;
