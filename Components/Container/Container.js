import React from "react";
import styled from "styled-components";
import media from "./../../styles/Responsive";

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  ${media.up("sm")} {
    max-width: 768px;
  }
  ${media.up("md")} {
    max-width: 912px;
  }
  ${media.up("lg")} {
    max-width: 1200px;
  }
  ${media.up("xl")} {
    max-width: 1200px;
  }
  ${media.up("xxl")} {
    max-width: 1440px;
  }
`;

const Container = ({children}) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
