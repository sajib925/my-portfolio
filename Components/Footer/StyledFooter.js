import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from './../../styles/Theme';

const StyledFooter = styled.footer`
  .social__links {
    background-color: ${THEME.colors.footerBg};
    padding: 38px 0;
    border-radius: 12px;
    &__title {
      text-align: center;
      margin-bottom: 28px;
    }

    .links {
      justify-content: center;
      column-gap: 35px;
    }
  }

  .copyright {
    text-align: center;
    padding: 38px;

    &__link {
      font-size: 16px;
      color: ${THEME.colors.whiteColor};
      padding: 0 5px;
    }
  }
`;

export default StyledFooter