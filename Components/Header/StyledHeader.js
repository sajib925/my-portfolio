import styled from "styled-components";
import THEME from "./../../styles/Theme";
import media from "./../../styles/Responsive";

const StyledHeader = styled.header`
  position: relative;
  padding: 10px 0;
  background-color: ${THEME.colors.yankeesBlue};
  border-bottom: 1px solid ${THEME.colors.borderColor};

  ${media.up("lg")} {
    padding: 30px 0;
    background-color: transparent;
    border-bottom: 1px solid transparent;
  }

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
  }

  .details {
    display: flex;
    align-items: center;
    column-gap: 60px;
  }

  /* mobile nav style */

  .menu {
    display: none;
    transition: all ease-in-out 5s;

    ${media.down("lg")} {
      position: fixed;
      top: 62px;
      left: 0;
      width: 100%;
      background-color: ${THEME.colors.yankeesBlue};
      transition: all ease-in-out 5s;
    }
  }

  .open__menu {
    display: block;
    transform: translateY(0);
    transition: all ease-in-out 5s;
  }

  .close__menu {
    display: none;
    transform: translateY(-100%);
    transition: all ease-in-out 5s;

    ${media.up("lg")} {
      display: block;
      transform: translateY(0);
    }
  }

  /* mobile nav style  */

  /* desktop nav style */

  .anchor__nav {
    display: flex;
    padding: 40px 25px;
    flex-direction: column;

    ${media.up("lg")} {
      padding: 0;
      column-gap: 30px;
      flex-direction: row;
    }

    &__item {
      &__link {
        font-size: 16px;
        font-weight: ${THEME.weight.weightNormal};
        color: ${THEME.colors.whiteColor};
        font-family: ${THEME.fonts.fontFamilyExtra};
        line-height: 30px;
        transition: all ease-in-out 0.15s;

        &:hover {
          color: ${THEME.colors.extraColor};
        }
      }
    }
  }

  /* desktop nav style */

  /* social icons style  */

  .social {
    position: relative;
    display: none;
    ${media.up("lg")} {
      display: block;
    }
    &::before {
      position: absolute;
      content: "|";
      left: -30px;
      top: -2px;
    }
  }

  .icons {
    display: flex;
    align-items: center;
    column-gap: 12px;
    padding: 0;
    &__item {
      &__link {
        color: ${THEME.colors.whiteColor};
        transition: all ease-in-out 0.15s;

        &:hover {
          color: ${THEME.colors.extraColor};
        }
      }
    }
  }

  /* social icons style  */

  /* mobile menu Bar  */

  .trigger {
    display: block;

    ${media.up("lg")} {
      display: none;
    }

    .toggle__menu {
      .bar {
        display: block;
        width: 25px;
        height: 4px;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
        background-color: ${THEME.colors.whiteColor};
      }
    }
    .closeMobileMenu {
      .bar:nth-child(2) {
        opacity: 0;
      }
      .bar:nth-child(1) {
        transform: translateY(8px) rotate(-45deg);
      }
      .bar:nth-child(3) {
        transform: translateY(-10px) rotate(45deg);
      }
    }
  }

  /* mobile menu Bar  */
`;

export default StyledHeader;
