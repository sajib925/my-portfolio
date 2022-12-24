import styled from "styled-components";
import THEME from './../../styles/Theme';

const StyledSocialIcons = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
    padding: 0;

    .link {
        color: ${THEME.colors.whiteColor};
        transition: all ease-in-out 0.15s;

        &:hover {
          color: ${THEME.colors.extraColor};
        }
      }
    
  
`;

export default StyledSocialIcons