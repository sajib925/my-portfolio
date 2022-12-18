import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from "../../styles/Theme";

const StyledContactSection = styled.section`
  padding: 0 0 100px;

  .sub__title {
    text-align: center;
    margin-bottom: 5px;
    color: ${THEME.colors.extraColor};
  }
  .title {
    text-align: center;
    margin-bottom: 40px;

    ${media.up("md")} {
      margin-bottom: 60px;
    }

    ${media.up("lg")} {
      margin-bottom: 80px;
    }
  }
  .contact {
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    ${media.up("lg")} {
      row-gap: 0;
    }
  }
  .address {
    width: 100%;

    ${media.up("lg")} {
      width: 50%;
    }
    &__item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 25px;
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }
    &__icon {
      width: 88px;
      height: 88px;
      border-radius: 100%;
      background-color: ${THEME.colors.extraColor};
      color: ${THEME.colors.whiteColor};
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__text {
      &__title {
        margin-bottom: 5px;
      }
      &__description {
      }
    }
  }

  .form {
    width: 100%;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    ${media.up("lg")} {
      width: 50%;
    }
    &__input {
      width: 100%;
      border-radius: 8px;
      border: 1px solid ${THEME.colors.borderColor};
      padding: 0 30px;
      background-color: transparent;
      color: ${THEME.colors.mainColor};
      font-size: 18px;
      outline: none;
      height: 58px;
      ${media.up("md")} {
        width: calc(50% - 6px);
      }
    }
    &__textarea {
      width: 100%;
      height: 200px;
      padding: 30px;
      resize: none;
    }
  }
`;

export default StyledContactSection;
