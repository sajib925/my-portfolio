import styled from "styled-components";
import THEME from "../../styles/Theme";

const StyledButton = styled.div`
  display: inline-block;

  .btn {
    display: inline-block;
    text-decoration: none;
    outline: none;
    font-family: ${THEME.fonts.fontFamilyExtra};
    font-size: 18px;
    color: ${THEME.colors.whiteColor};
    display: inline-block;
    background-color: ${THEME.colors.extraColor};
    padding: 18px 43px;
    border-radius: 50px;
    overflow: hidden;
    position: relative;

    &::before {
      position: absolute;
      content: "";
      left: -10px;
      right: -10px;
      bottom: -10px;
      top: -10px;
      background-color: ${THEME.colors.whiteColor};
      transform: translateY(100%);
      transition: all 0.3s ease;
    }

    &:hover {
      color: ${THEME.colors.blackColor};

      &::before {
        transform: translateY(0);
      }
    }
    .btn__text {
      z-index: 2;
      position: relative;
      &:hover {
        color: ${THEME.colors.blackColor};
      }
    }
  }
`;

export default StyledButton;
