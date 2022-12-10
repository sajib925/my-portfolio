import styled from "styled-components";
import media from "./Responsive";
import THEME from "./Theme";

// H1
const H1 = styled.h1`
  font: normal ${THEME.weight.weightBold} 50px ${THEME.fonts.fontFamilyExtra};
  line-height: 1.1;
  color: ${THEME.colors.whiteColor};

  ${media.up("md")} {
    font-size: 65px;
  }

  ${media.up("xl")} {
    font-size: 75px;
  }

  ${media.up("xxl")} {
    font-size: 120px;
  }
`;

// H2
const H2 = styled.h2`
  font: normal ${THEME.weight.weightSemiBold} 29px
    ${THEME.fonts.fontFamilyExtra};
  line-height: 36px;
  color: ${THEME.colors.whiteColor};

  ${media.up("md")} {
    font-size: 35px;
    line-height: 42px;
  }

  ${media.up("xl")} {
    font-size: 40px;
    line-height: 50px;
  }

  ${media.up("xxl")} {
    font-size: 48px;
    line-height: 62px;
  }
`;

// H3
const H3 = styled.h3`
  font: normal ${THEME.weight.weightSemiBold} 24px
    ${THEME.fonts.fontFamilyExtra};
  line-height: 30px;
  color: ${THEME.colors.whiteColor};

  ${media.up("lg")} {
    font-size: 30px;
    line-height: 39px;
  }
`;

// H4
const H4 = styled.h5`
  font: normal ${THEME.weight.weightSemiBold} 17px
    ${THEME.fonts.fontFamilyExtra};
  line-height: 22px;
  color: ${THEME.colors.whiteColor};

  ${media.up("md")} {
    font-size: 19px;
    line-height: 24px;
  }

  ${media.up("lg")} {
    font-size: 21px;
    line-height: 26px;
  }
`;

// lg p
const P = styled.p`
  color: ${THEME.colors.mainColor};
  font: normal ${THEME.weight.weightNormal} 16px ${THEME.fonts.fontFamilyMain};
  line-height: 26px;

  ${media.up("lg")} {
    font-size: 18px;
    line-height: 30px;
  }
`;

export {H1, H2, H3, H4, P};
